import { pad2 } from "@/lib/utils";

interface CountdownUnitProps {
  value: number;
  label: string;
}

export function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold-400/40 bg-wine-700/40 shadow-soft backdrop-blur-sm sm:h-24 sm:w-24">
        <span className="font-display text-3xl text-gold-200 sm:text-4xl">
          {pad2(value)}
        </span>
      </div>
      <span className="mt-3 text-[10px] uppercase tracking-widest2 text-ivory/70 sm:text-xs">
        {label}
      </span>
    </div>
  );
}
