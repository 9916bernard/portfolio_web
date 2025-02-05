import { useState, useEffect } from 'react';

export const useScrollSpy = (ids: string[], options?: IntersectionObserverInit): string => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.5, // 25% 보이면 활성화
      ...options,
    };

    const observers: IntersectionObserver[] = [];
    ids.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log(`Section ${id} intersecting: ratio ${entry.intersectionRatio}`);
            setActiveId(id);
          }
        },
        observerOptions
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [ids, options]);

  return activeId;
};
