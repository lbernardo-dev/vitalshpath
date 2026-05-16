-- VitalsPath landing Supabase schema
-- Apply from the Supabase SQL Editor with an owner/service role.

create extension if not exists pgcrypto;

create table if not exists public.waitlist (
    id uuid primary key default gen_random_uuid(),
    email text not null,
    source text not null default 'landing',
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    constraint waitlist_email_unique unique (email),
    constraint waitlist_email_format check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$')
);

create table if not exists public.page_views (
    id uuid primary key default gen_random_uuid(),
    visitor_id text not null,
    page text not null,
    lang text not null default 'en',
    referrer text,
    user_agent text,
    country text,
    session_id text,
    duration_seconds integer,
    created_at timestamptz not null default now()
);

create table if not exists public.active_sessions (
    id uuid primary key default gen_random_uuid(),
    visitor_id text not null unique,
    page text,
    lang text not null default 'en',
    last_activity timestamptz not null default now(),
    created_at timestamptz not null default now()
);

create table if not exists public.events (
    id uuid primary key default gen_random_uuid(),
    event_name text not null,
    visitor_id text,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
    key text primary key,
    value jsonb not null,
    updated_at timestamptz not null default now()
);

create table if not exists public.daily_stats (
    id uuid primary key default gen_random_uuid(),
    date date not null unique,
    unique_visitors integer not null default 0,
    page_views integer not null default 0,
    signups integer not null default 0,
    app_store_clicks integer not null default 0,
    created_at timestamptz not null default now()
);

create table if not exists public.releases (
    id uuid primary key default gen_random_uuid(),
    version text not null,
    build_number text not null,
    translations jsonb not null default '{}'::jsonb,
    is_public boolean not null default true,
    created_at timestamptz not null default now(),
    constraint releases_version_unique unique (version, build_number)
);

create table if not exists public.roadmap (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    target_date text,
    description text,
    status text not null default 'planned',
    priority integer not null default 0,
    is_public boolean not null default false,
    translations jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    constraint roadmap_status_check check (status in ('planned', 'in-progress', 'completed'))
);

create table if not exists public.pricing_plans (
    id text primary key,
    currency text not null default '$',
    base_price numeric(10, 2) not null default 0,
    discount_percentage numeric(5, 2) not null default 0,
    updated_at timestamptz not null default now(),
    constraint pricing_discount_range check (discount_percentage between 0 and 100)
);

create table if not exists public.surveys (
    id uuid primary key default gen_random_uuid(),
    question text not null,
    options text[] not null,
    is_active boolean not null default false,
    created_at timestamptz not null default now()
);

create table if not exists public.survey_responses (
    id uuid primary key default gen_random_uuid(),
    survey_id uuid not null references public.surveys(id) on delete cascade,
    selected_option text not null,
    visitor_id text,
    created_at timestamptz not null default now(),
    constraint survey_responses_unique_visitor unique (survey_id, visitor_id)
);

alter table public.waitlist add column if not exists metadata jsonb not null default '{}'::jsonb;
alter table public.page_views add column if not exists country text;
alter table public.page_views add column if not exists session_id text;
alter table public.page_views add column if not exists duration_seconds integer;
alter table public.releases add column if not exists is_public boolean not null default true;
alter table public.daily_stats add column if not exists app_store_clicks integer not null default 0;

create index if not exists idx_waitlist_created_at on public.waitlist(created_at desc);
create index if not exists idx_page_views_created_at on public.page_views(created_at desc);
create index if not exists idx_page_views_visitor_id on public.page_views(visitor_id);
create index if not exists idx_page_views_lang_created_at on public.page_views(lang, created_at desc);
create index if not exists idx_active_sessions_last_activity on public.active_sessions(last_activity desc);
create index if not exists idx_events_name_created_at on public.events(event_name, created_at desc);
create index if not exists idx_events_visitor_id on public.events(visitor_id);
create index if not exists idx_releases_created_at on public.releases(created_at desc);
create index if not exists idx_roadmap_public_priority on public.roadmap(is_public, priority desc, created_at desc);
create index if not exists idx_surveys_active on public.surveys(is_active, created_at desc);

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
    select lower(coalesce(auth.jwt() ->> 'email', '')) in (
        'lbernardo.dev@gmail.com',
        'yilianbs@gmail.com'
    );
$$;

alter table public.waitlist enable row level security;
alter table public.page_views enable row level security;
alter table public.active_sessions enable row level security;
alter table public.events enable row level security;
alter table public.site_settings enable row level security;
alter table public.daily_stats enable row level security;
alter table public.releases enable row level security;
alter table public.roadmap enable row level security;
alter table public.pricing_plans enable row level security;
alter table public.surveys enable row level security;
alter table public.survey_responses enable row level security;

drop policy if exists "Anyone can insert waitlist" on public.waitlist;
drop policy if exists "Anon can insert waitlist" on public.waitlist;
drop policy if exists "Anon can view own stats" on public.waitlist;
drop policy if exists "Admins can read waitlist" on public.waitlist;
create policy "Public can insert waitlist" on public.waitlist for insert to anon, authenticated with check (true);
create policy "Admins can read waitlist" on public.waitlist for select to authenticated using (public.is_admin());

drop policy if exists "Anyone can insert page_views" on public.page_views;
drop policy if exists "Anon can track views" on public.page_views;
drop policy if exists "Anon can read metadata" on public.page_views;
drop policy if exists "Admins can read page_views" on public.page_views;
create policy "Public can insert page_views" on public.page_views for insert to anon, authenticated with check (true);
create policy "Admins can read page_views" on public.page_views for select to authenticated using (public.is_admin());

drop policy if exists "Anyone can insert active_sessions" on public.active_sessions;
drop policy if exists "Anyone can update active_sessions" on public.active_sessions;
drop policy if exists "Anyone can delete active_sessions" on public.active_sessions;
drop policy if exists "Anon can manage sessions" on public.active_sessions;
drop policy if exists "Admins can read active_sessions" on public.active_sessions;
create policy "Public can insert active_sessions" on public.active_sessions for insert to anon, authenticated with check (true);
create policy "Public can update active_sessions" on public.active_sessions for update to anon, authenticated using (true) with check (true);
create policy "Admins can read active_sessions" on public.active_sessions for select to authenticated using (public.is_admin());

drop policy if exists "Anyone can insert events" on public.events;
drop policy if exists "Anyone can select events" on public.events;
drop policy if exists "Admins can read events" on public.events;
create policy "Public can insert events" on public.events for insert to anon, authenticated with check (true);
create policy "Admins can read events" on public.events for select to authenticated using (public.is_admin());

drop policy if exists "Anyone can read site_settings" on public.site_settings;
drop policy if exists "Anyone can update site_settings" on public.site_settings;
drop policy if exists "Anyone can insert site_settings" on public.site_settings;
drop policy if exists "Public can read runtime site_settings" on public.site_settings;
drop policy if exists "Admins can manage site_settings" on public.site_settings;
create policy "Public can read runtime site_settings" on public.site_settings
    for select to anon, authenticated
    using (key in ('app_store_links', 'maintenance_mode'));
create policy "Admins can manage site_settings" on public.site_settings
    for all to authenticated
    using (public.is_admin())
    with check (public.is_admin());

drop policy if exists "Anyone can read daily_stats" on public.daily_stats;
drop policy if exists "Admins can read daily_stats" on public.daily_stats;
create policy "Admins can read daily_stats" on public.daily_stats for select to authenticated using (public.is_admin());

drop policy if exists "Anon can view releases" on public.releases;
drop policy if exists "Auth users can insert releases" on public.releases;
drop policy if exists "Auth users can update releases" on public.releases;
drop policy if exists "Auth users can delete releases" on public.releases;
drop policy if exists "Public can view public releases" on public.releases;
drop policy if exists "Admins can manage releases" on public.releases;
create policy "Public can view public releases" on public.releases for select to anon, authenticated using (is_public = true or public.is_admin());
create policy "Admins can manage releases" on public.releases for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Anon can view public roadmap" on public.roadmap;
drop policy if exists "Auth users can insert roadmap" on public.roadmap;
drop policy if exists "Auth users can update roadmap" on public.roadmap;
drop policy if exists "Auth users can delete roadmap" on public.roadmap;
drop policy if exists "Public can view public roadmap" on public.roadmap;
drop policy if exists "Admins can manage roadmap" on public.roadmap;
create policy "Public can view public roadmap" on public.roadmap for select to anon, authenticated using (is_public = true or public.is_admin());
create policy "Admins can manage roadmap" on public.roadmap for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Public can read pricing_plans" on public.pricing_plans;
drop policy if exists "Admins can manage pricing_plans" on public.pricing_plans;
create policy "Public can read pricing_plans" on public.pricing_plans for select to anon, authenticated using (true);
create policy "Admins can manage pricing_plans" on public.pricing_plans for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Public can read active surveys" on public.surveys;
drop policy if exists "Admins can manage surveys" on public.surveys;
create policy "Public can read active surveys" on public.surveys for select to anon, authenticated using (is_active = true or public.is_admin());
create policy "Admins can manage surveys" on public.surveys for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Public can insert survey_responses" on public.survey_responses;
drop policy if exists "Admins can read survey_responses" on public.survey_responses;
create policy "Public can insert survey_responses" on public.survey_responses for insert to anon, authenticated with check (true);
create policy "Admins can read survey_responses" on public.survey_responses for select to authenticated using (public.is_admin());

create or replace function public.get_stats()
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
    app_store_manual integer := 0;
    app_store_tracked integer := 0;
begin
    select coalesce(
        (select case
            when jsonb_typeof(value) = 'number' then (value::text)::integer
            when jsonb_typeof(value) = 'string' then trim(both '"' from value::text)::integer
            else null
        end from site_settings where key = 'app_store_manual_count'),
        0
    ) into app_store_manual;

    select count(*) into app_store_tracked
    from events
    where event_name in ('app_store_click', 'testflight_click');

    return json_build_object(
        'total_signups', (select count(*) from waitlist),
        'today_signups', (select count(*) from waitlist where created_at >= current_date),
        'today_visitors', (select count(distinct visitor_id) from page_views where created_at >= current_date),
        'online_now', (select count(*) from active_sessions where last_activity > now() - interval '5 minutes'),
        'total_visitors', (select count(distinct visitor_id) from page_views),
        'app_store_clicks_total', app_store_manual + app_store_tracked,
        'app_store_clicks_tracked', app_store_tracked,
        'app_store_clicks_manual', app_store_manual
    );
end;
$$;

create or replace function public.get_admin_analytics()
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
    active_survey json;
begin
    if not public.is_admin() then
        raise exception 'not authorized';
    end if;

    select json_build_object(
        'id', s.id,
        'question', s.question,
        'options', s.options,
        'results', coalesce((
            select json_agg(json_build_object('selected_option', r.selected_option, 'votes', r.votes))
            from (
                select selected_option, count(*)::integer as votes
                from survey_responses
                where survey_id = s.id
                group by selected_option
            ) r
        ), '[]'::json)
    )
    into active_survey
    from surveys s
    where s.is_active = true
    order by s.created_at desc
    limit 1;

    return json_build_object(
        'top_languages', coalesce((select json_agg(row_to_json(t)) from (
            select lang, count(*)::integer as count
            from page_views
            group by lang
            order by count(*) desc
            limit 8
        ) t), '[]'::json),
        'top_pages', coalesce((select json_agg(row_to_json(t)) from (
            select page, count(*)::integer as count
            from page_views
            group by page
            order by count(*) desc
            limit 8
        ) t), '[]'::json),
        'avg_duration_seconds', coalesce((select avg(duration_seconds)::integer from page_views where duration_seconds is not null), 0),
        'active_survey', active_survey,
        'pricing', coalesce((select json_agg(row_to_json(p)) from (
            select id, currency, base_price, discount_percentage, updated_at
            from pricing_plans
            order by case id
                when 'free' then 0
                when 'premium_monthly' then 1
                when 'premium_annual' then 2
                when 'premium_lifetime' then 3
                else 9
            end
        ) p), '[]'::json)
    );
end;
$$;

create or replace function public.cleanup_old_sessions()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
    delete from active_sessions where last_activity < now() - interval '30 minutes';
end;
$$;

insert into public.site_settings (key, value) values
    ('app_store_manual_count', '0'::jsonb),
    ('testflight_manual_count', '0'::jsonb),
    ('maintenance_mode', '{"enabled": false, "message": ""}'::jsonb),
    ('app_store_links', '{
        "genericUrl": "https://apps.apple.com/app/id6760143192",
        "reviewUrl": "https://apps.apple.com/app/id6760143192?action=write-review",
        "storefronts": {
            "en": "https://apps.apple.com/us/app/id6760143192",
            "es": "https://apps.apple.com/es/app/id6760143192"
        }
    }'::jsonb)
on conflict (key) do nothing;

insert into public.pricing_plans (id, currency, base_price, discount_percentage) values
    ('free', '$', 0, 0),
    ('premium_monthly', '$', 3.99, 50),
    ('premium_annual', '$', 34.99, 43),
    ('premium_lifetime', '$', 129.99, 46)
on conflict (id) do update set
    currency = excluded.currency,
    base_price = excluded.base_price,
    discount_percentage = excluded.discount_percentage,
    updated_at = now();

insert into public.releases (version, build_number, translations, is_public)
values (
    '2.0.0',
    'pending',
    '{
        "en": [
            "VitalsPath 2.0 refreshes the health hub with deeper symptom context, stronger medication routines, Live Activities, widgets and Apple Watch support.",
            "Specialized symptom entries add structured context such as triggers, relief factors, location, impact and emergency-aware review where relevant.",
            "Privacy foundations have been strengthened with encrypted sensitive storage patterns, private logging and automatic app lock behavior."
        ],
        "es": [
            "VitalsPath 2.0 renueva el hub de salud con más contexto para síntomas, rutinas de medicación más sólidas, Live Activities, widgets y Apple Watch.",
            "Los registros especializados de síntomas añaden contexto estructurado como desencadenantes, alivios, localización, impacto y revisión de emergencia cuando corresponde.",
            "Las bases de privacidad se refuerzan con patrones de almacenamiento sensible cifrado, logging privado y bloqueo automático de la app."
        ]
    }'::jsonb,
    true
)
on conflict (version, build_number) do update set
    translations = excluded.translations,
    is_public = excluded.is_public;
