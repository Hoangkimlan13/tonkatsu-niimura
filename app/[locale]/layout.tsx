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

type Params = Promise<{ locale: Locale }>;

interface RootLayoutProps {
  children: React.ReactNode;
  // Next.js yêu cầu kiểu Promise<{ [key: string]: string }> cho params
  params: Promise<{ locale: string }>; 
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  // Chờ lấy locale
  const { locale } = await params;

  // Ép kiểu locale sang kiểu Locale của bạn để dùng trong code
  const currentLocale = locale as Locale;

  return (
    <html lang={currentLocale}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300,0,0"
        />
      </head>
      <body>
        <SiteHeader locale={currentLocale} />
        <main>{children}</main>
      </body>
    </html>
  );
}