"use client";

import { useEffect, useState, useCallback, useRef } from 'react';

interface ResourceLoaderOptions {
  minLoadingTime?: number; // 최소 로딩 시간 (ms)
  shortLoadingTime?: number; // 재방문 시 로딩 시간 (ms)
  onComplete?: () => void;
}

export const useResourceLoader = (options: ResourceLoaderOptions = {}) => {
  const { 
    minLoadingTime = 1500, 
    shortLoadingTime = 500,
    onComplete 
  } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const mountedRef = useRef(true);
  const startTimeRef = useRef(Date.now());

  const updateProgress = useCallback((newProgress: number) => {
    if (mountedRef.current) {
      setProgress(prev => Math.min(prev + newProgress, 90));
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    startTimeRef.current = Date.now();

    // 세션 스토리지에서 방문 기록 확인
    const hasVisited = sessionStorage.getItem('portfolio_visited');
    const actualLoadingTime = hasVisited ? shortLoadingTime : minLoadingTime;
    
    // 방문 기록 저장
    sessionStorage.setItem('portfolio_visited', 'true');

    const checkResources = async () => {
      try {
        // DOM이 완전히 로드될 때까지 대기
        if (document.readyState !== 'complete') {
          await new Promise(resolve => {
            window.addEventListener('load', resolve, { once: true });
          });
        }

        // 진행률 업데이트
        updateProgress(20);

        // 이미지 로딩 확인 (최대 10개만 체크하여 성능 최적화)
        const images = Array.from(document.querySelectorAll('img')).slice(0, 10);
        if (images.length > 0) {
          const imagePromises = images.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
            });
          });

          await Promise.all(imagePromises);
          updateProgress(30);
        }

        // 비디오 로딩 확인 (최대 5개만 체크)
        const videos = Array.from(document.querySelectorAll('video')).slice(0, 5);
        if (videos.length > 0) {
          const videoPromises = videos.map(video => {
            return new Promise(resolve => {
              video.addEventListener('loadeddata', resolve, { once: true });
              video.addEventListener('error', resolve, { once: true });
            });
          });

          await Promise.all(videoPromises);
          updateProgress(20);
        }

        // 폰트 로딩 확인
        await document.fonts.ready;
        updateProgress(20);

        // 최소 로딩 시간 보장 (방문 기록에 따라 다름)
        const elapsedTime = Date.now() - startTimeRef.current;
        if (elapsedTime < actualLoadingTime) {
          await new Promise(resolve => 
            setTimeout(resolve, actualLoadingTime - elapsedTime)
          );
        }

        if (mountedRef.current) {
          setProgress(100);
          setIsLoading(false);
          onComplete?.();
        }
      } catch (error) {
        console.warn('Resource loading error:', error);
        if (mountedRef.current) {
          setProgress(100);
          setIsLoading(false);
          onComplete?.();
        }
      }
    };

    // 진행률 시뮬레이션 (더 부드럽게)
    const progressInterval = setInterval(() => {
      if (mountedRef.current && progress < 90) {
        updateProgress(Math.random() * 5 + 2); // 2-7%씩 증가
      }
    }, 150);

    checkResources();

    return () => {
      mountedRef.current = false;
      clearInterval(progressInterval);
    };
  }, [minLoadingTime, shortLoadingTime, onComplete, updateProgress]);

  return { isLoading, progress };
};
