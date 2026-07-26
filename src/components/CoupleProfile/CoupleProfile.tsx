import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProfileCard } from "@/components/CoupleProfile/ProfileCard";
import { GROOM, BRIDE } from "@/constants/wedding";

export function CoupleProfile() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          glyph="喜"
          eyebrow="With Great Joy"
          title="The Bride & Groom"
          subtitle="Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir merestui pernikahan kami."
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-16 sm:grid-cols-[1fr_auto_1fr] sm:gap-8">
          <ProfileCard
            role="Groom"
            roleLabelCn="新郎"
            person={GROOM}
            align="left"
          />

          <div className="hidden font-display text-4xl italic text-gold-400 sm:mt-16 sm:flex sm:items-center sm:justify-center">
            &amp;
          </div>

          <ProfileCard
            role="Bride"
            roleLabelCn="新娘"
            person={BRIDE}
            align="right"
          />
        </div>
      </Container>
    </section>
  );
}
