"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Landmark } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import type { BankAccount } from "@/types";

export function BankCard({ account, index }: { account: BankAccount; index: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(account.accountNumber);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="flex flex-col items-center rounded-2xl border border-gold-400/30 bg-white/70 px-6 py-8 text-center shadow-soft"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wine-600 text-gold-200">
        <Landmark size={20} aria-hidden />
      </div>
      <p className="mt-4 text-sm font-semibold text-wine-700">
        {account.bankName}
      </p>
      <p className="mt-2 font-display text-2xl tracking-wider text-ink">
        {account.accountNumber}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest2 text-ink/50">
        a.n. {account.accountHolder}
      </p>

      <button
        onClick={handleCopy}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-4 py-2 text-xs uppercase tracking-widest2 text-wine-600 transition-colors hover:bg-gold-400/10"
      >
        {copied ? (
          <>
            <Check size={13} aria-hidden /> Copied
          </>
        ) : (
          <>
            <Copy size={13} aria-hidden /> Copy Number
          </>
        )}
      </button>
    </motion.div>
  );
}
