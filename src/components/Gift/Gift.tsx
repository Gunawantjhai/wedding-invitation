"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BankCard } from "@/components/Gift/BankCard";
import { getWeddingContent } from "@/i18n/locales";

export function Gift() {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);

  return (
    <section className="bg-wine-gradient py-24 sm:py-32">
      <Container narrow>
        <SectionHeading
          light
          glyph="賀"
          eyebrow={content.copy.gift.eyebrow}
          title={content.copy.gift.title}
          subtitle={content.copy.gift.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {content.bankAccounts.map((account, index) => (
            <BankCard key={account.accountNumber} account={account} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold-200/70">
            {content.copy.gift.scanLabel}
          </p>
          <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-gold-400/40 bg-ivory/95 p-3 shadow-gold">
            <Image
              src="/images/qr-placeholder.png"
              alt={content.copy.gift.qrAlt}
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
