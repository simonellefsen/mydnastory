import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const family = "https://pernille-helle.vercel.app";
    return [
      { source: "/:locale(en|da)/pernille", destination: `${family}/:locale/pernille`, permanent: true },
      { source: "/:locale(en|da)/helle", destination: `${family}/:locale/helle`, permanent: true },
      { source: "/:locale(en|da)/shared", destination: `${family}/:locale/shared`, permanent: true },
    ];
  },
};

export default nextConfig;
