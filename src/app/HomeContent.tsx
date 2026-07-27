"use client";

import { useEffect, useState } from "react";
import { Cover } from "@/components/Cover/Cover";
import { Hero } from "@/components/Hero/Hero";
import { Countdown } from "@/components/Countdown/Countdown";
import { CoupleProfile } from "@/components/CoupleProfile/CoupleProfile";
import { EventDetails } from "@/components/EventDetails/EventDetails";
import { Gallery } from "@/components/Gallery/Gallery";
import { RSVP } from "@/components/RSVP/RSVP";
import { Wishes } from "@/components/Wishes/Wishes";
import { MusicPlayer } from "@/components/MusicPlayer/MusicPlayer";
import { Footer } from "@/components/Footer/Footer";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { getGuestNameFromSearchParams } from "@/lib/utils";

let coverOpened = false;

export function HomeContent() {
  const [isOpen, setIsOpen] = useState(coverOpened);
  const [isHydrated, setIsHydrated] = useState(false);
  const [wishesRefresh, setWishesRefresh] = useState(0);
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
    const nextGuestName = getGuestNameFromSearchParams(window.location.search);
    setGuestName(nextGuestName);
  }, []);

  // Lock body scroll while the cover is showing
  useEffect(() => {
    if (!isHydrated) return;
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHydrated, isOpen]);

  const handleOpen = () => {
    coverOpened = true;
    setIsOpen(true);
  };

  return (
    <main className="relative">
      <LocaleSwitcher />

      <Cover
        isOpen={isOpen}
        guestName={guestName}
        onOpen={handleOpen}
      />

      <Hero />
      <Countdown />
      <CoupleProfile />
      <EventDetails />
      <Gallery />
      <RSVP onSubmitted={() => setWishesRefresh((n) => n + 1)} />
      <Wishes refreshSignal={wishesRefresh} />
      <Footer />

      <MusicPlayer />
    </main>
  );
}
