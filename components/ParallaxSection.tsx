"use client";

import React, { useState, useEffect } from 'react';

interface ParallaxSectionProps {
  id: string;
  backgroundImage: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ id, backgroundImage, children }) => {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id={id} className="min-h-screen relative overflow-hidden">
      {/* 패럴랙스 배경 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset * 0.3}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      ></div>
      {/* 컨텐츠 영역 */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
