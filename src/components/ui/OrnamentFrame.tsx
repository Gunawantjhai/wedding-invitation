import { cn } from "@/lib/utils";

/**
 * Thin gold corner brackets, like the foil-stamped border of a printed
 * invitation card. Purely decorative; absolutely positioned within a
 * `relative` parent.
 */
export function OrnamentFrame({ className }: { className?: string }) {
  const corner =
    "absolute h-8 w-8 sm:h-10 sm:w-10 border-gold-300/70";
  return (
    <div className={cn("pointer-events-none absolute inset-4 sm:inset-6", className)}>
      <span className={cn(corner, "left-0 top-0 border-l border-t")} />
      <span className={cn(corner, "right-0 top-0 border-r border-t")} />
      <span className={cn(corner, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(corner, "bottom-0 right-0 border-b border-r")} />
    </div>
  );
}
