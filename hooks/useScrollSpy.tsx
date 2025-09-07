import { useState, useEffect, useCallback } from 'react';

export const useScrollSpy = (ids: string[], options?: IntersectionObserverInit): string => {
  const [activeId, setActiveId] = useState<string>('');
  const [isClient, setIsClient] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 스크롤 기반 섹션 감지 함수
  const updateActiveSection = useCallback(() => {
    if (!isClient) return;
    
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;
    
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 각 섹션의 위치 계산
    const sections = elements.map(element => ({
      id: element.id,
      top: element.offsetTop,
      bottom: element.offsetTop + element.offsetHeight,
      center: element.offsetTop + element.offsetHeight / 2
    }));
    
    // 현재 뷰포트 중앙에 가장 가까운 섹션 찾기
    const viewportCenter = currentScrollY + windowHeight / 2;
    let closestSection = sections[0];
    let minDistance = Math.abs(sections[0].center - viewportCenter);
    
    for (const section of sections) {
      const distance = Math.abs(section.center - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    }
    
    // 섹션이 뷰포트에 보이는지 확인 (최소 30% 보여야 함)
    const isVisible = closestSection.top < currentScrollY + windowHeight * 0.7 && 
                     closestSection.bottom > currentScrollY + windowHeight * 0.3;
    
    if (isVisible && closestSection.id !== activeId) {
      setActiveId(closestSection.id);
    }
    
    setLastScrollY(currentScrollY);
  }, [ids, isClient, activeId]);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // 초기 상태 설정
    if (ids.length > 0 && !activeId) {
      setActiveId(ids[0]);
    }

    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      updateActiveSection();
    };

    // 초기 실행
    updateActiveSection();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ids, isClient, activeId, updateActiveSection]);

  return activeId;
};
