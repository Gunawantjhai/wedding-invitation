"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RSVPForm } from "@/components/RSVP/RSVPForm";

interface RSVPProps {
  onSubmitted?: () => void;
}

export function RSVP({ onSubmitted }: RSVPProps) {
  return (
    <section id="rsvp" className="bg-ivory-soft py-24 sm:py-32">
      <Container narrow>
        <SectionHeading
          glyph="答"
          eyebrow="Kindly Confirm"
          title="RSVP"
          subtitle="Mohon konfirmasi kehadiran Anda sebelum 1 September 2027 untuk membantu kami mempersiapkan acara dengan baik."
        />

        <div className="mt-12">
          <RSVPForm onSubmitted={onSubmitted} />
        </div>
      </Container>
    </section>
  );
}
