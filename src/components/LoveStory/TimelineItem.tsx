"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Gem, CalendarHeart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LoveStoryMilestone } from "@/types";

const ICONS = {
  heart: Heart,
  sparkles: Sparkles,
  ring: Gem,
  calendar: CalendarHeart,
} as const;

interface TimelineItemProps {
  milestone: LoveStoryMilestone;
  index: number;
  isLast: boolean;
}

/**
 * One node on the love-story rail. Mobile: single column, text right of the
 * dot. Desktop (sm+): alternates left/right of a centered vertical rail.
 */
export function TimelineItem({ milestone, index, isLast }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const Icon = ICONS[milestone.icon ?? "heart"];

  return (
    <div className="relative grid grid-cols-[2.75rem_1fr] gap-6 sm:grid-cols-[1fr_2.75rem_1fr] sm:gap-8">
      {/* Desktop left slot */}
      <div className={cn("hidden sm:block", isEven ? "" : "opacity-0")}>
        {isEven && <TimelineText milestone={milestone} index={index} align="right" />}
      </div>

      {/* Center rail */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold-400 bg-wine-600 text-gold-200 shadow-gold"
        >
          <Icon size={16} aria-hidden />
        </motion.div>
        {!isLast && (
          <span className="mt-1 w-px flex-1 bg-gradient-to-b from-gold-400/60 to-gold-400/10" />
        )}
      </div>

      {/* Mobile content (always right of dot) */}
      <div className="sm:hidden">
        <TimelineText milestone={milestone} index={index} align="left" />
      </div>

      {/* Desktop right slot */}
      <div className={cn("hidden sm:block", !isEven ? "" : "opacity-0")}>
        {!isEven && <TimelineText milestone={milestone} index={index} align="left" />}
      </div>
    </div>
  );
}

function TimelineText({
  milestone,
  index,
  align,
}: {
  milestone: LoveStoryMilestone;
  index: number;
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={cn("pb-12 sm:pb-16", align === "right" && "sm:text-right")}
    >
      <p className="font-display text-2xl italic text-gold-500">{milestone.year}</p>
      <h3 className="mt-1 text-lg font-semibold text-wine-700">{milestone.title}</h3>
      <p
        className={cn(
          "mt-2 max-w-xs text-sm leading-relaxed text-ink/65",
          align === "right" && "sm:ml-auto"
        )}
      >
        {milestone.description}
      </p>
    </motion.div>
  );
}
