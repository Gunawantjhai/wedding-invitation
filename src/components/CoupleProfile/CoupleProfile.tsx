"use client";

import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProfileCard } from "@/components/CoupleProfile/ProfileCard";
import { getWeddingContent } from "@/i18n/locales";

export function CoupleProfile() {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          glyph="喜"
          eyebrow={content.copy.coupleProfile.eyebrow}
          title={content.copy.coupleProfile.title}
          subtitle={content.copy.coupleProfile.subtitle}
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-16 sm:grid-cols-[1fr_auto_1fr] sm:gap-8">
          <ProfileCard
            role={content.copy.coupleProfile.groomRole}
            roleLabelCn={content.copy.coupleProfile.groomLabelCn}
            person={content.groom}
            align="left"
          />

          <div className="hidden font-display text-4xl italic text-gold-400 sm:mt-16 sm:flex sm:items-center sm:justify-center">
            &amp;
          </div>

          <ProfileCard
            role={content.copy.coupleProfile.brideRole}
            roleLabelCn={content.copy.coupleProfile.brideLabelCn}
            person={content.bride}
            align="right"
          />
        </div>
      </Container>
    </section>
  );
}
