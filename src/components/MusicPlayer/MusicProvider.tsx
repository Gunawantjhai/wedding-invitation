"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { MUSIC_TRACK_URL } from "@/constants/wedding";

interface MusicContextValue {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const music = useBackgroundMusic(MUSIC_TRACK_URL);

  return (
    <MusicContext.Provider value={music}>{children}</MusicContext.Provider>
  );
}

/** Access the shared background-music controls from any client component. */
export function useMusic(): MusicContextValue {
  const ctx = useContext(MusicContext);
  if (!ctx) {
    throw new Error("useMusic must be used within a <MusicProvider>");
  }
  return ctx;
}
