# Image Assets

This folder is empty by default — add your own photos using the **exact
filenames** below (referenced from `src/constants/wedding.ts`). Recommended
formats: `.jpg` or `.webp`, optimized/compressed before upload.

| Path                          | Used in            | Recommended size    |
|-------------------------------|---------------------|----------------------|
| `cover.jpg`                   | Cover (background)  | 1080×1920 (portrait) |
| `hero.jpg`                    | Hero section        | 1920×1280 (landscape)|
| `groom.jpg`                   | Couple Profile      | 600×600 (square)     |
| `bride.jpg`                   | Couple Profile      | 600×600 (square)     |
| `gallery/1.jpg` ... `8.jpg`   | Gallery masonry     | any, portrait/landscape mixed for a natural masonry look |
| `qr-placeholder.png`          | Gift section        | 400×400 (square, transparent background) |

Tips:
- Keep hero/cover photos under ~300KB after compression (use
  [squoosh.app](https://squoosh.app) or `sharp`) to keep the first paint fast.
- Update `width`/`height` ratios in `GALLERY_IMAGES` (in
  `src/constants/wedding.ts`) if your photos have very different aspect
  ratios than the defaults, so the masonry layout doesn't jump on load.
- `public/audio/wedding-theme.mp3` also needs to be added for the
  background-music feature (any royalty-free instrumental works well).
