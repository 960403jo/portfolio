create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  constraint contact_inquiries_name_length_check
    check (char_length(btrim(name)) between 1 and 50),
  constraint contact_inquiries_email_format_check
    check (
      char_length(btrim(email)) between 3 and 255
      and email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
    ),
  constraint contact_inquiries_message_length_check
    check (char_length(btrim(message)) between 1 and 1000),
  constraint contact_inquiries_status_check
    check (status in ('new', 'reviewed', 'archived'))
);

alter table public.contact_inquiries enable row level security;

revoke all on table public.contact_inquiries from anon, authenticated;
grant usage on schema public to anon;
grant insert (name, email, message) on table public.contact_inquiries to anon;

drop policy if exists "Anyone can create contact inquiry" on public.contact_inquiries;
drop policy if exists "Allow public contact inquiry inserts" on public.contact_inquiries;

create policy "Allow public contact inquiry inserts"
on public.contact_inquiries
for insert
to anon
with check (
  status = 'new'
  and char_length(btrim(name)) between 1 and 50
  and char_length(btrim(email)) between 3 and 255
  and email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  and char_length(btrim(message)) between 1 and 1000
);

comment on table public.contact_inquiries is
  'Stores public portfolio contact form submissions when Supabase contact form is enabled.';
