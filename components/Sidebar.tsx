"use client";

import React, { useEffect, useState } from "react";

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const [barPosition, setBarPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    setIsClient(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateBarPosition = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // 리모컨의 총 높이 (버튼 5개 * 높이 + 간격)
      const sidebarHeight = 5 * 48 + 4 * 16; // 약 304px

      // 기존 위치 유지 (오른쪽 위): 상단에서 80px 아래
      let newPosition = scrollY + 80;

      // 하단 잘림 방지: 리모컨이 화면 밖으로 나가면 위로 올림
      const maxPosition = scrollY + viewportHeight - sidebarHeight - 20;
      if (newPosition > maxPosition) {
        newPosition = maxPosition;
      }

      // 상단 잘림 방지: 최소 20px 여백
      const minPosition = scrollY + 20;
      if (newPosition < minPosition) {
        newPosition = minPosition;
      }

      setBarPosition(newPosition);
    };

    // 초기 상태 설정
    handleResize();
    updateBarPosition();

    window.addEventListener("scroll", updateBarPosition);
    window.addEventListener("resize", () => {
      handleResize();
      updateBarPosition();
    });

    // 초기 애니메이션: 2번 펄스 후 사라짐 (총 약 3초)
    const animationTimer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", updateBarPosition);
      window.removeEventListener("resize", handleResize);
      clearTimeout(animationTimer);
    };
  }, []);

  const handleLinkClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isClient) return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // 모바일에서 메뉴 클릭 시 메뉴 닫기
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }
  };

  const getLinkClass = (sectionId: string) =>
    `border border-white px-5 py-3 w-full md:w-44 text-center rounded transition font-bold text-base ${
      activeSection === sectionId
        ? "bg-yellow-500 text-white shadow-lg"
        : "text-white hover:bg-white hover:text-black"
    }`;

  // 모바일 메뉴 토글 버튼
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // SSR 중에는 기본 상태로 렌더링
  if (!isClient) {
    return (
      <div className="fixed transition-all duration-300 ease-out flex flex-col space-y-3 items-center z-50 absolute right-10 opacity-20 hover:opacity-100 top-20">
        <a href="#intro" className={getLinkClass("intro")}>
          Intro
        </a>
        <a href="#projects" className={getLinkClass("projects")}>
          Projects
        </a>
        <a href="#experiences" className={getLinkClass("experiences")}>
          Experiences
        </a>
        <a href="#research" className={getLinkClass("research")}>
          Research
        </a>
        <a href="#contact" className={getLinkClass("contact")}>
          Contact
        </a>
      </div>
    );
  }

  return (
    <>
      {/* 모바일 메뉴 버튼 */}
      {isMobile && (
        <button 
          onClick={toggleMenu}
          className="fixed top-4 right-20 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      )}

      {/* 사이드바 메뉴 */}
      <div
        className={`
          fixed
          transition-all
          duration-300
          ease-out
          flex
          flex-col
          space-y-3
          items-center
          z-50
          ${isMobile
            ? `top-16 right-4 w-[180px] p-4 bg-black/80 rounded-lg backdrop-blur-sm ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`
            : `absolute right-10 ${showInitialAnimation ? 'animate-pulse-glow' : 'opacity-20 hover:opacity-100'}`
          }
        `}
        style={!isMobile ? { top: `${barPosition}px` } : {}}
      >
        <a href="#intro" className={getLinkClass("intro")} onClick={(e) => handleLinkClick("intro", e)}>
          Intro
        </a>
        <a href="#projects" className={getLinkClass("projects")} onClick={(e) => handleLinkClick("projects", e)}>
          Projects
        </a>
        <a href="#experiences" className={getLinkClass("experiences")} onClick={(e) => handleLinkClick("experiences", e)}>
          Experiences
        </a>
        <a href="#research" className={getLinkClass("research")} onClick={(e) => handleLinkClick("research", e)}>
          Research
        </a>
        <a href="#contact" className={getLinkClass("contact")} onClick={(e) => handleLinkClick("contact", e)}>
          Contact
        </a>
      </div>
    </>
  );
};

export default Sidebar;
