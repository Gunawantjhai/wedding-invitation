"use client";

import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/EventDetails/EventCard";
import { getWeddingContent } from "@/i18n/locales";

export function EventDetails() {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);

  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          glyph="禮"
          eyebrow={content.copy.events.eyebrow}
          title={content.copy.events.title}
          subtitle={content.copy.events.subtitle}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {content.events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} content={content} />
          ))}
        </div>
      </Container>
    </section>
  );
}
