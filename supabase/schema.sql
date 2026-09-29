
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Admin',
  role text not null default 'user' check (role in ('user','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date date not null,
  category text not null check (category in ('Kajian','Keislaman','Sosial','Kegiatan','Lainnya')),
  status text not null default 'draft' check (status in ('draft','published')),
  author_name text not null default 'Admin',
  author_id uuid references public.profiles(id) on delete set null,
  excerpt text not null default '',
  content text not null default '',
  image_url text,
  image_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists events_status_date_idx on public.events(status,event_date desc);
create index if not exists events_created_idx on public.events(created_at desc);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  insert into public.profiles(id,display_name)
  values(new.id,coalesce(nullif(new.raw_user_meta_data->>'display_name',''),'Admin'))
  on conflict(id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.profiles where id=auth.uid() and role='admin');
$$;

alter table public.profiles enable row level security;
alter table public.events enable row level security;

revoke all on table public.profiles from anon,authenticated;
revoke all on table public.events from anon,authenticated;

grant select on public.profiles to anon,authenticated;
grant select on public.events to anon,authenticated;
grant insert,update,delete on public.events to authenticated;
grant execute on function public.is_admin() to anon,authenticated;

drop policy if exists profiles_read_public on public.profiles;
create policy profiles_read_public on public.profiles for select to anon,authenticated using (true);

drop policy if exists events_read_published_or_admin on public.events;
create policy events_read_published_or_admin on public.events for select to anon,authenticated
using (status='published' or public.is_admin());

drop policy if exists events_admin_insert on public.events;
create policy events_admin_insert on public.events for insert to authenticated
with check (public.is_admin() and author_id=auth.uid());

drop policy if exists events_admin_update on public.events;
create policy events_admin_update on public.events for update to authenticated
using (public.is_admin()) with check (public.is_admin());

drop policy if exists events_admin_delete on public.events;
create policy events_admin_delete on public.events for delete to authenticated
using (public.is_admin());

insert into storage.buckets(id,name,public)
values('event-images','event-images',true)
on conflict(id) do update set public=true;

drop policy if exists event_images_admin_insert on storage.objects;
create policy event_images_admin_insert on storage.objects for insert to authenticated
with check(bucket_id='event-images' and public.is_admin());

drop policy if exists event_images_admin_update on storage.objects;
create policy event_images_admin_update on storage.objects for update to authenticated
using(bucket_id='event-images' and public.is_admin())
with check(bucket_id='event-images' and public.is_admin());

drop policy if exists event_images_admin_delete on storage.objects;
create policy event_images_admin_delete on storage.objects for delete to authenticated
using(bucket_id='event-images' and public.is_admin());

-- Setelah akun admin dibuat di Supabase Authentication -> Users:
-- update public.profiles set role='admin', display_name='Admin'
-- where id='UUID_AKUN_ADMIN';
