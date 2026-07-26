"use client";

import { motion } from "framer-motion";
import { Disc3, Pause } from "lucide-react";
import { useMusic } from "@/components/MusicPlayer/MusicProvider";

/** Floating circular button, fixed to the corner, that toggles the theme song. */
export function MusicPlayer() {
  const { isPlaying, toggle } = useMusic();

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/50 bg-wine-700/90 text-gold-200 shadow-gold backdrop-blur-sm"
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
    >
      {isPlaying ? (
        <Pause size={18} aria-hidden />
      ) : (
        <Disc3 size={18} className="animate-spinSlow" aria-hidden />
      )}
    </motion.button>
  );
}
