import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNotice from "../../components/MobileNotice"; // 경로는 프로젝트 구조에 맞게 조정

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
      { url: "/logo-transparent-2.svg", sizes: "any" }, // SVG는 벡터이므로 해상도에 구애받지 않습니다.
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
        <link rel="icon" href="/logo-transparent.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MobileNotice>{children}</MobileNotice>
      </body>
    </html>
  );
}
