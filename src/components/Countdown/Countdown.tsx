"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountdownUnit } from "@/components/Countdown/CountdownUnit";
import { useCountdown } from "@/hooks/useCountdown";
import { getWeddingContent } from "@/i18n/locales";
import { Button } from "@/components/ui/Button";
import type { WeddingEvent } from "@/types";

function buildGoogleCalendarUrl(event: WeddingEvent) {
  const startDate = new Date(event.date);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 2);

  const formatDate = (date: Date) =>
    date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const title = "Wedding of Gunawan and Vyronika";
  const location = encodeURIComponent(event.venueName);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDate(startDate)}/${formatDate(endDate)}&location=${location}&sf=true&output=xml`;
}

export function Countdown() {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);
  const countdown = useCountdown(content.couple.weddingDateISO);
  const firstEvent = content.events[0];
  const googleCalendarUrl = firstEvent ? buildGoogleCalendarUrl(firstEvent) : "";

  return (
    <section className="relative overflow-hidden bg-wine-gradient py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-silk-texture" />
      <Container className="relative flex flex-col items-center">
        <SectionHeading
          light
          glyph="緣"
          eyebrow={content.copy.countdown.eyebrow}
          title={content.copy.countdown.title}
          subtitle={
            countdown.isComplete
              ? content.copy.countdown.subtitleComplete
              : content.copy.countdown.subtitleActive
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex items-center gap-3 sm:gap-6"
        >
          <CountdownUnit value={countdown.days} label={content.copy.countdown.labels.days} />
          <CountdownUnit value={countdown.hours} label={content.copy.countdown.labels.hours} />
          <CountdownUnit value={countdown.minutes} label={content.copy.countdown.labels.minutes} />
          <CountdownUnit value={countdown.seconds} label={content.copy.countdown.labels.seconds} />
        </motion.div>

        {googleCalendarUrl ? (
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            <Button variant="outline" icon={<CalendarDays size={14} aria-hidden />}>
              Save the Date
            </Button>
          </a>
        ) : null}
      </Container>
    </section>
  );
}
