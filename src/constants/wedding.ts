import type {
  BankAccount,
  GalleryImage,
  LoveStoryMilestone,
  PersonProfile,
  WeddingEvent,
} from "@/types";

// ---------------------------------------------------------------------------
// Edit everything below to personalize the invitation.
// This is the single source of truth consumed by every section component.
// ---------------------------------------------------------------------------

export const COUPLE = {
  groomFirstName: "Gunawan",
  brideFirstName: "Vyronika",
  hashtag: "#GunawanVyro2027",
  weddingDateISO: "2027-01-24T10:00:00+07:00",
  weddingDateDisplay: "24 Januari 2027",
  coverImage: "/images/cover.jpg",
  heroImage: "/images/hero.jpg",
  quote:
    "Dua hati, satu ikatan, seribu doa — dari pertemuan sederhana, tumbuh cinta yang membawa kami ke hari bahagia ini.",
};

export const GROOM: PersonProfile = {
  fullName: "Gunawan",
  nickname: "Gunawan",
  childOrder: "Putra bungsu dari",
  parents: {
    father: "Bapak Cua Hok Seng (Alm)",
    mother: "Ibu Ng A Hiok (Alm)",
  },
  photo: "/images/groom.jpg",
  instagram: "@gunawan.w",
};

export const BRIDE: PersonProfile = {
  fullName: "Vyronika",
  nickname: "Vyro",
  childOrder: "Putri bungsu dari",
  parents: {
    father: "Bapak Huang Se Leng",
    mother: "Ibu Tan A Pin",
  },
  photo: "/images/bride.jpg",
  instagram: "@vyro.a",
};

export const LOVE_STORY: LoveStoryMilestone[] = [
  {
    year: "2019",
    title: "First Meet",
    description:
      "Dipertemukan lewat teman kuliah di sebuah acara keluarga besar di Pematangsiantar — percakapan singkat yang berkesan lama.",
    icon: "sparkles",
  },
  {
    year: "2023",
    title: "Started Relationship",
    description:
      "Setelah bertahun-tahun menjaga komunikasi, keduanya memutuskan untuk melangkah bersama dalam sebuah hubungan yang serius.",
    icon: "heart",
  },
  {
    year: "2026",
    title: "Engagement",
    description:
      "Lamaran adat Hokkien digelar penuh haru, disaksikan keluarga besar dari kedua belah pihak sebagai restu awal perjalanan.",
    icon: "ring",
  },
  {
    year: "2027",
    title: "Wedding Day",
    description:
      "Hari yang telah lama dinantikan — janji suci di hadapan Tuhan, keluarga, dan sahabat tercinta.",
    icon: "calendar",
  },
];

export const EVENTS: WeddingEvent[] = [
  {
    id: "matrimony",
    name: "Holy Matrimony",
    subtitle: "Pemberkatan Pernikahan",
    date: "2027-01-24T09:00:00+07:00",
    displayDate: "Minggu, 24 Januari 2027",
    time: "11:00 – 13:00 WIB",
    venueName: "The Zuri Hotel Pekanbaru by ZHM",
    venueAddress: "Kompleks Transmart, Jl. Soekarno-Hatta, Pekanbaru - Riau",
    mapsUrl: "https://maps.app.goo.gl/hY1rGaRh65wPVKZR7",
  },
  {
    id: "reception",
    name: "Wedding Reception",
    subtitle: "Resepsi Pernikahan",
    date: "2027-01-24T09:00:00+07:00",
    displayDate: "Minggu, 24 Januari 2027",
    time: "11:00 – 13:00 WIB",
    venueName: "Grand Ballroom - The Zuri Hotel Pekanbaru by ZHM",
    venueAddress: "Kompleks Transmart, Jl. Soekarno-Hatta, Pekanbaru - Riau",
    mapsUrl: "https://maps.app.goo.gl/hY1rGaRh65wPVKZR7",
  },
];

// Gallery images — replace src with your own photos in /public/images/gallery
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/1.jpg", width: 4, height: 5, alt: "Gunawan & Vyro pre-wedding photo 1" },
  { id: "g2", src: "/images/gallery/2.jpg", width: 4, height: 3, alt: "Gunawan & Vyro pre-wedding photo 2" },
  { id: "g3", src: "/images/gallery/3.jpg", width: 3, height: 4, alt: "Gunawan & Vyro pre-wedding photo 3" },
  { id: "g4", src: "/images/gallery/4.jpg", width: 4, height: 5, alt: "Gunawan & Vyro pre-wedding photo 4" },
  { id: "g5", src: "/images/gallery/5.jpg", width: 4, height: 4, alt: "Gunawan & Vyro pre-wedding photo 5" },
  { id: "g6", src: "/images/gallery/6.jpg", width: 3, height: 4, alt: "Gunawan & Vyro pre-wedding photo 6" },
  { id: "g7", src: "/images/gallery/7.jpg", width: 4, height: 3, alt: "Gunawan & Vyro pre-wedding photo 7" },
  { id: "g8", src: "/images/gallery/8.jpg", width: 4, height: 5, alt: "Gunawan & Vyro pre-wedding photo 8" },
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountHolder: "Gunawan Wijaya",
  },
  {
    bankName: "Bank Mandiri",
    accountNumber: "0987654321",
    accountHolder: "Vyro Anggraini",
  },
];

export const MUSIC_TRACK_URL = "/audio/wedding-theme.mp3";

export const SITE_META = {
  title: "Gunawan & Vyronika — Wedding Invitation",
  description:
    "Undangan pernikahan digital Gunawan & Vyro, 12 September 2027. Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk turut hadir merayakan hari bahagia kami.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gunawan-vyro.wedding",
};
