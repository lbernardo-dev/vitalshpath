-- VitalsPath Database Schema for Supabase
-- Run this in Supabase SQL Editor

-- 1. Waitlist table (stores email subscriptions)
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    source TEXT DEFAULT 'landing',
    metadata JSONB DEFAULT '{}'::jsonb
);

-- 2. Page views table (tracks visits)
CREATE TABLE IF NOT EXISTS page_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    visitor_id TEXT NOT NULL,
    page TEXT NOT NULL,
    lang TEXT DEFAULT 'en',
    referrer TEXT,
    user_agent TEXT,
    country TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Active sessions table (for real-time visitors)
CREATE TABLE IF NOT EXISTS active_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    visitor_id TEXT UNIQUE NOT NULL,
    page TEXT,
    lang TEXT DEFAULT 'en',
    last_activity TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Daily stats aggregation (for faster queries)
CREATE TABLE IF NOT EXISTS daily_stats (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    date DATE UNIQUE NOT NULL,
    unique_visitors INTEGER DEFAULT 0,
    page_views INTEGER DEFAULT 0,
    signups INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_visitor_id ON page_views(visitor_id);
CREATE INDEX IF NOT EXISTS idx_active_sessions_last_activity ON active_sessions(last_activity);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE active_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_stats ENABLE ROW LEVEL SECURITY;

-- RLS Policies for anonymous access

-- Waitlist: Anyone can insert, no one can read (privacy)
CREATE POLICY "Anyone can insert waitlist" ON waitlist
    FOR INSERT WITH CHECK (true);

-- Page views: Anyone can insert
CREATE POLICY "Anyone can insert page_views" ON page_views
    FOR INSERT WITH CHECK (true);

-- Active sessions: Anyone can insert/update/delete their own
CREATE POLICY "Anyone can insert active_sessions" ON active_sessions
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update active_sessions" ON active_sessions
    FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete active_sessions" ON active_sessions
    FOR DELETE USING (true);

-- Daily stats: Anyone can read
CREATE POLICY "Anyone can read daily_stats" ON daily_stats
    FOR SELECT USING (true);

-- Function to get current stats
CREATE OR REPLACE FUNCTION get_stats()
RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    SELECT json_build_object(
        'total_signups', (SELECT COUNT(*) FROM waitlist),
        'today_signups', (SELECT COUNT(*) FROM waitlist WHERE created_at >= CURRENT_DATE),
        'today_visitors', (SELECT COUNT(DISTINCT visitor_id) FROM page_views WHERE created_at >= CURRENT_DATE),
        'online_now', (SELECT COUNT(*) FROM active_sessions WHERE last_activity > NOW() - INTERVAL '5 minutes'),
        'total_visitors', (SELECT COUNT(DISTINCT visitor_id) FROM page_views)
    ) INTO result;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to cleanup old sessions
CREATE OR REPLACE FUNCTION cleanup_old_sessions()
RETURNS void AS $$
BEGIN
    DELETE FROM active_sessions WHERE last_activity < NOW() - INTERVAL '30 minutes';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a cron job to cleanup sessions (requires pg_cron extension)
-- Run this if pg_cron is enabled:
-- SELECT cron.schedule('cleanup-sessions', '*/5 * * * *', 'SELECT cleanup_old_sessions()');
