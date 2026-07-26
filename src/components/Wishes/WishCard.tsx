"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { GuestWish } from "@/types";

export function WishCard({ wish, index }: { wish: GuestWish; index: number }) {
  const formattedDate = wish.created_at
    ? new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(wish.created_at))
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 8) * 0.05 }}
      className="break-inside-avoid rounded-xl border border-gold-400/25 bg-white/80 p-5"
    >
      <Quote size={16} className="text-gold-400" aria-hidden />
      <p className="mt-2 text-sm leading-relaxed text-ink/75">{wish.message}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-wine-500">
        <span className="font-medium">{wish.guest_name}</span>
        {wish.attendance === "attending" && <span className="text-gold-500">• Attending</span>}
        {formattedDate && <span className="text-ink/50">• {formattedDate}</span>}
      </div>
    </motion.div>
  );
}
