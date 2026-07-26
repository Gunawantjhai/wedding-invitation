"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  /** A single Chinese character used as the recurring seal motif, e.g. 囍 喜 緣 */
  glyph?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

/**
 * The recurring signature element of this design: a small red-gold seal
 * containing one Chinese character, echoing a wax invitation stamp, paired
 * with a serif title and a thin gold rule. Repeats — quietly — before every
 * major section.
 */
export function SectionHeading({
  eyebrow,
  glyph,
  title,
  subtitle,
  light,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col items-center text-center", className)}
    >
      {glyph && (
        <div
          className={cn(
            "mb-5 flex h-12 w-12 items-center justify-center rounded-full border font-cn text-lg",
            light
              ? "border-gold-300/60 text-gold-200"
              : "border-gold-500/50 bg-wine-600 text-gold-200"
          )}
        >
          {glyph}
        </div>
      )}
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[11px] uppercase tracking-widest2",
            light ? "text-gold-200/80" : "text-wine-500/70"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl italic sm:text-4xl",
          light ? "text-ivory" : "text-wine-700"
        )}
      >
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gold-gradient" />
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-md text-sm leading-relaxed sm:text-base",
            light ? "text-ivory/80" : "text-ink/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
