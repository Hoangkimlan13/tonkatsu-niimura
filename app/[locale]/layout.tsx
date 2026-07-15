import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
import { locales, type Locale } from "../i18n"; 
import "../globals.css";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "にいむら | Premium Tonkatsu Restaurant",
  description: "Luxury modern tonkatsu restaurant specializing in premium Kurobuta pork.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300,0,0"
        />
      </head>
      <body>
        <SiteHeader locale={locale} />
        <main>{children}</main>
      </body>
    </html>
  );
}