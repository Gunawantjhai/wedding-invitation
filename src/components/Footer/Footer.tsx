"use client";

import { useParams } from "next/navigation";
import { getWeddingContent } from "@/i18n/locales";

export function Footer() {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);

  return (
    <footer className="relative overflow-hidden bg-ink py-20 text-center text-ivory">
      <p className="font-cn text-2xl text-gold-300">囍</p>
      <h2 className="mt-5 font-display text-3xl italic sm:text-4xl">
        {content.couple.groomFirstName} &amp; {content.couple.brideFirstName}
      </h2>
      <div className="mx-auto mt-6 h-px w-14 bg-gold-gradient" />
      <p className="mx-auto mt-6 max-w-sm px-6 text-sm leading-relaxed text-ivory/70">
        {content.copy.footer.thankYou}
      </p>
      <p className="mt-8 text-[11px] uppercase tracking-widest2 text-ivory/40">
        {content.couple.weddingDateDisplay} · {content.couple.hashtag}
      </p>
    </footer>
  );
}
