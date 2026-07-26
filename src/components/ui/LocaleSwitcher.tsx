"use client";

import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { LOCALES, normalizeLocale, type Locale } from "@/i18n/locales";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  id: "ID",
  ch: "中文",
};

export function LocaleSwitcher() {
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const locale = normalizeLocale(params.locale);
  const pathWithoutLocale = pathname.replace(/^\/(en|id|ch)/, "") || "/";
  const query = searchParams.toString();

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-ivory/20 bg-white/10 p-1 text-xs backdrop-blur-md sm:text-sm">
      {LOCALES.map((nextLocale) => {
        const href =
          pathWithoutLocale === "/"
            ? `/${nextLocale}`
            : `/${nextLocale}${pathWithoutLocale}`;

        return (
          <Link
            key={nextLocale}
            href={query ? `${href}?${query}` : href}
            className={cn(
              "rounded-full px-3 py-2 transition-all duration-200 hover:bg-ivory/10",
              locale === nextLocale
                ? "bg-ivory/90 text-wine-800 shadow-sm"
                : "text-ivory/80 hover:text-ivory"
            )}
            aria-current={locale === nextLocale ? "page" : undefined}
            aria-label={`Switch language to ${LOCALE_LABELS[nextLocale]}`}
          >
            {LOCALE_LABELS[nextLocale]}
          </Link>
        );
      })}
    </div>
  );
}
