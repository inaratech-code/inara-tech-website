# INARA TECH Website - Deployment Guide

## 🚀 Quick Deployment Options

### 1. Firebase Hosting (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase project
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### 2. Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```

### 4. GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```

## 📁 Project Structure
```
├── dist/                 # Production build (generated)
├── public/              # Static assets
│   ├── images/         # Images (Akshay.JPG, backgrounds, etc.)
│   └── videos/         # Video files
├── src/                # Source code
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── utils/         # Utility functions
│   └── ...
├── content/           # Blog content (markdown files)
├── index.html         # Entry point
└── package.json       # Dependencies and scripts
```

## 🛠️ Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Firebase deployment
npm run build && firebase deploy

# Lint and fix
npm run lint:fix

# Clean build folder
npm run clean
```

## 📋 Pre-Deployment Checklist
- [x] Build successful (`npm run build`)
- [x] No linting errors (`npm run lint`)
- [x] All images optimized
- [x] Contact form working (Formspree)
- [x] Blog posts loading correctly
- [x] Site loader working
- [x] Responsive design tested
- [x] SEO meta tags added

## 🔧 Environment Variables (if needed)
Create `.env` file for any API keys:
```
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
VITE_SITE_URL=your_domain.com
```

## 📊 Performance
- Bundle size: ~697KB (gzipped: ~201KB)
- CSS: ~61KB (gzipped: ~11KB)
- Optimized for production
- Lazy loading implemented
- Image optimization included

## 🌐 Domain Setup
1. Point your domain to the hosting provider
2. Update DNS records
3. Configure SSL certificate
4. Test all functionality

## 📞 Support
For deployment issues, check:
- Build logs for errors
- Browser console for runtime errors
- Network tab for failed requests
- Mobile responsiveness

---
**Ready for deployment!** 🎉
