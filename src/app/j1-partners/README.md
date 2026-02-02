# 🌟 Xperience Education Marketing Website

A stunning, high-performance marketing website built with Next.js 14, featuring beautiful design, blazing-fast load times, and SEO optimization.

## ✨ Features

- **Bento Grid Layout** - Modern, Vantara-inspired design
- **Glassmorphism Effects** - Elegant frosted glass UI elements
- **Lightning Fast** - Static generation, image optimization, perfect Core Web Vitals
- **SEO Optimized** - Meta tags, structured data, semantic HTML
- **Fully Responsive** - Beautiful on all devices
- **5 Pillar Architecture** - Students, Host Families, Schools, Partners, Careers

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or higher
- pnpm (recommended) or npm

### Installation

```bash
# Clone or create project
npx create-next-app@latest xperience-edu --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd xperience-edu

# Install dependencies
pnpm add framer-motion lucide-react clsx tailwind-merge
pnpm add -D @types/node tailwindcss-animate

# Initialize shadcn/ui
npx shadcn-ui@latest init

# Add components
npx shadcn-ui@latest add button card badge separator
```

### Copy Files

1. Replace `src/app/` with the provided app folder
2. Replace `src/components/` with the provided components folder
3. Replace `tailwind.config.ts` with the provided config
4. Add images to `public/images/`

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with fonts
│   ├── globals.css                 # Global styles
│   ├── students/
│   │   ├── page.tsx               # Students landing
│   │   ├── f1-visa/page.tsx       # F1 Visa program
│   │   ├── j1-exchange/page.tsx   # J1 Exchange program
│   │   ├── canada/page.tsx        # Canadian programs
│   │   ├── virtual/page.tsx       # Virtual high school
│   │   └── summer/page.tsx        # Summer programs
│   ├── host-families/
│   │   └── page.tsx               # Host families landing
│   ├── schools/
│   │   └── page.tsx               # Schools landing
│   ├── partners/
│   │   └── page.tsx               # Partners/agencies landing
│   ├── careers/
│   │   └── page.tsx               # Careers landing
│   └── about/
│       ├── page.tsx               # About us
│       └── contact/page.tsx       # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Site header
│   │   ├── Footer.tsx             # Site footer
│   │   └── Navigation.tsx         # Nav menu
│   ├── marketing/
│   │   ├── Hero.tsx               # Hero sections
│   │   ├── BentoGrid.tsx          # Bento grid component
│   │   ├── Stats.tsx              # Stats section
│   │   ├── Testimonials.tsx       # Testimonials
│   │   └── CTA.tsx                # Call to action
│   └── shared/
│       └── Container.tsx          # Layout container
└── lib/
    └── utils.ts                   # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#1e40af → #3b82f6) - Trust & Authority
- **Secondary**: Amber (#d97706 → #fbbf24) - Energy & Action  
- **Accent**: Emerald (#059669 → #34d399) - Success & Growth
- **Neutral**: Slate grays for professional look

### Typography
- **Display**: Plus Jakarta Sans (headings)
- **Body**: Inter (paragraphs)

### Effects
- Glassmorphism cards with backdrop blur
- Smooth hover transitions
- Gradient overlays
- Subtle shadows

## 🔧 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual

```bash
pnpm build
pnpm start
```

## 📊 SEO

Each page includes:
- Unique title and meta description
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Image alt texts

## 🔗 Future Integration

This website is designed to connect with:
- F1 Connect CRM (student applications)
- School Database (search functionality)
- Host Family Portal
- Partner Dashboard

Integration points are marked with comments in the code.

## 📝 License

© 2026 Xperience Education. All rights reserved.
