"use client";

import { useEffect, useState } from "react";

const MobileNotice = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 창의 너비가 768px 미만이면 모바일로 판단
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Mobile version under construction</h1>
        <p className="text-xl">Please use desktop to view the full experience.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileNotice;
