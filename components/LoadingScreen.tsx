"use client";

import React, { useEffect, useState, useCallback } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  progress?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete, 
  progress: externalProgress 
}) => {
  const [internalProgress, setInternalProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState("Initializing...");

  const progress = externalProgress ?? internalProgress;

  const handleLoadingComplete = useCallback(() => {
    setIsVisible(false);
    setTimeout(onLoadingComplete, 300);
  }, [onLoadingComplete]);

  useEffect(() => {
    if (externalProgress !== undefined) {
      // 외부 진행률이 제공되면 그것을 사용
      setInternalProgress(externalProgress);
      
      // 진행률에 따른 로딩 텍스트 업데이트
      if (externalProgress < 30) {
        setLoadingText("Initializing...");
      } else if (externalProgress < 60) {
        setLoadingText("Loading assets...");
      } else if (externalProgress < 90) {
        setLoadingText("Preparing content...");
      } else {
        setLoadingText("Almost ready...");
      }

      // 100%에 도달하면 페이드아웃
      if (externalProgress >= 100) {
        setTimeout(handleLoadingComplete, 200);
      }
    } else {
      // 내부 진행률 시뮬레이션 (fallback)
      const interval = setInterval(() => {
        setInternalProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [externalProgress, handleLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-300">
      <div className="text-center">
        {/* 로고 */}
        <div className="mb-8">
          <img 
            src="/sbl-logo.svg" 
            alt="SBL Logo" 
            className="w-20 h-20 mx-auto mb-4 animate-pulse"
            loading="eager"
          />
          <h1 className="text-xl font-bold text-white mb-2">Sungheon Bernard Lee</h1>
          <p className="text-gray-400 text-sm">Portfolio</p>
        </div>

        {/* 로딩 바 */}
        <div className="w-56 h-1.5 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* 로딩 텍스트 */}
        <div className="text-gray-400 text-sm mb-2">
          {loadingText}
        </div>

        {/* 진행률 표시 */}
        <div className="text-white text-xs">
          {Math.round(progress)}%
        </div>

        {/* 간단한 애니메이션 요소 */}
        <div className="mt-6 flex justify-center space-x-1.5">
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
