# How to Update Your Website

Since your website is hosted on Netlify, the way you update it depends on how you deployed it.

## Method 1: If you connected GitHub to Netlify (Recommended)

This is the best way. Every time you push code to GitHub, Netlify automatically updates your live site.

1.  **Make Changes Here:** Ask me to make the changes you want in AI Studio (e.g., "Change the hero text", "Add a new service").
2.  **Download/Export:** Download the updated project files again.
3.  **Push to GitHub:**
    *   If you are using the **"Sync to GitHub"** button in AI Studio, just click it.
    *   If you are uploading manually:
        1.  Go to your repository on GitHub.
        2.  Click **Add file** -> **Upload files**.
        3.  Upload the modified files (e.g., `src/App.tsx` if you changed the text).
        4.  Commit the changes.
4.  **Wait:** Netlify detects the change on GitHub and updates your site automatically in about 1 minute.

## Method 2: If you used Netlify Drop (Manual Drag & Drop)

If you didn't use GitHub and just dragged a folder to Netlify:

1.  **Make Changes Here:** Ask me to make the changes.
2.  **Download Project:** Download the updated project ZIP.
3.  **Build (If needed):** If you downloaded the source code, you technically need to "build" it into a `dist` folder.
    *   *Note:* AI Studio downloads usually give you the source code. Netlify Drop needs the *built* website (HTML/CSS/JS).
    *   **Easier Path:** It is highly recommended to use **Method 1 (GitHub)** because Netlify handles the building for you.

## Summary of Workflow

1.  **You:** "Hey AI, change the phone number to X."
2.  **Me:** I update the code here.
3.  **You:** Sync/Push the code to GitHub.
4.  **Netlify:** Sees the update and publishes it to the world.
