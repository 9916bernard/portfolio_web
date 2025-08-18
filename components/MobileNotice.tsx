"use client";

import { useEffect, useState } from "react";

const MobileNotice = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 모바일 공사중 알림 제거하고 항상 콘텐츠를 표시합니다
  return <>{children}</>;
};

export default MobileNotice;
