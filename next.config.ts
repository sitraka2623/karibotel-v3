import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // <--- AJOUTEZ CETTE LIGNE
  images: {
    remotePatterns: [],
    unoptimized: true,   // <--- CHANGEZ EN 'true'
  },
};

export default nextConfig;