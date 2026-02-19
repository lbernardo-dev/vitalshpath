-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Table: waitlist
create table if not exists public.waitlist (
    id uuid default uuid_generate_v4() primary key,
    email text not null,
    source text default 'landing',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(email)
);

-- Table: page_views
create table if not exists public.page_views (
    id uuid default uuid_generate_v4() primary key,
    visitor_id text not null,
    page text not null,
    lang text,
    referrer text,
    user_agent text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: active_sessions
create table if not exists public.active_sessions (
    visitor_id text primary key,
    page text,
    lang text,
    last_activity timestamp with time zone default timezone('utc'::text, now()) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.waitlist enable row level security;
alter table public.page_views enable row level security;
alter table public.active_sessions enable row level security;

-- Policies for Anon (Public) access
-- Allow inserting into waitlist (but not reading others)
create policy "Anon can insert waitlist" on public.waitlist for insert to anon, authenticated with check (true);
create policy "Anon can view own stats" on public.waitlist for select to anon, authenticated using (false); -- Block reading for privacy

-- Allow tracking page views
create policy "Anon can track views" on public.page_views for insert to anon, authenticated with check (true);
create policy "Anon can read metadata" on public.page_views for select to anon, authenticated using (true); -- Allow counting

-- Allow session management
create policy "Anon can manage sessions" on public.active_sessions for all to anon, authenticated using (true);

-- Indexes for performance
create index if not exists idx_active_sessions_last_activity on public.active_sessions(last_activity);
create index if not exists idx_page_views_created_at on public.page_views(created_at);

-- FUNCTION: get_stats
-- Using single quotes instead of $$ to avoid Supabase dashboard parsing issues
create or replace function public.get_stats()
returns json
language plpgsql
security definer
as '
declare
    total_signups integer;
    today_signups integer;
    today_visitors integer;
    online_now integer;
    total_visitors integer;
begin
    -- Count total signups
    select count(*) into total_signups from waitlist;
    
    -- Count today_s signups
    select count(*) into today_signups from waitlist 
    where created_at > current_date;
    
    -- Count online users (active in last 5 minutes)
    select count(*) into online_now from active_sessions 
    where last_activity > (now() - interval ''5 minutes'');
    
    -- Count today_s unique visitors
    select count(distinct visitor_id) into today_visitors from page_views 
    where created_at > current_date;
    
    -- Count total visitors (approximate from page_views for speed)
    select count(*) into total_visitors from page_views;

    return json_build_object(
        ''total_signups'', total_signups,
        ''today_signups'', today_signups,
        ''today_visitors'', today_visitors,
        ''online_now'', online_now,
        ''total_visitors'', total_visitors
    );
end;
';
