import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
import { locales, type Locale } from "../i18n";
import "../globals.css";

// Metadata cơ bản cho trang web
export const metadata: Metadata = {
  title: "とんかつ にいむら | Tonkatsu Niimura Shinjuku",
  description: "新宿で愛される老舗とんかつ「にいむら」。厳選黒豚を使用した極上のとんかつをご堪能ください。Premium Kurobuta Tonkatsu in Shinjuku.",
  keywords: ["新宿 とんかつ", "Shinjuku Tonkatsu", "Kurobuta Pork", "にいむら", "Tonkatsu Niimura"],
  metadataBase: new URL('https://tonkatsu-niimura.vercel.app'),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  // JSON-LD cho Google hiển thị "Rich Results"
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "とんかつ にいむら (Tonkatsu Niimura)",
    "url": "https://tonkatsu-niimura.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "歌舞伎町1-23-10",
      "addressLocality": "新宿区",
      "addressRegion": "東京都",
      "addressCountry": "JP"
    },
    "telephone": "+81-3-3200-5900",
    "servesCuisine": "Tonkatsu",
    "priceRange": "¥2000 - ¥4000"
  };

  return (
    <html lang={currentLocale}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300,0,0"
        />
        {/* Khai báo đa ngôn ngữ cho SEO quốc tế */}
        {locales.map((l) => (
          
          <link key={l} rel="alternate" href={`https://tonkatsu-niimura.vercel.app/${l}`} hrefLang={l} />
        ))}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body>
        <SiteHeader locale={currentLocale} />
        <main>{children}</main>
      </body>
    </html>
  );
}