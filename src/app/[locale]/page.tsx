import { HomeContent } from "@/app/HomeContent";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }, { locale: "ch" }];
}

export default function LocalePage() {
  return <HomeContent />;
}
