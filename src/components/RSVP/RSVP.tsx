"use client";

import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RSVPForm } from "@/components/RSVP/RSVPForm";
import { getWeddingContent } from "@/i18n/locales";

interface RSVPProps {
  onSubmitted?: () => void;
}

export function RSVP({ onSubmitted }: RSVPProps) {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);

  return (
    <section id="rsvp" className="bg-ivory-soft py-24 sm:py-32">
      <Container narrow>
        <SectionHeading
          glyph="答"
          eyebrow={content.copy.rsvp.eyebrow}
          title={content.copy.rsvp.title}
          subtitle={content.copy.rsvp.subtitle}
        />

        <div className="mt-12">
          <RSVPForm onSubmitted={onSubmitted} content={content} />
        </div>
      </Container>
    </section>
  );
}
