import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNotice from "../../components/MobileNotice"; // 경로는 프로젝트 구조에 맞게 조정
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sungheon Bernard Lee",
  description: "Sungheon Bernard Lee's portfolio",
  icons: {
    icon: [
      { url: "/sbl-logo.svg", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sbl-logo.svg" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/sbl-logo.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MobileNotice>{children}</MobileNotice>
        {/* Vercel Analytics: 페이지뷰, 사용자 디바이스 정보 자동 수집 */}
        <Analytics />
        {/* 기본 SpeedInsights 컴포넌트 사용 (커스텀 옵션은 현재 지원되지 않습니다) */}
        <SpeedInsights />
      </body>
    </html>
  );
}
