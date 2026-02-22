# How to Fix "Supabase is not configured" on Netlify

The error happens because Netlify doesn't know your Supabase connection details yet. You need to add them manually in the Netlify dashboard.

## Steps to Fix

1.  **Log in to Netlify** and go to your site dashboard (where you see "Site overview", "Deploys", etc.).
2.  Click on **Site configuration** (or "Site settings").
3.  In the left sidebar, click on **Environment variables**.
4.  Click **Add a variable** (or "Add variables").
5.  Add the first variable:
    *   **Key:** `VITE_SUPABASE_URL`
    *   **Value:** `https://gxqzwzeywcgwkbfxuugt.supabase.co`
    *   Click **Create variable**.
6.  Add the second variable:
    *   **Key:** `VITE_SUPABASE_ANON_KEY`
    *   **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cXp3emV5d2Nnd2tiZnh1dWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MDY5MjcsImV4cCI6MjA4NzI4MjkyN30.YibHSfF82q4pnoEZTVkQt5AqD1BqozfNc7w2mt0Vhsw`
    *   Click **Create variable**.

## Important: Redeploy Your Site
After adding the variables, you **MUST** trigger a new deployment for them to take effect.

1.  Go to the **Deploys** tab in Netlify.
2.  Click **Trigger deploy** -> **Deploy site**.
3.  Wait for the build to finish (it takes about a minute).
4.  Refresh your website and try booking again.
