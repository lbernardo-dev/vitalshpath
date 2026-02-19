// Supabase exports
export { getSupabase, type WaitlistEntry, type Stats } from './client';
export { 
    trackPageView, 
    updateHeartbeat, 
    subscribeToWaitlist, 
    getStats, 
    getSignupCount, 
    startHeartbeat 
} from './tracking';
export { SUPABASE_URL, SUPABASE_ANON_KEY, isSupabaseConfigured } from './config';
export type { Database, Tables, InsertTables, UpdateTables } from './types';
