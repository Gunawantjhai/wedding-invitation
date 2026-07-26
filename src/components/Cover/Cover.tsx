"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Music, Volume2 } from "lucide-react";
import { useParams } from "next/navigation";
import { OrnamentFrame } from "@/components/ui/OrnamentFrame";
import { useMusic } from "@/components/MusicPlayer/MusicProvider";
import { COUPLE } from "@/constants/wedding";
import { getWeddingContent } from "@/i18n/locales";

interface CoverProps {
  isOpen: boolean;
  guestName: string | null;
  onOpen: () => void;
}

export function Cover({ isOpen, guestName, onOpen }: CoverProps) {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);
  const music = useMusic();

  const handleOpen = () => {
    music.play();
    onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex h-[100dvh] w-full flex-col items-center justify-between overflow-hidden bg-wine-700 text-ivory"
        >
          <Image
            src={COUPLE.coverImage}
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-wine-gradient opacity-80" />

          <OrnamentFrame />

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 font-cn text-3xl text-gold-300"
            >
              囍
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xs uppercase tracking-widest2 text-gold-200/80"
            >
              {content.copy.cover.intro}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-display text-4xl italic leading-tight tracking-tight sm:text-5xl md:text-6xl whitespace-normal"
            >
              <span className="inline-block break-words">
                {content.couple.groomFirstName}
              </span>
              <span className="mx-2 inline-block text-gold-300 not-italic sm:mx-3">
                &amp;
              </span>
              <span className="inline-block break-words">
                {content.couple.brideFirstName}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "3rem" }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 h-px bg-gold-gradient"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-6 text-sm tracking-wide text-ivory/80 sm:text-base"
            >
              {content.couple.weddingDateDisplay}
            </motion.p>

            {guestName && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="mt-8 text-xs uppercase tracking-widest2 text-gold-200/70"
              >
                {content.copy.cover.guestLabel}
                <span className="mt-1 block font-display text-lg italic text-ivory">
                  {guestName}
                </span>
              </motion.p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="relative z-10 mb-14 flex flex-col items-center gap-4"
          >
            <button
              onClick={handleOpen}
              className="group inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-3.5 text-sm uppercase tracking-widest2 text-wine-800 shadow-gold transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              <Volume2 size={16} className="shrink-0" aria-hidden />
              {content.copy.cover.openButton}
            </button>
            <p className="flex items-center gap-1.5 text-[11px] text-ivory/50">
              <Music size={12} aria-hidden />
              {content.copy.cover.soundHint}
            </p>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
