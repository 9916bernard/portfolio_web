import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 기본 설정 */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  poweredByHeader: false,
};

export default nextConfig;
