"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const MobileNotice = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // 창의 너비가 768px 미만이면 모바일로 판단
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 초기 체크
    checkMobile();
    
    // 리사이즈 이벤트에 대응
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile && showOverlay) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-6">
        <h1 className="text-3xl font-bold mb-4">Mobile Optimization In Progress</h1>
        <p className="text-xl mb-6">This site is best viewed on desktop for now.</p>
        <p className="text-sm mb-8">We're working on a better mobile experience!</p>
        
        <button 
          onClick={() => setShowOverlay(false)}
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition"
        >
          Continue Anyway
        </button>
      </div>
    );
  }

  // 모바일에서도 계속하기를 선택했거나 데스크톱인 경우 정상 콘텐츠 표시
  return <>{children}</>;
};

export default MobileNotice;
