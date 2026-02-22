-- Create a table for delivery bookings
create table public.bookings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  customer_name text not null,
  mobile_number text not null,
  email text not null,
  pickup_location text not null,
  drop_location text not null,
  item_type text not null,
  vehicle_type text not null,
  payment_type text not null,
  instructions text,
  status text default 'pending'
);

-- Set up Row Level Security (RLS)
-- Enable RLS
alter table public.bookings enable row level security;

-- Allow anyone to insert bookings (public form)
create policy "Enable insert for everyone" on public.bookings
  for insert with check (true);

-- Allow users to read their own bookings (optional, if you implement auth later)
-- For now, maybe just allow anon read if you want to show status, or restrict it.
-- Let's restrict read to service role (admin) for now to protect customer data, 
-- or you can enable it if you want to build a tracking page.
