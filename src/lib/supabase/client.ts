import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY, isSupabaseConfigured } from './config';
import type { Database } from './types';

// Create Supabase client (singleton pattern for browser)
let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null;

export const getSupabase = () => {
    if (!isSupabaseConfigured()) {
        console.warn('Supabase is not configured. Please update src/lib/supabase/config.ts');
        return null;
    }
    
    if (!supabaseInstance) {
        supabaseInstance = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    
    return supabaseInstance;
};

// Types
export interface WaitlistEntry {
    id: string;
    email: string;
    created_at: string;
}

export interface Stats {
    total_signups: number;
    today_signups: number;
    today_visitors: number;
    online_now: number;
    total_visitors: number;
}
