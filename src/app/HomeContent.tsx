"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Cover } from "@/components/Cover/Cover";
import { Hero } from "@/components/Hero/Hero";
import { Countdown } from "@/components/Countdown/Countdown";
import { CoupleProfile } from "@/components/CoupleProfile/CoupleProfile";
import { LoveStory } from "@/components/LoveStory/LoveStory";
import { EventDetails } from "@/components/EventDetails/EventDetails";
import { Gallery } from "@/components/Gallery/Gallery";
import { RSVP } from "@/components/RSVP/RSVP";
import { Wishes } from "@/components/Wishes/Wishes";
import { Gift } from "@/components/Gift/Gift";
import { MusicPlayer } from "@/components/MusicPlayer/MusicPlayer";
import { Footer } from "@/components/Footer/Footer";
import { getGuestNameFromSearchParams } from "@/lib/utils";

export function HomeContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [wishesRefresh, setWishesRefresh] = useState(0);
  const searchParams = useSearchParams();
  const guestName = getGuestNameFromSearchParams(searchParams);

  // Lock body scroll while the cover is showing
  useEffect(() => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <main className="relative">
      <Cover
        isOpen={isOpen}
        guestName={guestName}
        onOpen={() => setIsOpen(true)}
      />

      <Hero />
      <Countdown />
      <CoupleProfile />
      <LoveStory />
      <EventDetails />
      <Gallery />
      <RSVP onSubmitted={() => setWishesRefresh((n) => n + 1)} />
      <Wishes refreshSignal={wishesRefresh} />
      <Gift />
      <Footer />

      <MusicPlayer />
    </main>
  );
}
