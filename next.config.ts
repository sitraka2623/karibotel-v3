import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;