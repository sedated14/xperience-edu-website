# 📸 How to Add Images & Videos to Your Website

## Step 1: Create the Folders

Open **File Explorer** and navigate to your project:

```
C:\Users\Sean\OneDrive\Documents\xperience-edu-website\
```

Inside that folder, find the folder called **`public`**. If it doesn't exist, create it.

Inside `public`, create two new folders:

```
public\
  images\       ← Create this folder
  videos\       ← Create this folder
```

Your full paths will be:
```
C:\Users\Sean\OneDrive\Documents\xperience-edu-website\public\images\
C:\Users\Sean\OneDrive\Documents\xperience-edu-website\public\videos\
```

---

## Step 2: Add Your Logo

Copy your logo file (`Xperience_logo_updated.png`) into the images folder.
Rename it to `logo.png` for simplicity:

```
public\images\logo.png
```

---

## Step 3: Gather These Images

Here's every image the site needs, organized by page. Save them into `public\images\` with these exact names:

### Homepage Images
| Filename | What to Use | Where to Find |
|----------|-------------|---------------|
| `hero-students.jpg` | Group of international students on a US campus | Unsplash: search "international students campus" |
| `about-video.jpg` | Team photo or campus scene (used as video thumbnail) | Your own photo or Unsplash |

### Students Page
| Filename | What to Use | Where to Find |
|----------|-------------|---------------|
| `students-hero.jpg` | Student studying or in classroom | Unsplash: "student classroom" |

### F1 Visa Page
| Filename | What to Use | Where to Find |
|----------|-------------|---------------|
| `f1-classroom.jpg` | Student in private school setting | Unsplash: "private school student" |

### J1 Exchange Page
| Filename | What to Use | Where to Find |
|----------|-------------|---------------|
| `j1-exchange.jpg` | Cultural exchange moment or group activity | Unsplash: "exchange student" |

### Host Families Page
| Filename | What to Use | Where to Find |
|----------|-------------|---------------|
| `host-family.jpg` | Happy family at dinner table or with student | Unsplash: "host family dinner" |

### Schools Page
| Filename | What to Use | Where to Find |
|----------|-------------|---------------|
| `school-campus.jpg` | American high school campus exterior | Unsplash: "high school campus" |

### Partners Page
| Filename | What to Use | Where to Find |
|----------|-------------|---------------|
| `partners-meeting.jpg` | Professional meeting or handshake | Unsplash: "business partnership" |

### About Page
| Filename | What to Use | Where to Find |
|----------|-------------|---------------|
| `team-photo.jpg` | Your team or office photo | Your own photo |
| `office.jpg` | Workspace or office | Your own photo or Unsplash |

### Free Stock Photo Sites
- **Unsplash**: https://unsplash.com (Free, high quality)
- **Pexels**: https://www.pexels.com (Free, good variety)
- **Pixabay**: https://pixabay.com (Free, lots of options)

**Image Tips:**
- Download the **Large** or **Original** size
- JPG format works best
- Aim for at least 1920x1080 pixels
- Choose diverse, authentic-looking photos

---

## Step 4: Add Images to Your Code

Once your images are in `public\images\`, here's how to display them.

### Example: Replace a placeholder on the homepage

Find this code in `src\app\page.tsx`:
```tsx
<div className="w-full h-full bg-gradient-to-br from-primary-800 to-secondary-900 flex items-center justify-center">
  <div className="text-white/80 text-center p-8">
    <GraduationCap className="w-24 h-24 mx-auto mb-4" />
    <p className="text-lg font-medium">Add hero image</p>
    <p className="text-sm text-white/60">public/images/hero-students.jpg</p>
  </div>
</div>
```

Replace the ENTIRE block above with:
```tsx
<img
  src="/images/hero-students.jpg"
  alt="International students on an American campus"
  className="w-full h-full object-cover"
/>
```

**Important:** In your code, the path starts with `/images/` (not `public/images/`).
Next.js automatically serves files from the `public` folder.

---

## Step 5: Add Your Logo to the Header

Open `src\components\layout\Header.tsx`

Find this section near the top:
```tsx
{/* 
  YOUR LOGO: Place Xperience_logo_updated.png in public/images/
  Then uncomment the img tag and remove the text fallback
*/}
{/* <img src="/images/logo.png" alt="Xperience Education" className="h-10 w-10 rounded-full" /> */}
```

Change it to (remove the comment markers):
```tsx
<img src="/images/logo.png" alt="Xperience Education" className="h-10 w-10 rounded-full" />
```

Do the same thing in `src\components\layout\Footer.tsx`.

---

## Step 6: Adding Videos

### Option A: YouTube Embed (Easiest)
If you have a YouTube video, find the placeholder in any page and replace it with:

```tsx
<iframe
  className="w-full aspect-video rounded-3xl"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Xperience Education"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

Replace `YOUR_VIDEO_ID` with the ID from your YouTube URL.
Example: if your URL is `youtube.com/watch?v=abc123`, the ID is `abc123`.

### Option B: Self-Hosted Video
Save your video to `public\videos\hero.mp4`, then use:

```tsx
<video
  className="w-full h-full object-cover rounded-3xl"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

**Video Tips:**
- MP4 format works best
- Compress to under 10MB for fast loading
- Use https://handbrake.fr to compress videos for free

---

## Quick Reference: File Path Cheat Sheet

| What | File Path (on your computer) | Code Path (in .tsx files) |
|------|------------------------------|---------------------------|
| Logo | `public\images\logo.png` | `/images/logo.png` |
| Hero | `public\images\hero-students.jpg` | `/images/hero-students.jpg` |
| Video | `public\videos\hero.mp4` | `/videos/hero.mp4` |
| Any image | `public\images\filename.jpg` | `/images/filename.jpg` |

The rule: Drop `public` from the path when using it in code.

---

## Checklist

- [ ] Created `public\images\` folder
- [ ] Created `public\videos\` folder
- [ ] Copied logo as `public\images\logo.png`
- [ ] Downloaded hero image as `public\images\hero-students.jpg`
- [ ] Uncommented logo in Header.tsx
- [ ] Uncommented logo in Footer.tsx
- [ ] Replaced at least 1 placeholder with an actual image
- [ ] Tested with `npm run dev -- -p 3001`
