"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("Invitation page error:", error);
  }, [error]);

  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="font-cn text-3xl text-gold-500">憾</p>
      <h2 className="mt-4 font-display text-2xl italic text-wine-700">
        Something went wrong
      </h2>
      <p className="mt-2 max-w-sm text-sm text-ink/60">
        We couldn&apos;t load the invitation. Please try again, or refresh the
        page.
      </p>
      <div className="mt-6">
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}
