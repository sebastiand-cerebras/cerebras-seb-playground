#!/bin/bash

# GitHub Pages Deployment Script
# This script helps deploy the app to GitHub Pages

echo "📦 Mileage Tracker - GitHub Pages Deployment"
echo "=============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized."
    echo "Run: git init"
    echo "Then: git add . && git commit -m 'Initial commit'"
    exit 1
fi

# Check for gh-pages branch
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "📋 gh-pages branch already exists"
    echo "Switching to gh-pages branch..."
    git checkout gh-pages
else
    echo "📋 Creating gh-pages branch..."
    git checkout --orphan gh-pages
    git rm -rf .
fi

# Copy files from main branch
echo "📋 Copying files..."
git checkout main -- index.html style.css app.js manifest.json service-worker.js icons README.md .gitignore

# Add and commit
git add .
git commit -m "Deploy to GitHub Pages" || echo "No changes to commit"

echo "✅ Files ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push -u origin gh-pages"
echo "2. Go to your repo Settings → Pages"
echo "3. Select 'gh-pages' branch as Source"
echo "4. Visit your PWA URL"
echo ""
echo "To return to main: git checkout main"