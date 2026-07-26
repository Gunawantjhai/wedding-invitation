"use client";

import { useEffect, useState } from "react";
import type { CountdownValue } from "@/types";

const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;

function diffToCountdown(targetTime: number): CountdownValue {
  const diff = targetTime - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / 1000),
    isComplete: false,
  };
}

/** Live countdown to a target ISO date string, updating every second. */
export function useCountdown(targetIso: string): CountdownValue {
  const targetTime = new Date(targetIso).getTime();
  const [value, setValue] = useState<CountdownValue>(() =>
    diffToCountdown(targetTime)
  );

  useEffect(() => {
    const tick = () => setValue(diffToCountdown(targetTime));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return value;
}
