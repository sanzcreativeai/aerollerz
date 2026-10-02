# 📁 Media Files Directory

Add your images and videos here.

## 📸 Service Images (29 Required)

Path: `public/media/service-images/`

**Required images for each service:**

1. corporate-events.jpg
2. conferences-seminars.jpg
3. product-launches.jpg
4. award-ceremonies.jpg
5. brand-activations.jpg
6. weddings-celebrations.jpg
7. live-entertainment.jpg
8. concert-production.jpg
9. festival-organization.jpg
10. trade-shows-exhibitions.jpg
11. private-parties.jpg
12. corporate-dinners.jpg
13. gala-events.jpg
14. cultural-events.jpg
15. music-festivals.jpg
16. sports-events.jpg
17. charity-fundraisers.jpg
18. fashion-shows.jpg
19. art-exhibitions.jpg
20. film-screenings.jpg
21. theater-productions.jpg
22. educational-seminars.jpg
23. religious-events.jpg
24. corporate-retreats.jpg
25. product-demonstrations.jpg
26. seminar-series.jpg
27. experiential-activations.jpg
28. virtual-events.jpg
29. outdoor-events.jpg

**Image specs:**
- Format: JPG or WebP
- Size: 1200x800px recommended
- File size: < 300KB each

---

## 🖼️ Portfolio Images (11 Required)

Path: `public/media/portfolio/`

**Required images:**

1. pfc-conference.jpg
2. award-ceremony.jpg
3. cultural-night.jpg
4. product-launch.jpg
5. gala-evening.jpg
6. music-concert.jpg
7. exhibition-opening.jpg
8. brand-activation.jpg
9. corporate-dinner.jpg
10. festival-production.jpg
11. trade-show.jpg

**Image specs:**
- Format: JPG or WebP
- Size: 800x600px
- File size: < 250KB each

---

## 📱 Instagram Events (9 Required)

Path: `public/media/instagram-events/`

**Required images:**

1. cultural-01.jpg
2. corporate-01.jpg
3. award-01.jpg
4. stage-01.jpg
5. gala-01.jpg
6. festival-01.jpg
7. concert-01.jpg
8. launch-01.jpg
9. concert-02.jpg

**Image specs:**
- Format: JPG or WebP
- Size: 600x600px or 1080x1080px (square)
- File size: < 200KB each

---

## 👤 Founder Photo (1 Required)

Path: `public/media/founder/sudhakar.jpg`

**Image specs:**
- Format: JPG or WebP
- Size: 400x500px (portrait)
- File size: < 150KB

---

## 🎬 Video Files (3 Required)

Path: `public/media/`

**Required videos:**

1. `pfc-conference.mp4` - PFC Corporate Conference (30-60 sec)
2. `produced-with-excellence.mp4` - Produced With Excellence (30-60 sec)
3. `highlight-reel.mp4` - Event Highlights Reel (30-60 sec)

**Video specs:**
- Format: MP4 (H.264)
- Resolution: 1920x1080 (1080p) minimum
- Bitrate: 2-5 Mbps
- File size: < 50MB per video
- Duration: 30-60 seconds recommended

**Video optimization:**
```bash
# Using ffmpeg to compress:
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
```

---

## 📊 Summary

| Type | Count | Path | Total Size |
|------|-------|------|-----------|
| Service Images | 29 | `service-images/` | ~8.7 MB |
| Portfolio Images | 11 | `portfolio/` | ~2.75 MB |
| Instagram Images | 9 | `instagram-events/` | ~1.8 MB |
| Founder Image | 1 | `founder/` | <150 KB |
| Videos | 3 | root | ~150 MB |
| **TOTAL** | **53** | | **~163 MB** |

---

## ✅ Checklist

- [ ] 29 service images added
- [ ] 11 portfolio images added
- [ ] 9 Instagram event images added
- [ ] 1 founder image added
- [ ] 3 video files added
- [ ] All images optimized for web
- [ ] All videos in MP4 format
- [ ] File sizes within limits

---

## 🖼️ Image Naming Convention

**Use exact names from this list** (case-sensitive):

Service images: `kebab-case` matching service slug
- ✅ `corporate-events.jpg`
- ✅ `product-launches.jpg`
- ❌ `Corporate Events.jpg`
- ❌ `corporate_events.jpg`

Portfolio images: `kebab-case` with number
- ✅ `pfc-conference.jpg`
- ✅ `award-ceremony.jpg`

Instagram images: `category-number` format
- ✅ `cultural-01.jpg`
- ✅ `concert-02.jpg`

---

## 🚀 After Adding Files

1. Run `npm run dev`
2. Check if images load on homepage
3. Check if videos play in reel section
4. Test on mobile devices
5. Build for production: `npm run build`

---

**Questions?**

See `SETUP_INSTRUCTIONS.md` or `README.md` for more details.
