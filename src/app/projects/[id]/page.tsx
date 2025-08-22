"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AVTContent from "../../../../components/projects/AVTContents";
import PLOContent from "../../../../components/projects/PLOContents";
import NotFoundContent from "../../../../components/projects/NotFoundContents";
import COSContent from "../../../../components/projects/COSContents";
import SYMContent from "../../../../components/projects/SYMContents";
import MobileAVTContent from "../../../../components/projects/mobile/AVTContents";
import MobilePLOContent from "../../../../components/projects/mobile/PLOContents";
import MobileNotFoundContent from "../../../../components/projects/mobile/NotFoundContents";
import MobileCOSContent from "../../../../components/projects/mobile/COSContents";
import MobileSYMContent from "../../../../components/projects/mobile/SYMContents";
import LoadingScreen from "../../../../components/LoadingScreen";
import { useResourceLoader } from "../../../../hooks/useResourceLoader";

export default function ProjectPage() {
  const { id } = useParams();
  const [isClient, setIsClient] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { progress } = useResourceLoader({
    minLoadingTime: 1500,    // 처음 방문 시 1.5초
    shortLoadingTime: 500,   // 재방문 시 0.5초
    onComplete: () => {
      setShowContent(true);
    }
  });

  useEffect(() => {
    setIsClient(true);
    
    // 모바일 디바이스 감지
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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

  const content = (() => {
    if (isMobile) {
      switch (id) {
        case "avt":
          return <MobileAVTContent />;
        case "plo":
          return <MobilePLOContent />;
        case "cosmic":
          return <MobileCOSContent />;
        case "symptomsense":
          return <MobileSYMContent />;
        default:
          return <MobileNotFoundContent />;
      }
    } else {
      switch (id) {
        case "avt":
          return <AVTContent />;
        case "plo":
          return <PLOContent />;
        case "cosmic":
          return <COSContent />;
        case "symptomsense":
          return <SYMContent/>;
        default:
          return <NotFoundContent />;
      }
    }
  })();

  return (
    <div className="bg-black min-h-screen">
      {content}
    </div>
  );
}
