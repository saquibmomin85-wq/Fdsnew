# FDS Delivery Services

A modern delivery booking website built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Responsive Landing Page**: Professional design with Hero, Features, and Contact sections.
- **Booking Form**: User-friendly form with validation using `react-hook-form` and `zod`.
- **Supabase Backend**: Stores booking data securely in a PostgreSQL database.
- **Real-time Feedback**: Loading states and success/error notifications.

## Setup Instructions

### 1. Supabase Setup (Backend)

1.  Go to [Supabase](https://supabase.com/) and create a new project.
2.  Once the project is created, go to the **SQL Editor** in the left sidebar.
3.  Click **New Query**.
4.  Copy the content of the `supabase_schema.sql` file in this project and paste it into the query editor.
    *   **IMPORTANT**: Do not just type `supabase_schema.sql`. You must copy the actual SQL code (starting with `create table...`).
5.  Click **Run** to create the database table and security policies.
6.  Go to **Project Settings** -> **API**.
7.  Copy the `Project URL` and `anon` public key.

### 2. Environment Variables

1.  Open the `.env` file (or create one based on `.env.example`).
2.  Update the following variables with your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_project_url
    VITE_SUPABASE_ANON_KEY=your_anon_key
    ```

### 3. Running Locally

```bash
npm install
npm run dev
```

## Deployment

### Vercel

1.  Push this code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and import the project.
3.  Vercel will detect it's a Vite project.
4.  Add the Environment Variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) in the Vercel project settings.
5.  Click **Deploy**.

### Netlify

1.  Push this code to a GitHub repository.
2.  Go to [Netlify](https://www.netlify.com/) and "Import from Git".
3.  Netlify will detect the build settings (`npm run build`, `dist` directory).
4.  Go to **Site settings** -> **Environment variables** and add your Supabase keys.
5.  Deploy the site.
