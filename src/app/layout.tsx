"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNotice from "../../components/MobileNotice"; // 경로는 프로젝트 구조에 맞게 조정
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Sungheon Bernard Lee",
  description: "Sungheon Bernard Lee's portfolio",
  icons: {
    icon: [
      { url: "/logo-transparent-2.svg", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // 필요시 커스텀 이벤트 등록 예시:
  // 예를 들어, 페이지 로드 시 커스텀 이벤트를 기록하려면 아래와 같이 할 수 있습니다.
  // useEffect(() => {
  //   Analytics.track("PageLoaded", {
  //     path: window.location.pathname,
  //     userAgent: navigator.userAgent,
  //     // 추가 정보도 함께 기록 가능
  //   });
  // }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-transparent.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileNotice>{children}</MobileNotice>
        {/* Vercel Analytics 컴포넌트를 추가하면 페이지뷰, 디바이스 정보 등 다양한 데이터를 자동 수집합니다 */}
        <Analytics />
      </body>
    </html>
  );
}
