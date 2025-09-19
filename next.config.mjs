// next.config.mjs
/** @type {import('next').NextConfig} */

// Initialize plugins first (vetted for Next 15)
import createPWA from "next-pwa";
import createAnalyzer from "@next/bundle-analyzer";

// Configure next-pwa
const withPWA = createPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/maps\.googleapis\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-maps",
        expiration: { maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    {
      urlPattern: /^https:\/\/(?:www\.)?gstatic\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "gstatic",
        expiration: { maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    {
      urlPattern: /^https:\/\/.*firebaseapp\.com\/.*/i,
      handler: "StaleWhileRevalidate",
      options: { cacheName: "firebaseapp" },
    },
    {
      urlPattern: /^https:\/\/img1\.wsimg\.com\/.*/i,
      handler: "StaleWhileRevalidate",
      options: { cacheName: "godaddy" },
    },
  ],
});

// Toggle analyzer via ANALYZE=true
const withAnalyzer = createAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Base Next.js config
const baseConfig = {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // cPanel-friendly
};

// Compose plugins and export a single config
export default withAnalyzer(withPWA(baseConfig));
