# 🚀 Vercel Deployment - Step-by-Step Guide

## ✅ Your Credentials Ready:
- **Google Client ID**: *[Your Client ID from Google Console]*
- **Google Client Secret**: *[Your Client Secret from Google Console]*
- **API Base URL**: `https://ecommerce.routemisr.com`

---

## 📋 Step 1: Prepare Your NEXTAUTH_SECRET

Generate a secure random string. Use one of these methods:

### Option A: Online Generator
Visit: https://generate-random.org/encryption-keys?count=1&bytes=32&cipher=aes-256-cbc&string_type=hex

Copy the generated value.

### Option B: Terminal Command
```bash
openssl rand -base64 32
```

**Copy and save this secret - you'll need it in Step 3**

---

## 🔗 Step 2: Go to Vercel & Create Project

1. Open https://vercel.com in your browser
2. Sign in with your account
3. Click **"New Project"** (top right)
4. Click **"Continue with GitHub"**
5. Find and select: **FrechCart-Project**
6. Click **"Import"**

---

## ⚙️ Step 3: Configure Before Deploying

On the configuration page:

### Project Settings (Auto-filled):
- ✅ Framework: **Next.js**
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**Leave these as-is and continue to Environment Variables**

### 🔐 Environment Variables (IMPORTANT!)

Click **"Add Environment Variable"** and add each one:

#### Variable 1: NEXTAUTH_URL
- **Key**: `NEXTAUTH_URL`
- **Value**: `https://freshcart.vercel.app` (Vercel will give you the exact URL, update this after first deployment)
- Click ➕ to add

#### Variable 2: NEXTAUTH_SECRET
- **Key**: `NEXTAUTH_SECRET`
- **Value**: *[Paste the secret from Step 2]*
- Click ➕ to add

#### Variable 3: GOOGLE_CLIENT_ID
- **Key**: `GOOGLE_CLIENT_ID`
- **Value**: *[Your Google Client ID]*
- Click ➕ to add

#### Variable 4: GOOGLE_CLIENT_SECRET
- **Key**: `GOOGLE_CLIENT_SECRET`
- **Value**: *[Your Google Client Secret]*
- Click ➕ to add

#### Variable 5: NEXT_PUBLIC_API_URL
- **Key**: `NEXT_PUBLIC_API_URL`
- **Value**: `https://ecommerce.routemisr.com`
- Click ➕ to add

#### Variable 6: SOCIAL_LOGIN_PASSWORD
- **Key**: `SOCIAL_LOGIN_PASSWORD`
- **Value**: `Social_Login_Secure_123!` (or any secure password)
- Click ➕ to add

---

## 🚀 Step 4: Deploy!

1. Review all environment variables are added
2. Click the **"Deploy"** button (bottom right)
3. Wait for the build to complete (1-3 minutes)
4. You'll see a **"Congratulations! Your project has been deployed"** message

---

## ✨ Step 5: Get Your Production URL

After deployment completes:

1. You'll see your project URL (something like: `https://freshcart-123abc.vercel.app`)
2. **Copy this URL**
3. Go to **Settings** → **Environment Variables**
4. Edit `NEXTAUTH_URL` and change it to your actual Vercel URL:
   - From: `https://freshcart.vercel.app`
   - To: `https://freshcart-123abc.vercel.app` (your actual URL)
5. Click **"Save"**
6. You'll see a banner saying **"Redeploy to apply changes"** - click it

---

## 🧪 Step 6: Test Your Deployment

1. Visit your deployed URL
2. Test homepage loads ✓
3. Try signing in with email/password ✓
4. Try Google login (optional) ✓
5. Test cart functionality ✓

---

## 🔧 Troubleshooting

### Build Failed?
- Check the build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `.env.example` format matches

### Authentication Not Working?
- Verify `NEXTAUTH_URL` exactly matches your deployment URL
- Check `NEXTAUTH_SECRET` is set (not empty)
- Ensure API URL is reachable: `https://ecommerce.routemisr.com`

### Google Login Not Working?
- Verify credentials are correct
- Add deployment URL to Google OAuth console as authorized redirect:
  - Add: `https://your-vercel-url.app/api/auth/callback/google`

### API Errors?
- Test API at: `https://ecommerce.routemisr.com/api/v1/auth/signin`
- Check API is accessible from Vercel servers
- Verify CORS is enabled on API

---

## 📝 Important: Update Google OAuth Settings

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Find your OAuth application
3. Go to **Credentials** → **OAuth consent screen**
4. Update **Authorized redirect URIs** to include:
   - `https://your-vercel-url.app/api/auth/callback/google`

---

## ✅ Deployment Complete!

Your FreshCart app is now live on Vercel! 🎉

**Quick Links:**
- Vercel Dashboard: https://vercel.com/dashboard
- Your Project: https://vercel.com/dashboard/projects
- Environment Variables: https://vercel.com/dashboard/projects/[project-id]/settings/environment-variables

---

**Next Steps:**
- Set up custom domain (optional)
- Configure Vercel analytics
- Set up automatic deployments from git
- Monitor performance in Vercel dashboard
