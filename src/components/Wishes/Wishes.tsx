"use client";

import { useCallback, useEffect, useState } from "react";
import { Loader2, MessageCircleHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WishCard } from "@/components/Wishes/WishCard";
import { fetchGuestWishes } from "@/lib/rsvp";
import type { GuestWish } from "@/types";

export interface WishesHandle {
  refresh: () => void;
}

export function Wishes({
  refreshSignal,
}: {
  /** Bump this number from a parent to trigger a refetch (e.g. after RSVP). */
  refreshSignal?: number;
}) {
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchGuestWishes();
    setWishes(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load, refreshSignal]);

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          glyph="言"
          eyebrow="From Our Loved Ones"
          title="Guest Wishes"
          subtitle="Doa dan ucapan dari keluarga serta sahabat tercinta."
        />

        <div className="mt-14">
          {isLoading && (
            <div className="flex justify-center py-10 text-wine-500/70">
              <Loader2 className="animate-spin" size={24} aria-hidden />
            </div>
          )}

          {!isLoading && wishes.length === 0 && (
            <div className="flex flex-col items-center py-10 text-center text-ink/50">
              <MessageCircleHeart size={28} aria-hidden />
              <p className="mt-3 text-sm">
                Be the first to leave a message for the couple.
              </p>
            </div>
          )}

          {!isLoading && wishes.length > 0 && (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {wishes.map((wish, index) => (
                <div key={wish.id} className="mb-4">
                  <WishCard wish={wish} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
