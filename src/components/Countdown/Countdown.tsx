"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountdownUnit } from "@/components/Countdown/CountdownUnit";
import { useCountdown } from "@/hooks/useCountdown";
import { COUPLE } from "@/constants/wedding";

export function Countdown() {
  const countdown = useCountdown(COUPLE.weddingDateISO);

  return (
    <section className="relative overflow-hidden bg-wine-gradient py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-silk-texture" />
      <Container className="relative flex flex-col items-center">
        <SectionHeading
          light
          glyph="緣"
          eyebrow="Save The Date"
          title="Counting Down To Forever"
          subtitle={
            countdown.isComplete
              ? "Today is the day — thank you for being part of our story."
              : "We can't wait to celebrate this moment with you."
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex items-center gap-3 sm:gap-6"
        >
          <CountdownUnit value={countdown.days} label="Days" />
          <CountdownUnit value={countdown.hours} label="Hours" />
          <CountdownUnit value={countdown.minutes} label="Minutes" />
          <CountdownUnit value={countdown.seconds} label="Seconds" />
        </motion.div>
      </Container>
    </section>
  );
}
