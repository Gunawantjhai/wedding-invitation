// ---------------------------------------------------------------------------
// Domain types shared across the wedding invitation app
// ---------------------------------------------------------------------------

export interface Parent {
  father: string;
  mother: string;
}

export interface PersonProfile {
  fullName: string;
  nickname: string;
  childOrder: string; // e.g. "Putra pertama dari" / "Son of"
  parents: Parent;
  photo: string;
  instagram?: string;
}

export interface LoveStoryMilestone {
  year: string;
  title: string;
  description: string;
  icon?: "heart" | "sparkles" | "ring" | "calendar";
}

export interface WeddingEvent {
  id: string;
  name: string;
  subtitle: string;
  date: string; // ISO date
  displayDate: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logo?: string;
}

// ---------------------------------------------------------------------------
// Supabase table row types
// ---------------------------------------------------------------------------

export type AttendanceStatus = "attending" | "not_attending" | "pending";

export interface RSVPEntry {
  id?: string;
  created_at?: string;
  guest_name: string;
  attendance: AttendanceStatus;
  guest_count: number;
  message: string;
}

export interface RSVPFormState {
  guest_name: string;
  attendance: AttendanceStatus;
  guest_count: number;
  message: string;
}

export interface GuestWish {
  id: string;
  created_at: string;
  guest_name: string;
  message: string;
  attendance: AttendanceStatus;
}

// ---------------------------------------------------------------------------
// Countdown
// ---------------------------------------------------------------------------

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}
