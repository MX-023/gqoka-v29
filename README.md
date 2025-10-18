# GQOKA V29

Next.js + Tailwind + Supabase + WeatherAPI + Botpress webchat.

## Env (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_WEATHERAPI_KEY=...   # WeatherAPI.com key
NEXT_PUBLIC_BOTPRESS_INJECT_URL=https://cdn.botpress.cloud/webchat/v1/inject.js
NEXT_PUBLIC_BOTPRESS_BOT_ID=...  # from Botpress Cloud
NEXT_PUBLIC_BOTPRESS_CLIENT_ID=...  # optional depending on your bot
```

## Supabase

- Storage bucket: `wardrobe` (public)
- Table: `wardrobe` with columns:
  - id: uuid default uuid_generate_v4() primary key
  - title: text
  - category: text
  - color: text
  - image_url: text
  - created_at: timestamp default now()

## Scripts

```
npm install
npm run dev
```
