"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "solid",
  icon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm uppercase tracking-widest2 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "solid" &&
          "bg-gold-gradient text-wine-800 shadow-gold hover:shadow-lg hover:brightness-105",
        variant === "outline" &&
          "border border-gold-400/70 text-gold-500 hover:bg-gold-400/10",
        variant === "ghost" && "text-wine-600 hover:text-wine-700",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
