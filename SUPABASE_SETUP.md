# ⚠️ Required Supabase Changes

To make the photo upload work, you need to configure Supabase Storage and your Database.

## 1. Create a Storage Bucket
1.  Go to your Supabase Dashboard.
2.  Click on **Storage** (icon on the left).
3.  Click **New Bucket**.
4.  Name it: `shipment-photos`
5.  **Important:** Make it **Public** (so we can display the link easily, or keep private and use signed URLs, but for this app public is easier).
6.  Click **Save**.

## 2. Update Database Table
1.  Go to the **Table Editor**.
2.  Select the `bookings` table.
3.  Click **Insert Column** (or Add Column).
4.  Name: `item_photo_url`
5.  Type: `text`
6.  Click **Save**.

## 3. Storage Policies (RLS)
If your uploads fail, you might need to check the Storage Policies.
1.  Go to **Storage** -> **Policies**.
2.  Under `shipment-photos`, click **New Policy**.
3.  Select **"Give users access to all files"** (or customize for authenticated users only if you have auth).
4.  For a public form without login, you might need to allow `INSERT` for `anon` role.
    *   Policy Name: `Allow Public Uploads`
    *   Allowed Operations: `INSERT`, `SELECT`
    *   Target Roles: `anon` (public)
