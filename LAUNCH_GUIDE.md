# 🚀 Launch Checklist (Mobile Friendly)

Since you are on Android, here is the easiest way to launch your website to the world.

## 1. Export the Code
*   **Action:** Click the **"Sync to GitHub"** button in AI Studio (if available).
*   **Alternative:** If no sync button, download the project ZIP file to your phone.

## 2. Upload to GitHub (Desktop Mode Recommended)
*   Open [GitHub.com](https://github.com) in Chrome on your phone.
*   **Tip:** Tap the 3 dots in Chrome -> Check **"Desktop site"**.
*   Create a new repository (e.g., `fds-delivery`).
*   Upload your files (if you downloaded the ZIP).

## 3. Deploy on Netlify
*   Open [Netlify](https://app.netlify.com) (Desktop site recommended).
*   **Add new site** -> **Import from GitHub**.
*   Select your `fds-delivery` repository.
*   Click **Deploy**.

## 4. ⚠️ CRITICAL: Add Database Keys
Your booking form **will not work** without this step!

1.  Go to **Site configuration** -> **Environment variables** on Netlify.
2.  Add these two variables (Copy/Paste exactly):

    *   **Key:** `VITE_SUPABASE_URL`
    *   **Value:** `https://gxqzwzeywcgwkbfxuugt.supabase.co`

    *   **Key:** `VITE_SUPABASE_ANON_KEY`
    *   **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cXp3emV5d2Nnd2tiZnh1dWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MDY5MjcsImV4cCI6MjA4NzI4MjkyN30.YibHSfF82q4pnoEZTVkQt5AqD1BqozfNc7w2mt0Vhsw`

3.  **Trigger a new deploy** (Go to Deploys -> Trigger deploy) for these changes to work.

## 5. You are Live! 🌍
Once the deploy finishes, your website URL (e.g., `https://your-site.netlify.app`) is live and ready to share.
