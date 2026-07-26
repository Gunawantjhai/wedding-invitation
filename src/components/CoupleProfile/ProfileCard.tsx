"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import type { PersonProfile } from "@/types";

interface ProfileCardProps {
  role: string;
  roleLabelCn: string;
  person: PersonProfile;
  align: "left" | "right";
}

export function ProfileCard({ role, roleLabelCn, person, align }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-gold-400/60 shadow-gold sm:h-48 sm:w-48">
        <Image
          src={person.photo}
          alt={person.fullName}
          fill
          className="object-cover"
          sizes="192px"
        />
      </div>

      <p className="mt-6 font-cn text-lg text-gold-500">{roleLabelCn}</p>
      <p className="text-[11px] uppercase tracking-widest2 text-wine-500/70">
        {role}
      </p>
      <h3 className="mt-2 font-display text-3xl italic text-wine-700">
        {person.nickname}
      </h3>
      <p className="mt-1 text-sm text-ink/60">{person.fullName}</p>

      <div className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
        <p>{person.childOrder}</p>
        <p className="mt-1 font-medium text-ink">
          {person.parents.father} &amp; {person.parents.mother}
        </p>
      </div>

      {person.instagram && (
        <a
          href={`https://instagram.com/${person.instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-wine-500 transition-colors hover:text-gold-500"
        >
          <Instagram size={13} aria-hidden />
          {person.instagram}
        </a>
      )}
    </motion.div>
  );
}
