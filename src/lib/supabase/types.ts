// Database types for Supabase
// These match the schema in supabase/schema.sql

export interface Database {
    public: {
        Tables: {
            waitlist: {
                Row: {
                    id: string;
                    email: string;
                    created_at: string;
                    source: string;
                    metadata: Record<string, unknown>;
                };
                Insert: {
                    id?: string;
                    email: string;
                    created_at?: string;
                    source?: string;
                    metadata?: Record<string, unknown>;
                };
                Update: {
                    id?: string;
                    email?: string;
                    created_at?: string;
                    source?: string;
                    metadata?: Record<string, unknown>;
                };
            };
            page_views: {
                Row: {
                    id: string;
                    visitor_id: string;
                    page: string;
                    lang: string;
                    referrer: string | null;
                    user_agent: string | null;
                    country: string | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    visitor_id: string;
                    page: string;
                    lang?: string;
                    referrer?: string | null;
                    user_agent?: string | null;
                    country?: string | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    visitor_id?: string;
                    page?: string;
                    lang?: string;
                    referrer?: string | null;
                    user_agent?: string | null;
                    country?: string | null;
                    created_at?: string;
                };
            };
            active_sessions: {
                Row: {
                    id: string;
                    visitor_id: string;
                    page: string;
                    lang: string;
                    last_activity: string;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    visitor_id: string;
                    page?: string;
                    lang?: string;
                    last_activity?: string;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    visitor_id?: string;
                    page?: string;
                    lang?: string;
                    last_activity?: string;
                    created_at?: string;
                };
            };
            daily_stats: {
                Row: {
                    id: string;
                    date: string;
                    unique_visitors: number;
                    page_views: number;
                    signups: number;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    date: string;
                    unique_visitors?: number;
                    page_views?: number;
                    signups?: number;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    date?: string;
                    unique_visitors?: number;
                    page_views?: number;
                    signups?: number;
                    created_at?: string;
                };
            };
        };
        Functions: {
            get_stats: {
                Args: Record<string, never>;
                Returns: {
                    total_signups: number;
                    today_signups: number;
                    today_visitors: number;
                    online_now: number;
                    total_visitors: number;
                };
            };
            cleanup_old_sessions: {
                Args: Record<string, never>;
                Returns: void;
            };
        };
    };
}

export type Tables<T extends keyof Database['public']['Tables']> = 
    Database['public']['Tables'][T]['Row'];

export type InsertTables<T extends keyof Database['public']['Tables']> = 
    Database['public']['Tables'][T]['Insert'];

export type UpdateTables<T extends keyof Database['public']['Tables']> = 
    Database['public']['Tables'][T]['Update'];
