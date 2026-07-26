import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { GuestWish, RSVPFormState } from "@/types";

const TABLE = "rsvps";

export class RSVPServiceError extends Error {}

/**
 * Inserts a new RSVP / guest wish row.
 * Throws `RSVPServiceError` with a user-friendly message on failure so the
 * calling component can render it directly.
 */
export async function submitRSVP(form: RSVPFormState): Promise<void> {
  if (!isSupabaseConfigured || !supabase) {
    throw new RSVPServiceError(
      "RSVP is temporarily unavailable — Supabase is not configured yet."
    );
  }

  if (!form.guest_name.trim()) {
    throw new RSVPServiceError("Please enter your name.");
  }

  const { error } = await supabase.from(TABLE).insert({
    guest_name: form.guest_name.trim(),
    attendance: form.attendance,
    guest_count: form.attendance === "attending" ? form.guest_count : 0,
    message: form.message.trim(),
  });

  if (error) {
    throw new RSVPServiceError(
      "We couldn't submit your RSVP. Please try again in a moment."
    );
  }
}

/**
 * Fetches the most recent guest wishes for public display.
 * Returns an empty array (rather than throwing) so the Wishes section can
 * simply show an empty state if the fetch fails.
 */
export async function fetchGuestWishes(limit = 50): Promise<GuestWish[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  const { data, error } = await supabase
    .from(TABLE)
    .select("id, created_at, guest_name, message, attendance")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error || !data) return [];

  return data.filter((row) => row.message?.trim().length > 0) as GuestWish[];
}
