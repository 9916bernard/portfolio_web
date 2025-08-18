import { useState, useEffect, useCallback } from 'react';

export const useScrollSpy = (ids: string[], options?: IntersectionObserverInit): string => {
  const [activeId, setActiveId] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  // useCallback을 사용하여 함수 인스턴스 유지
  const createObserver = useCallback(() => {
    if (!isClient) return [];
    
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.5, // 50% 보이면 활성화
      ...options,
    };

    const observers: IntersectionObserver[] = [];
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);
    
    if (elements.length === 0) return [];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setActiveId(id);
            }
          }
        });
      },
      observerOptions
    );
    
    elements.forEach(element => {
      if (element) observer.observe(element);
    });
    
    observers.push(observer);
    return observers;
  }, [ids, options, isClient]);

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

    const observers = createObserver();
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [ids, activeId, createObserver, isClient]);

  return activeId;
};
