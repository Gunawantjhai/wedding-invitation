import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BankCard } from "@/components/Gift/BankCard";
import { BANK_ACCOUNTS } from "@/constants/wedding";

export function Gift() {
  return (
    <section className="bg-wine-gradient py-24 sm:py-32">
      <Container narrow>
        <SectionHeading
          light
          glyph="賀"
          eyebrow="Wedding Gift"
          title="Send Your Blessing"
          subtitle="Kehadiran Anda adalah hadiah terbesar bagi kami. Namun jika ingin memberikan tanda kasih, kami menyediakan opsi berikut."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {BANK_ACCOUNTS.map((account, index) => (
            <BankCard key={account.accountNumber} account={account} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold-200/70">
            Or Scan QR Code
          </p>
          <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-gold-400/40 bg-ivory/95 p-3 shadow-gold">
            <Image
              src="/images/qr-placeholder.png"
              alt="QR code for wedding gift transfer"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
