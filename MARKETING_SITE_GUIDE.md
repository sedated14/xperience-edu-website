# 🚀 Xperience Education - Marketing Website Upgrade

## Overview

A stunning, fast marketing website to replace your current Squarespace site. **Marketing pages only** - your F1 Connect CRM and databases will be integrated later via links/buttons.

---

## 🎯 What This Project IS

✅ Beautiful, modern design (Bento grid, glassmorphism, animations)
✅ Lightning-fast load times (Next.js static generation)
✅ SEO optimized for US domestic traffic
✅ Mobile-responsive across all devices
✅ 5 pillar landing pages with compelling content
✅ "Apply Now" / "Login" buttons that link to F1 Connect (added later)

## 🚫 What This Project IS NOT (Yet)

❌ No application forms (use F1 Connect)
❌ No database connections (connect later)
❌ No user portals/dashboards (use F1 Connect)
❌ No CRM integration (add later)

---

## 📁 Site Structure (Matching Your Current Site)

```
xperienceedu.com/
│
├── /                          # Homepage - Hero + 5 Pillars
│
├── /programs/                 # Programs Overview
│   ├── /f1-visa              # F1 High School Program
│   ├── /j1-exchange          # J1 Exchange Program  
│   ├── /short-term           # Short Term Programs
│   └── /summer               # Summer Programs
│
├── /host-families            # Host a Student
│
├── /partners/                # Partnership Opportunities
│   ├── /schools             # For F1-Approved Schools
│   ├── /agencies            # Sending Organizations
│   └── /representatives     # Sales Reps / 1099 Contractors
│
├── /about                    # About Xperience Education
└── /contact                  # Contact Form
```

---

## 🎨 Design Upgrades from Current Site

| Current (Squarespace)        | New (Next.js)                      |
|------------------------------|-------------------------------------|
| Standard template            | Custom Bento Grid layout            |
| Static images                | Hero video + animated sections      |
| Plain text blocks            | Glass cards with hover effects      |
| Basic navigation             | Sticky header with mega menu        |
| Slow load times              | Sub-second page loads               |
| Limited SEO control          | Full meta tags, structured data     |

---

## 🖼️ Image/Video Placeholders Needed

You'll need to provide or source these assets:

### Homepage
- [ ] Hero video or image (students on campus, 1920x1080 min)
- [ ] Student testimonial photos (3-5 headshots)
- [ ] Campus/school images (3-5 photos)

### Programs Pages
- [ ] F1 student in classroom
- [ ] J1 cultural exchange moment
- [ ] Summer program activities
- [ ] Group of international students

### Host Families
- [ ] Happy host family with student
- [ ] Family dinner scene
- [ ] Cultural exchange moment

### Partners/Schools
- [ ] School campus exterior
- [ ] Professional meeting/handshake
- [ ] World map or globe graphic

### About
- [ ] Team photo or founder photo
- [ ] Office or workspace
- [ ] Students success stories

**Tip**: Use stock from Unsplash, Pexels, or purchase from Shutterstock for professional look.

---

## 🔗 F1 Connect Integration Points

These buttons/links will connect to your existing systems:

```
[Apply Now] → links to F1 Connect Student Application
[Student Login] → links to F1 Connect Student Portal
[Partner Login] → links to F1 Connect Partner Portal
[School Login] → links to F1 Connect School Portal
[Host Family Application] → links to F1 Connect HF Form
```

For now, these will be placeholder buttons. Once F1 Connect is ready, just update the URLs.

---

## ⚡ Performance Targets

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **First Contentful Paint**: < 1.0s
- **Time to Interactive**: < 2.0s
- **Cumulative Layout Shift**: < 0.1

Achieved through:
- Static site generation (no server rendering needed)
- Optimized images (Next.js Image component)
- Minimal JavaScript
- Edge CDN delivery via Vercel

---

## 🔍 SEO Strategy (US Domestic Focus)

### Primary Keywords
- "F1 visa high school" → /programs/f1-visa
- "J1 exchange program high school" → /programs/j1-exchange
- "host exchange student" → /host-families
- "international student recruitment" → /partners/representatives

### On-Page SEO (Every Page Gets)
- Unique title tag (60 chars max)
- Meta description (155 chars max)
- H1 with primary keyword
- Internal links to related pages
- Image alt tags
- Schema.org structured data

### Technical SEO
- XML sitemap auto-generated
- Robots.txt configured
- Canonical URLs
- Mobile-first responsive design
- HTTPS enforced
- Fast Core Web Vitals

---

## 🛠️ Quick Setup (30 Minutes)

### 1. Create Project
```bash
npx create-next-app@latest xperience-edu --typescript --tailwind --eslint --app --src-dir
cd xperience-edu
```

### 2. Install Dependencies
```bash
npm install framer-motion lucide-react clsx tailwind-merge
npm install -D tailwindcss-animate
```

### 3. Copy Files
- Replace `tailwind.config.ts` with provided config
- Replace `src/app/` with provided app folder
- Replace `src/components/` with provided components

### 4. Add Images
- Add your images to `public/images/`
- Update image paths in components

### 5. Run & Deploy
```bash
npm run dev          # Local development
npm run build        # Production build
```

Deploy to Vercel:
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploy on every push

---

## 📝 Content Migration from Current Site

Your current Squarespace content can be enhanced:

| Current Page | New Page | Enhancement |
|--------------|----------|-------------|
| Homepage | / | Add hero video, Bento grid, testimonials |
| J1 High School | /programs/j1-exchange | Add features grid, FAQ section |
| F1 Program | /programs/f1-visa | Add school types, cost comparison |
| Short Term | /programs/short-term | Add program calendar, highlights |
| Summer | /programs/summer | Add activity showcase |
| Host Families | /host-families | Add J1 vs F1 tracks, requirements |
| Schools | /partners/schools | Add partnership benefits, process |
| Sending Orgs | /partners/agencies | Add commission tiers, dashboard preview |
| Sales Reps | /partners/representatives | Add job listings, earnings potential |
| About | /about | Add timeline, team, mission |
| Contact | /contact | Add form, map, quick contact |

---

## 🎬 Next Steps

1. **Review the generated code** - I've created all page files
2. **Gather images/videos** - Source high-quality visuals
3. **Customize content** - Update text to match your brand voice
4. **Set up hosting** - Deploy to Vercel (free tier works great)
5. **Connect domain** - Point xperienceedu.com to Vercel
6. **Add F1 Connect links** - When ready, update CTA buttons

---

## Need Help?

The generated code includes:
- ✅ Homepage with hero + 5 pillar Bento grid
- ✅ All program pages (F1, J1, Short-term, Summer)
- ✅ Host Families page with J1/F1 tracks
- ✅ Partner pages (Schools, Agencies, Representatives)
- ✅ About page with company story
- ✅ Contact page placeholder
- ✅ Header with mega menu
- ✅ Footer with all links
- ✅ Tailwind config with custom design system
- ✅ Global styles with animations

All files are ready to use - just add your images and deploy!
