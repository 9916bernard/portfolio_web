"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AVTContent from "../../../../components/projects/AVTContents";
import PLOContent from "../../../../components/projects/PLOContents";
import NotFoundContent from "../../../../components/projects/NotFoundContents";
import COSContent from "../../../../components/projects/COSContents";
import SYMContent from "../../../../components/projects/SYMContents";
import LoadingScreen from "../../../../components/LoadingScreen";
import { useResourceLoader } from "../../../../hooks/useResourceLoader";

export default function ProjectPage() {
  const { id } = useParams();
  const [isClient, setIsClient] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const { progress } = useResourceLoader({
    minLoadingTime: 1500,    // 처음 방문 시 1.5초
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

  const content = (() => {
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
  })();

  return (
    <div className="bg-black min-h-screen">
      {content}
    </div>
  );
}
