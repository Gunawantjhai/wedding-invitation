"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { COUPLE } from "@/constants/wedding";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-ink py-24">
      <div className="absolute inset-0">
        <Image
          src={COUPLE.heroImage}
          alt={`${COUPLE.groomFirstName} and ${COUPLE.brideFirstName}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9 }}
          className="font-cn text-2xl text-gold-300"
        >
          緣
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-4xl italic text-ivory sm:text-6xl"
        >
          {COUPLE.groomFirstName}
          <span className="mx-4 text-gold-300 not-italic">&amp;</span>
          {COUPLE.brideFirstName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "4rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 h-px bg-gold-gradient"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mx-auto mt-8 max-w-xl text-base italic leading-loose text-ivory/85 sm:text-lg"
        >
          &ldquo;{COUPLE.quote}&rdquo;
        </motion.p>
      </Container>
    </section>
  );
}
