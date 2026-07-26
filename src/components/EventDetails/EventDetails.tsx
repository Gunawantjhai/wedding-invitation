import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/EventDetails/EventCard";
import { EVENTS } from "@/constants/wedding";

export function EventDetails() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          glyph="禮"
          eyebrow="Please Join Us"
          title="Wedding Events"
          subtitle="Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan kebahagiaan tersendiri bagi kami."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {EVENTS.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
