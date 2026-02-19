import { getSupabase, type Stats } from './client';

// Generate or get visitor ID from localStorage
const getVisitorId = (): string => {
    const STORAGE_KEY = 'vitalspath_visitor_id';
    let visitorId = localStorage.getItem(STORAGE_KEY);
    
    if (!visitorId) {
        visitorId = 'vp_' + crypto.randomUUID();
        localStorage.setItem(STORAGE_KEY, visitorId);
    }
    
    return visitorId;
};

// Track page view
export const trackPageView = async (page: string, lang: string): Promise<void> => {
    const supabase = getSupabase();
    if (!supabase) return;
    
    const visitorId = getVisitorId();
    
    try {
        // Insert page view
        await (supabase as any).from('page_views').insert({
            visitor_id: visitorId,
            page,
            lang,
            referrer: document.referrer || null,
            user_agent: navigator.userAgent,
        });
        
        // Update or insert active session
        await (supabase as any).from('active_sessions').upsert({
            visitor_id: visitorId,
            page,
            lang,
            last_activity: new Date().toISOString(),
        }, { onConflict: 'visitor_id' });
    } catch (error) {
        console.error('Error tracking page view:', error);
    }
};

// Update heartbeat (keep session alive)
export const updateHeartbeat = async (): Promise<void> => {
    const supabase = getSupabase();
    if (!supabase) return;
    
    const visitorId = getVisitorId();
    
    try {
        await (supabase as any).from('active_sessions').update({
            last_activity: new Date().toISOString(),
        }).eq('visitor_id', visitorId);
    } catch (error) {
        // Silent fail for heartbeat
    }
};

// Subscribe to waitlist
export const subscribeToWaitlist = async (email: string, source: string = 'landing'): Promise<{ success: boolean; error?: string }> => {
    const supabase = getSupabase();
    
    if (!supabase) {
        return { success: false, error: 'Database not configured' };
    }
    
    try {
        const { error } = await (supabase as any).from('waitlist').insert({
            email: email.toLowerCase().trim(),
            source,
        });
        
        if (error) {
            if (error.code === '23505') {
                return { success: true }; // Already subscribed
            }
            return { success: false, error: error.message };
        }
        
        return { success: true };
    } catch (error) {
        return { success: false, error: 'Network error' };
    }
};

// Get stats
export const getStats = async (): Promise<Stats | null> => {
    const supabase = getSupabase();
    if (!supabase) return null;
    
    try {
        // Try RPC first (best performance and bypasses strict RLS if security definer)
        const { data, error } = await (supabase as any).rpc('get_stats');
        
        if (!error && data) {
            return data as Stats;
        }
        
        // Fallback: Client-side aggregation (subject to RLS)
        // This allows the widget to work even if the RPC function isn't created,
        // provided RLS policies allow reading these tables.
        
        const stats: Stats = {
            total_signups: 0,
            today_signups: 0,
            today_visitors: 0,
            online_now: 0,
            total_visitors: 0
        };

        // 1. Total Signups
        const { count: signupsCount } = await supabase
            .from('waitlist')
            .select('*', { count: 'exact', head: true });
        if (signupsCount !== null) stats.total_signups = signupsCount;

        // 2. Online Now (Active Sessions > 5 min ago)
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
        const { count: onlineCount } = await supabase
            .from('active_sessions')
            .select('*', { count: 'exact', head: true })
            .gt('last_activity', fiveMinutesAgo);
        if (onlineCount !== null) stats.online_now = onlineCount;
        
        // 3. Today Visitors
        const today = new Date().toISOString().split('T')[0];
        const { data: visitorsData } = await supabase
            .from('page_views')
            .select('visitor_id')
            .gt('created_at', today);
            
        if (visitorsData) {
            const uniqueVisitors = new Set(visitorsData.map(v => v.visitor_id));
            stats.today_visitors = uniqueVisitors.size;
        }
        
        return stats;
    } catch (error) {
        console.error('Error fetching stats:', error);
        return null; // Return null on catastrophic failure
    }
};

// Get total signups count (for display)
export const getSignupCount = async (): Promise<number> => {
    const stats = await getStats();
    return stats?.total_signups || 0;
};

// Start heartbeat interval
export const startHeartbeat = (): (() => void) => {
    const interval = setInterval(updateHeartbeat, 30000); // Every 30 seconds
    
    // Cleanup on page unload
    const cleanup = () => {
        clearInterval(interval);
    };
    
    window.addEventListener('beforeunload', cleanup);
    
    return () => {
        clearInterval(interval);
        window.removeEventListener('beforeunload', cleanup);
    };
};
