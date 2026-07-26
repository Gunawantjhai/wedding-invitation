# Gunawan & Vyro — Luxury Wedding Invitation

A premium, mobile-first digital wedding invitation built for a Chinese
Hokkien Sumatra wedding, with a red-and-gold aesthetic, smooth scroll
animations, a live RSVP system, and a guest wishes wall — all backed by
Supabase and ready to deploy on Vercel.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-e10a8c)

---

## ✨ Features

- **Envelope-style opening cover** with a gesture-gated "Open Invitation"
  button that starts background music (browser autoplay-safe)
- **Live countdown timer** (days / hours / minutes / seconds)
- **Couple profile** with parents' names, styled after traditional
  Chinese wedding invitation wording
- **Love story timeline**, alternating left/right on desktop, single-column
  on mobile
- **Event detail cards** (Holy Matrimony + Reception) with one-tap Google
  Maps links
- **Masonry photo gallery** with a dependency-free custom lightbox
  (keyboard/click navigation, no external gallery library)
- **RSVP form** wired to Supabase — attendance, guest count, and message,
  with loading / success / error states
- **Guest wishes wall** that reads directly from the same Supabase table
  and refreshes automatically after a new submission
- **Wedding gift section** with bank details, one-tap "copy account
  number", and a QR code placeholder
- **Floating background-music toggle**, shared across the whole page via
  React context (Cover's button and the floating button control the same
  `<audio>` instance)
- SEO metadata, Open Graph tags, `sitemap.xml`, `robots.txt`
- Route-level `loading.tsx`, `error.tsx`, and `not-found.tsx`
- Respects `prefers-reduced-motion`, visible focus rings, semantic HTML

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, SEO metadata, MusicProvider
│   ├── page.tsx           # Server wrapper (Suspense boundary)
│   ├── HomeContent.tsx    # Client page — assembles all sections
│   ├── loading.tsx / error.tsx / not-found.tsx
│   ├── robots.ts / sitemap.ts
│   └── globals.css
├── components/
│   ├── Cover/              # Full-screen opening invitation
│   ├── Hero/                # Large photo + quote
│   ├── Countdown/           # Live countdown timer
│   ├── CoupleProfile/       # Groom / bride / parents
│   ├── LoveStory/            # Timeline
│   ├── EventDetails/         # Matrimony + reception cards
│   ├── Gallery/               # Masonry + lightbox
│   ├── RSVP/                   # Supabase-connected form
│   ├── Wishes/                  # Guest messages wall
│   ├── Gift/                     # Bank accounts + QR
│   ├── MusicPlayer/               # Shared audio context + floating button
│   ├── Footer/
│   └── ui/                         # Button, Container, SectionHeading, etc.
├── lib/
│   ├── supabase.ts    # Supabase client (gracefully degrades if unset)
│   ├── rsvp.ts          # submitRSVP / fetchGuestWishes
│   └── utils.ts          # cn, formatLongDate, copyToClipboard, etc.
├── hooks/
│   ├── useCountdown.ts
│   ├── useInViewOnce.ts
│   └── useBackgroundMusic.ts
├── types/
│   └── index.ts        # All shared TS interfaces
└── constants/
    └── wedding.ts    # ⭐ Edit this file to personalize the whole site
supabase/
└── schema.sql       # Run once in the Supabase SQL editor
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor → New query**, paste the contents of
   `supabase/schema.sql`, and run it. This creates the `rsvps` table with
   the correct Row Level Security policies (public insert + public read,
   no update/delete from the client).
3. Go to **Project Settings → API** and copy the **Project URL** and
   **anon public key**.
4. Copy `.env.example` to `.env.local` and fill in both values:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://your-wedding-domain.com
```

> The site still renders without Supabase configured — the RSVP form will
> show a friendly "temporarily unavailable" message instead of crashing,
> which is useful while you're still building locally.

### 3. Add your photos & music

See `public/images/README.md` and `public/audio/README.md` for the exact
filenames and recommended sizes expected by the code.

### 4. Personalize the content

Everything guest-facing — names, dates, venues, timeline copy, bank
accounts — lives in **one file**: `src/constants/wedding.ts`. No need to
touch component code to update the wedding's details.

### 5. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`. Add `?to=Guest+Name` to the URL to preview
the personalized greeting on the cover (e.g.
`http://localhost:3000/?to=Budi+%26+Family`).

---

## 📦 Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the same three environment variables from `.env.local` in the
   Vercel project settings (**Settings → Environment Variables**).
4. Deploy. Vercel auto-detects Next.js — no extra build config needed.

---

## 🧩 Tech Stack

| Layer        | Choice                              |
|--------------|--------------------------------------|
| Framework    | Next.js 15 (App Router, TypeScript)  |
| Styling      | Tailwind CSS 3                        |
| Animation    | Framer Motion                          |
| Backend      | Supabase (Postgres + RLS, no auth needed) |
| Icons        | lucide-react                            |
| Fonts        | Playfair Display, Noto Serif SC, Jost (via `next/font/google`) |

---

## 🎨 Design Notes

- **Palette**: deep wine red (`#5C1420`), foil gold gradient
  (`#DCBD79 → #8C6C31`), warm ivory background (`#F8F2E7`), near-black ink
  (`#1C1210`) — see `tailwind.config.ts` for the full scale.
- **Signature motif**: a small circular seal containing a single Chinese
  character (囍 喜 緣 禮 賀 …) precedes every section heading, echoing a
  traditional wax invitation stamp. Defined once in
  `components/ui/SectionHeading.tsx` and reused everywhere for consistency.
- **Type pairing**: Playfair Display italic for couple names and headings
  (romantic, editorial), Jost for body copy (clean, contemporary), Noto
  Serif SC for the Chinese glyph accents.

---

## ✅ Production Checklist

- [ ] Replace all images in `public/images/`
- [ ] Add `public/audio/wedding-theme.mp3`
- [ ] Update `src/constants/wedding.ts` with real names, dates, venues
- [ ] Run `supabase/schema.sql` on your Supabase project
- [ ] Set environment variables locally and on Vercel
- [ ] Update `NEXT_PUBLIC_SITE_URL` for correct Open Graph/sitemap URLs
- [ ] Test the RSVP form end-to-end and confirm rows appear in Supabase
- [ ] Test on a real mobile device (audio autoplay, scroll performance)

---

## 📄 License

This project was built as a custom deliverable and is free for the couple
to use, modify, and deploy for their wedding.
