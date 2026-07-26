-- ---------------------------------------------------------------------------
-- Wedding invitation — RSVP & Guest Wishes schema
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query)
-- ---------------------------------------------------------------------------

create extension if not exists "uuid-ossp";

create table if not exists public.rsvps (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  guest_name text not null check (char_length(guest_name) between 1 and 120),
  attendance text not null check (attendance in ('attending', 'not_attending', 'pending')),
  guest_count int not null default 0 check (guest_count between 0 and 10),
  message text not null default '' check (char_length(message) <= 500)
);

-- Helpful index for the Guest Wishes feed (most recent first)
create index if not exists rsvps_created_at_idx on public.rsvps (created_at desc);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- The anon (public) key is used directly from the browser, so RLS must allow
-- exactly the two operations the site needs and nothing else:
--   1. INSERT — anyone can submit an RSVP
--   2. SELECT — anyone can read the list (to render Guest Wishes publicly)
-- No UPDATE / DELETE policy is created, so guests cannot edit or remove
-- other people's entries from the client.
-- ---------------------------------------------------------------------------

alter table public.rsvps enable row level security;

create policy "Anyone can submit an RSVP"
  on public.rsvps
  for insert
  to anon
  with check (true);

create policy "Anyone can read RSVPs for the guest wishes feed"
  on public.rsvps
  for select
  to anon
  using (true);

-- ---------------------------------------------------------------------------
-- Optional: realtime for live-updating Guest Wishes (enable in
-- Database > Replication if you want the feed to update without a refresh)
-- ---------------------------------------------------------------------------
-- alter publication supabase_realtime add table public.rsvps;
