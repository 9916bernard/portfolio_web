"use client";

import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  blinkSpeed: number;
  delay: number; // 반짝임 지연 추가
}

interface StarFieldProps {
  count?: number;
  depth?: number;
  speed?: number;
  color?: string;
  className?: string;
}

const StarField: React.FC<StarFieldProps> = ({
  count = 100,
  depth = 3,
  speed = 1,
  color = "yellow",
  className = "",
}) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // 별들 초기화 - 더 천천히 반짝이고 밝기 낮춤
    const initialStars: Star[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.15 + 0.05, // 크기 살짝 줄임
      opacity: Math.random() * 0.4 + 0.2, // 밝기 낮춤 (0.2~0.6)
      blinkSpeed: Math.random() * 0.003 + 0.001, // 반짝임 속도 크게 감소
      delay: Math.random() * 100, // 각 별마다 다른 시작점을 가지도록
    }));
    setStars(initialStars);

    // 애니메이션 프레임 - 더 느리게 설정
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.05 * speed); // 속도 감소
    }, 100); // 인터벌 시간 증가

    return () => clearInterval(interval);
  }, [count, speed]);

  const getStarColor = (depth: number, opacity: number) => {
    switch (color) {
      case "blue":
        return `rgba(100, 150, 255, ${opacity * 0.8})`; // 밝기 20% 감소
      case "purple":
        return `rgba(180, 100, 255, ${opacity * 0.8})`; // 밝기 20% 감소
      case "mixed":
        const hue = Math.floor(Math.random() * 360);
        return `hsla(${hue}, 80%, 60%, ${opacity * 0.8})`; // 채도와 밝기 감소
      case "yellow":
      default:
        return `rgba(255, 220, 100, ${opacity * 0.8})`; // 밝기 20% 감소
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => {
        // 사인파에 지연 추가하고 진폭 줄임 (0.3으로)
        const opacity = Math.abs(Math.sin((time + star.delay) * star.blinkSpeed) * 0.3) + star.opacity;
        return (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}rem`,
              height: `${star.size}rem`,
              backgroundColor: getStarColor(depth, opacity),
              boxShadow: `0 0 ${star.size * 1.5}px ${getStarColor(depth, opacity * 0.6)}`, // 그림자 크기 감소 및 투명도 증가
              transition: "opacity 2s ease-in-out", // 트랜지션 시간 증가
              opacity,
              zIndex: 0,
            }}
          />
        );
      })}
    </div>
  );
};

export default StarField;