"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitRSVP, RSVPServiceError } from "@/lib/rsvp";
import type { AttendanceStatus, RSVPFormState } from "@/types";

const initialState: RSVPFormState = {
  guest_name: "",
  attendance: "attending",
  guest_count: 1,
  message: "",
};

interface RSVPFormProps {
  onSubmitted?: () => void;
}

export function RSVPForm({ onSubmitted }: RSVPFormProps) {
  const [form, setForm] = useState<RSVPFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitRSVP(form);
      setStatus("success");
      setForm(initialState);
      onSubmitted?.();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof RSVPServiceError
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-2xl border border-gold-400/40 bg-white/70 px-8 py-12 text-center"
      >
        <CheckCircle2 className="text-wine-600" size={40} aria-hidden />
        <h3 className="mt-4 font-display text-2xl italic text-wine-700">
          Thank You!
        </h3>
        <p className="mt-2 max-w-xs text-sm text-ink/65">
          Your response has been recorded. We truly appreciate you taking the
          time to confirm.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs uppercase tracking-widest2 text-wine-500 underline-offset-4 hover:underline"
        >
          Submit another response
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-gold-400/30 bg-white/70 p-6 shadow-soft sm:p-8"
    >
      <Field label="Your Name">
        <input
          required
          type="text"
          value={form.guest_name}
          onChange={(e) => setForm({ ...form, guest_name: e.target.value })}
          placeholder="Enter your full name"
          className="input"
        />
      </Field>

      <Field label="Will you attend?">
        <div className="grid grid-cols-2 gap-3">
          {(
            [
              { value: "attending", label: "Joyfully Attending" },
              { value: "not_attending", label: "Regretfully Decline" },
            ] as { value: AttendanceStatus; label: string }[]
          ).map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setForm({ ...form, attendance: option.value })}
              className={`rounded-lg border px-4 py-2.5 text-xs uppercase tracking-wide transition-colors ${
                form.attendance === option.value
                  ? "border-wine-600 bg-wine-600 text-ivory"
                  : "border-gold-400/40 text-ink/70 hover:border-gold-500"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </Field>

      {form.attendance === "attending" && (
        <Field label="Number of Guests">
          <select
            value={form.guest_count}
            onChange={(e) =>
              setForm({ ...form, guest_count: Number(e.target.value) })
            }
            className="input"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </Field>
      )}

      <Field label="Message For The Couple">
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Send your blessings and best wishes..."
          rows={4}
          className="input resize-none"
        />
      </Field>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-wine-600">
          <AlertCircle size={15} className="shrink-0" aria-hidden />
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full"
        icon={
          status === "loading" ? (
            <Loader2 size={16} className="animate-spin" aria-hidden />
          ) : (
            <Send size={14} aria-hidden />
          )
        }
      >
        {status === "loading" ? "Sending..." : "Submit RSVP"}
      </Button>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(201, 161, 90, 0.4);
          background: white;
          padding: 0.65rem 0.9rem;
          font-size: 0.9rem;
          color: #1c1210;
        }
        .input:focus {
          outline: none;
          border-color: #7a1f2b;
          box-shadow: 0 0 0 3px rgba(122, 31, 43, 0.12);
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest2 text-wine-500/80">
        {label}
      </span>
      {children}
    </label>
  );
}
