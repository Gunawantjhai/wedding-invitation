"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref + boolean that flips to `true` the first time the element
 * scrolls into view, and stays true (elements don't re-hide on scroll back
 * up — a calmer, more premium feel for a one-page invitation).
 */
export function useInViewOnce<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
