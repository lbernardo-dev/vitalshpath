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
                    session_id: string | null;
                    duration_seconds: number | null;
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
                    session_id?: string | null;
                    duration_seconds?: number | null;
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
                    session_id?: string | null;
                    duration_seconds?: number | null;
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
            releases: {
                Row: {
                    id: string;
                    version: string;
                    build_number: string;
                    translations: Record<string, string[]>;
                    is_public: boolean;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    version: string;
                    build_number: string;
                    translations: Record<string, string[]>;
                    is_public?: boolean;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    version?: string;
                    build_number?: string;
                    translations?: Record<string, string[]>;
                    is_public?: boolean;
                    created_at?: string;
                };
            };
            roadmap: {
                Row: {
                    id: string;
                    title: string;
                    target_date: string | null;
                    description: string | null;
                    status: "planned" | "in-progress" | "completed";
                    priority: number;
                    is_public: boolean;
                    translations: Record<string, { title: string; description: string }>;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    title: string;
                    target_date?: string | null;
                    description?: string | null;
                    status?: "planned" | "in-progress" | "completed";
                    priority?: number;
                    is_public?: boolean;
                    translations?: Record<string, { title: string; description: string }>;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    title?: string;
                    target_date?: string | null;
                    description?: string | null;
                    status?: "planned" | "in-progress" | "completed";
                    priority?: number;
                    is_public?: boolean;
                    translations?: Record<string, { title: string; description: string }>;
                    created_at?: string;
                };
            };
            events: {
                Row: {
                    id: string;
                    event_name: string;
                    visitor_id: string | null;
                    metadata: Record<string, unknown>;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    event_name: string;
                    visitor_id?: string | null;
                    metadata?: Record<string, unknown>;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    event_name?: string;
                    visitor_id?: string | null;
                    metadata?: Record<string, unknown>;
                    created_at?: string;
                };
            };
            site_settings: {
                Row: {
                    key: string;
                    value: unknown;
                    updated_at: string;
                };
                Insert: {
                    key: string;
                    value: unknown;
                    updated_at?: string;
                };
                Update: {
                    key?: string;
                    value?: unknown;
                    updated_at?: string;
                };
            };
            pricing_plans: {
                Row: {
                    id: string;
                    currency: string;
                    base_price: number;
                    discount_percentage: number;
                    updated_at: string;
                };
                Insert: {
                    id: string;
                    currency?: string;
                    base_price?: number;
                    discount_percentage?: number;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    currency?: string;
                    base_price?: number;
                    discount_percentage?: number;
                    updated_at?: string;
                };
            };
            surveys: {
                Row: {
                    id: string;
                    question: string;
                    options: string[];
                    is_active: boolean;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    question: string;
                    options: string[];
                    is_active?: boolean;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    question?: string;
                    options?: string[];
                    is_active?: boolean;
                    created_at?: string;
                };
            };
            survey_responses: {
                Row: {
                    id: string;
                    survey_id: string;
                    selected_option: string;
                    visitor_id: string | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    survey_id: string;
                    selected_option: string;
                    visitor_id?: string | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    survey_id?: string;
                    selected_option?: string;
                    visitor_id?: string | null;
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
                    app_store_clicks_total: number;
                    app_store_clicks_tracked: number;
                    app_store_clicks_manual: number;
                };
            };
            get_admin_analytics: {
                Args: Record<string, never>;
                Returns: Record<string, unknown>;
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
