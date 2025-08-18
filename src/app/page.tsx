"use client";

import './globals.css';
import React, { useEffect, useState } from 'react';
import Sidebar from "../../components/Sidebar";
import SectionWrapper from "../../components/sections/sectionWrapper";
import LoadingScreen from "../../components/LoadingScreen";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useResourceLoader } from "../../hooks/useResourceLoader";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const sectionIds = ['intro', 'projects', 'experiences', 'awards', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  const { isLoading, progress } = useResourceLoader({
    minLoadingTime: 2000,    // 처음 방문 시 2초
    shortLoadingTime: 500,   // 재방문 시 0.5초
    onComplete: () => {
      setShowContent(true);
    }
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 로딩 중이거나 클라이언트가 아니면 로딩 화면 표시
  if (!isClient || !showContent) {
    return (
      <LoadingScreen 
        progress={progress}
        onLoadingComplete={() => {
          // 로딩 완료 후 추가 처리 (필요시)
        }}
      />
    );
  }

  return (
    <div className="relative w-full bg-black min-h-screen">
      <Sidebar activeSection={activeSection} />
      <SectionWrapper />
    </div>
  );
}
