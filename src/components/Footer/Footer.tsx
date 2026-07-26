import { COUPLE } from "@/constants/wedding";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-20 text-center text-ivory">
      <p className="font-cn text-2xl text-gold-300">囍</p>
      <h2 className="mt-5 font-display text-3xl italic sm:text-4xl">
        {COUPLE.groomFirstName} &amp; {COUPLE.brideFirstName}
      </h2>
      <div className="mx-auto mt-6 h-px w-14 bg-gold-gradient" />
      <p className="mx-auto mt-6 max-w-sm px-6 text-sm leading-relaxed text-ivory/70">
        Thank you for celebrating our special day with us.
      </p>
      <p className="mt-8 text-[11px] uppercase tracking-widest2 text-ivory/40">
        {COUPLE.weddingDateDisplay} · {COUPLE.hashtag}
      </p>
    </footer>
  );
}
