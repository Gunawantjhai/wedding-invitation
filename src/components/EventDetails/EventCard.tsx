"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { WeddingContent } from "@/i18n/locales";
import type { WeddingEvent } from "@/types";

export function EventCard({ event, index, content }: { event: WeddingEvent; index: number; content: WeddingContent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center rounded-3xl border border-gold-400/30 bg-white/60 px-8 py-10 text-center shadow-soft backdrop-blur-sm"
    >
      <span className="font-cn text-2xl text-gold-500">
        {event.id === "matrimony" ? "禮" : "宴"}
      </span>
      <h3 className="mt-3 font-display text-2xl italic text-wine-700">
        {event.name}
      </h3>
      <p className="text-xs uppercase tracking-widest2 text-wine-500/70">
        {event.subtitle}
      </p>

      <div className="mt-6 h-px w-10 bg-gold-gradient" />

      <div className="mt-6 space-y-3 text-sm text-ink/75">
        <div className="flex items-center justify-center gap-2">
          <span>{event.displayDate}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span>{event.time}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-center">
          <div className="flex flex-col items-center">
            <strong className="block text-ink">{event.venueName}</strong>
            <span>{event.venueAddress}</span>
          </div>
        </div>
      </div>

      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8"
      >
        <Button variant="outline" icon={<MapPin size={14} aria-hidden />}>
          {content.copy.events.mapsButton}
        </Button>
      </a>
    </motion.div>
  );
}
