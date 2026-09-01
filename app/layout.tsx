import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  alternates: {
    languages: {
      en: "/en",
      da: "/da",
      "x-default": "/en",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
