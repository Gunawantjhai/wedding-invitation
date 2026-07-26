"use client";

import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/LoveStory/TimelineItem";
import { getWeddingContent } from "@/i18n/locales";

export function LoveStory() {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);

  return (
    <section className="bg-ivory-soft py-24 sm:py-32">
      <Container narrow>
        <SectionHeading
          glyph="緣"
          eyebrow={content.copy.loveStory.eyebrow}
          title={content.copy.loveStory.title}
          subtitle={content.copy.loveStory.subtitle}
        />

        <div className="mt-16">
          {content.loveStory.map((milestone, index) => (
            <TimelineItem
              key={milestone.year}
              milestone={milestone}
              index={index}
              isLast={index === content.loveStory.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
