/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static export
  trailingSlash: true, // ✅ Ensures proper routing for SSG (fixes reload issue)
  images: {
    unoptimized: true, // ✅ Disables Next.js image optimization (for cPanel compatibility)
  },
};

export default nextConfig;
