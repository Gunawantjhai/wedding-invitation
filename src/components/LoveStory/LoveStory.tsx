import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/LoveStory/TimelineItem";
import { LOVE_STORY } from "@/constants/wedding";

export function LoveStory() {
  return (
    <section className="bg-ivory-soft py-24 sm:py-32">
      <Container narrow>
        <SectionHeading
          glyph="緣"
          eyebrow="Our Journey"
          title="A Love Story"
          subtitle="Setiap pertemuan adalah takdir, setiap langkah adalah pilihan untuk terus bersama."
        />

        <div className="mt-16">
          {LOVE_STORY.map((milestone, index) => (
            <TimelineItem
              key={milestone.year}
              milestone={milestone}
              index={index}
              isLast={index === LOVE_STORY.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
