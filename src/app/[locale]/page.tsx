import { Suspense } from "react";
import { HomeContent } from "@/app/HomeContent";
import { PageLoader } from "@/components/ui/PageLoader";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }, { locale: "ch" }];
}

export default function LocalePage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomeContent />
    </Suspense>
  );
}
