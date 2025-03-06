/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static export
  images: {
    unoptimized: true, // ✅ Disables Next.js image optimization
  },
};

export default nextConfig;
