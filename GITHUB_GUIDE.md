# How to Push to GitHub

Since you are developing in an AI Studio environment, you need to export the code to your local machine first to push it to your own GitHub repository.

## Option 1: Using the "Export" or "Sync" button (If available)

Look for a "Share", "Export", or "Sync to GitHub" button in the AI Studio interface. This is the easiest way if supported.

## Option 2: Manual Download & Push (Recommended)

### 1. Download the Code
1.  Download the project files from AI Studio (usually via a "Download" button or by selecting files).
2.  Extract the ZIP file to a folder on your computer (e.g., `fds-delivery`).

### 2. Create a Repository on GitHub
1.  Go to [GitHub.com](https://github.com) and log in.
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it `fds-delivery` (or whatever you prefer).
4.  **Do not** initialize with README, .gitignore, or License (we already have them).
5.  Click **Create repository**.

### 3. Push the Code (Using Terminal/Command Prompt)
Open your terminal (Mac/Linux) or Command Prompt/PowerShell (Windows) and run these commands:

```bash
# Navigate to your project folder
cd path/to/fds-delivery

# Initialize Git
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: FDS Delivery Services website"

# Link to your GitHub repository (Replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/fds-delivery.git

# Rename branch to main (if not already)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Deploy to Netlify
1.  Go to [Netlify](https://app.netlify.com/).
2.  Click **Add new site** > **Import from an existing project**.
3.  Select **GitHub**.
4.  Authorize Netlify to access your GitHub account.
5.  Select the `fds-delivery` repository you just created.
6.  **Build Settings** should be automatically detected:
    *   **Build command:** `npm run build` (or `vite build`)
    *   **Publish directory:** `dist`
7.  **Environment Variables:**
    *   Click **Add environment variables**.
    *   Key: `VITE_SUPABASE_URL` | Value: `https://gxqzwzeywcgwkbfxuugt.supabase.co`
    *   Key: `VITE_SUPABASE_ANON_KEY` | Value: `your_anon_key_here` (Copy from your `.env` file)
8.  Click **Deploy**.
