"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { GuestWish } from "@/types";

export function WishCard({ wish, index }: { wish: GuestWish; index: number }) {
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
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-wine-500">
        {wish.guest_name}
        {wish.attendance === "attending" && (
          <span className="ml-2 text-gold-500">• Attending</span>
        )}
      </p>
    </motion.div>
  );
}
