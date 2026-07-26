import type { Metadata, Viewport } from "next";
import { Playfair_Display, Noto_Serif_SC, Jost } from "next/font/google";
import { MusicProvider } from "@/components/MusicPlayer/MusicProvider";
import { SITE_META, COUPLE } from "@/constants/wedding";
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
  weight: ["500", "700"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_META.url),
  title: SITE_META.title,
  description: SITE_META.description,
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    images: [COUPLE.coverImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
    images: [COUPLE.coverImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5C1420",
  width: "device-width",
  initialScale: 1,
};

import { normalizeLocale } from "@/i18n/locales";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const htmlLang = locale === "ch" ? "zh" : locale;

  return (
    <html lang={htmlLang} className={`${playfair.variable} ${notoSerifSC.variable} ${jost.variable}`}>
      <body>
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  );
}
