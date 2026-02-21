# Mileage Tracker 2026 PWA

A Progressive Web App to track your safe mileage target for 2026, helping you stay within a 10,000-mile annual allowance.

## Features

- 📊 Real-time safe mileage calculation based on today's date
- 📅 Year progress tracking with visual progress bar
- 💰 Remaining allowance and daily limit calculations
- 📱 Installable on iPhone (Add to Home Screen)
- 🌐 Works offline with service worker caching
- 🎨 Clean, mobile-first design

## Deploy to GitHub Pages

### Option 1: Using gh-pages branch

1. Create a new GitHub repository
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   
   # Create and switch to gh-pages branch
   git checkout -b gh-pages
   git push -u origin gh-pages
   
   # Switch back to main
   git checkout main
   ```

3. Go to your repository Settings → Pages
4. Under "Source", select "gh-pages" branch
5. Your PWA will be available at `https://sebastiand-cerebras.github.io/cerebras-seb-playground/`

### Option 2: Using docs folder

1. Move all files to a `docs` folder:
   ```bash
   mkdir docs
   mv index.html style.css app.js manifest.json service-worker.js icons docs/
   ```
2. Push to GitHub and enable Pages with the "docs" folder as source

## Install on iPhone

1. Open Safari and visit your GitHub Pages URL
2. Tap the Share button (box with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" to install the app

The app will now launch in full-screen mode like a native app!

## Local Development

To test the PWA locally, you need an HTTPS server:

```bash
# Using Python 3
python3 -m http.server 8000 --directory .

# Or use npx serve
npx serve .
```

Then visit `https://localhost:8000` (you'll need to accept the security warning, or use a tool like ngrok for proper HTTPS).

## Files

- `index.html` - Main HTML structure with PWA meta tags
- `style.css` - Responsive, mobile-first styling
- `app.js` - Mileage calculation logic
- `manifest.json` - Web App Manifest for installability
- `service-worker.js` - Offline caching strategy
- `icons/` - App icons for various sizes

## How It Works

- **Annual Allowance**: 10,000 miles
- **Period**: January 1 - December 31, 2026
- **Daily Average**: ~27.4 miles/day
- Your safe mileage target updates automatically each day

## Browser Support

Works on all modern browsers that support:
- Service Workers
- Web App Manifest
- HTTPS (required for PWA features)

iOS 11.3+ and Android Chrome 70+ fully supported.