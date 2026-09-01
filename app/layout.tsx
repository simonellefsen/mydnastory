import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mydnastory.vercel.app"),
  title: "Pernille — a DNA story",
  description:
    "An interactive telling of Pernille’s FamilyTreeDNA results: Scandinavian autosomal ancestry, ancient hunter-gatherer depth, and maternal haplogroup H10a1u.",
  openGraph: {
    title: "Pernille — a DNA story",
    description:
      "A cinematic walk through one genome: 71% Scandinavia, haplogroup H10a1u, and 720,349 markers.",
    images: ["/images/hero-coast.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pernille — a DNA story",
    images: ["/images/hero-coast.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
