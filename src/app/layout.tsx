import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { FadeUpObserver } from "@/components/fade-up-observer";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — Human-Centered Transformation for the Age of Intelligent Systems`,
    template: `%s — ${site.legalName}`,
  },
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: `${site.legalName} — Human-Centered Transformation`,
    description: site.description,
    url: site.url,
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — Human-Centered Transformation`,
    description: site.description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <FadeUpObserver />
      </body>
    </html>
  );
}
