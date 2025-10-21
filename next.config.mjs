/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // Optional: Remove if not needed
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https", // or 'http'
        hostname: "res.cloudinary.com", // Replace with your domain
        // port: '', // Optional: if your domain uses a specific port
        // pathname: '/path/to/images/**', // Optional: restrict to specific paths
      },
    ], // Enable Next.js image optimization
  },
};

export default nextConfig;
