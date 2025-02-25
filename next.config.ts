import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["assets.aceternity.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Mengabaikan error ESLint saat build
  },
};

export default nextConfig;
