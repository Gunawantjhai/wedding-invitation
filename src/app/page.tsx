import { Suspense } from "react";
import { HomeContent } from "./HomeContent";
import { PageLoader } from "@/components/ui/PageLoader";

export default function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomeContent />
    </Suspense>
  );
}
