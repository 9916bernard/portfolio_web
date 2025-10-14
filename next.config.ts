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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  poweredByHeader: false,
  // 네트워크 접속 허용 설정 (개발 환경에서 핸드폰 테스트용)
  allowedDevOrigins: [
    '10.32.20.217',
    'localhost',
    '127.0.0.1',
  ],
};

export default nextConfig;
