# ⚡ QUICK SETUP INSTRUCTIONS

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Media Files

Create these folders and add your files:

```bash
# Create media structure
mkdir -p public/media/{service-images,portfolio,instagram-events,founder}
```

**Then add:**
- `public/media/founder/sudhakar.jpg` - Founder photo (1 image)
- `public/media/service-images/` - Service hero images (29 images)
  - `corporate-events.jpg`
  - `conferences-seminars.jpg`
  - `product-launches.jpg`
  - ... (27 more services - see src/lib/site-data.ts for all names)
  
- `public/media/portfolio/` - Event photos (11 images)
  - `pfc-conference.jpg`
  - `award-ceremony.jpg`
  - `cultural-night.jpg`
  - ... (8 more)
  
- `public/media/instagram-events/` - Instagram gallery (9 images)
  - `cultural-01.jpg`
  - `corporate-01.jpg`
  - `award-01.jpg`
  - ... (6 more)
  
- `public/media/` - Video files (3 videos)
  - `pfc-conference.mp4`
  - `produced-with-excellence.mp4`
  - `highlight-reel.mp4`

### 3. Test Locally
```bash
npm run dev
# Open http://localhost:3000
```

### 4. Build for Production
```bash
npm run build
npm start
```

### 5. Deploy to Vercel

#### Option A: Via GitHub (Recommended)
```bash
# Initialize git
git init
git add .
git commit -m "Initial Aerollerz website"

# Create repo on github.com, then:
git remote add origin https://github.com/YOUR-USERNAME/aerollerz-site.git
git branch -M main
git push -u origin main

# Go to vercel.com
# Click "New Project" → Select your repo → Deploy
```

#### Option B: Direct Vercel Deploy
```bash
npm install -g vercel
vercel deploy --prod
```

---

## 📝 Customize Content

### Update Business Info
Edit `src/lib/site-data.ts`:
- Company name, address, phone
- Service descriptions
- Portfolio items
- FAQ questions

### Change Colors
Edit `src/app/globals.css`:
- `--color-accent-purple` - Main color
- `--color-accent-cyan` - Accent color
- All colors are RGB values

### Update Landing Copy
Edit `src/app/page.tsx`:
- Hero section text
- About section
- CTA buttons

---

## 🔍 Troubleshooting

### Images not showing?
- Check folder: `public/media/`
- Check filenames match `src/lib/site-data.ts`
- Use lowercase filenames

### Build errors?
```bash
# Clean and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
# Or kill the process using port 3000
```

---

## ✅ Before Launch

- [ ] All media files added
- [ ] Business info updated in site-data.ts
- [ ] Tested locally (npm run dev)
- [ ] Build successful (npm run build)
- [ ] Deployed to Vercel
- [ ] Custom domain configured
- [ ] Google Search Console set up
- [ ] Google Analytics added

---

## 📞 Key Files

| File | Purpose |
|------|---------|
| `src/lib/site-data.ts` | All content & business info |
| `src/app/page.tsx` | Home page layout |
| `src/app/globals.css` | Colors & animations |
| `src/components/` | Reusable components |
| `public/media/` | Images & videos |

---

## 🚀 Deploy Commands

```bash
# Local development
npm run dev

# Production build
npm run build

# Start production server
npm start

# TypeScript check
npm run type-check

# Linting
npm run lint
```

---

**You're ready to go! 🎉**

For detailed setup guide, see `README.md`
