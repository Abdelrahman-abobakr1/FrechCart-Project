# 🚀 FreshCart - Deployment Guide

## GitHub Repository
Your project is now ready on GitHub:
- **Repository URL**: https://github.com/Abdelrahman-abobakr1/FrechCart-Project
- **Branch**: main

## 📋 Prerequisites

Before deploying to Vercel, ensure you have:
1. Node.js 18+ or 20.x installed
2. npm or yarn package manager
3. A Vercel account (create at https://vercel.com)
4. Google OAuth credentials (optional but recommended)

## 🔐 Environment Variables Setup

### Local Development
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your environment variables:
   - `NEXTAUTH_URL`: http://localhost:3000 (for local dev)
   - `NEXTAUTH_SECRET`: Generate a secure random string (or use `openssl rand -base64 32`)
   - `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: From Google OAuth console
   - `NEXT_PUBLIC_API_URL`: Your backend API URL

### Vercel Deployment
1. Go to Vercel dashboard: https://vercel.com
2. Click "New Project"
3. Connect your GitHub repository
4. Select the FreshCart-Project
5. In the "Environment Variables" section, add:
   - `NEXTAUTH_URL`: https://your-domain.vercel.app (your actual Vercel URL)
   - `NEXTAUTH_SECRET`: Use a secure random string
   - `GOOGLE_CLIENT_ID`: Your Google OAuth ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth Secret
   - `NEXT_PUBLIC_API_URL`: Your API endpoint
   - `SOCIAL_LOGIN_PASSWORD`: A secure password for auto-signup

6. Click "Deploy"

## 🔧 Local Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your application.

## 📦 Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
├── store/           # Redux store (cart, wishlist)
├── NextAuth/        # Authentication configuration
├── constants/       # API and other constants
└── lib/             # Utility functions
```

## 🔑 Getting Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "OAuth consent screen" and configure
5. Create OAuth 2.0 credentials (Web application)
6. Add authorized redirect URIs:
   - Local: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://your-domain.com/api/auth/callback/google`
7. Copy Client ID and Client Secret to your `.env.local`

## ✅ Vercel Configuration

The project includes `vercel.json` with:
- Build command: `npm run build`
- Dev command: `npm run dev`
- Install command: `npm install`
- Node version: 20.x
- Required environment variables list

## 🚀 Deployment Checklist

- [ ] All environment variables are set in Vercel
- [ ] `.env.local` is not committed (it's in .gitignore)
- [ ] API endpoint is correct for production
- [ ] Google OAuth credentials are production-ready
- [ ] Database connections are configured
- [ ] NextAuth secret is strong and unique
- [ ] All dependencies are installed

## 🐛 Troubleshooting

### Build Fails
- Check `npm run build` works locally
- Verify all environment variables are set
- Check Node.js version compatibility

### Authentication Issues
- Ensure NEXTAUTH_URL matches your domain exactly
- Verify OAuth callback URLs in provider settings
- Check NEXTAUTH_SECRET is consistent

### API Errors
- Confirm NEXT_PUBLIC_API_URL is correct
- Check API server is running and accessible
- Verify CORS settings if different origin

## 📞 Support

For issues:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review [NextAuth.js Documentation](https://next-auth.js.org/)
3. Check [Vercel Documentation](https://vercel.com/docs)

---

**Last Updated**: April 16, 2026
