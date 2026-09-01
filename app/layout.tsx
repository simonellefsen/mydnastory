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
  title: {
    default: "myDNAStory",
    template: "%s",
  },
  description:
    "An archive of DNA stories told by first name: autosomal origins, ancient Europe, maternal haplogroups, and chromosome skylines.",
  openGraph: {
    title: "myDNAStory",
    description: "First names. Whole genomes. A growing archive.",
    images: ["/images/archive-threads.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "myDNAStory",
    images: ["/images/archive-threads.jpg"],
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
