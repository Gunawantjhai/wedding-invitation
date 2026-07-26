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
import { MusicPlayer } from "@/components/MusicPlayer/MusicPlayer";
import { Footer } from "@/components/Footer/Footer";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { getGuestNameFromSearchParams } from "@/lib/utils";

let coverOpened = false;

export function HomeContent() {
  const [isOpen, setIsOpen] = useState(coverOpened);
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
