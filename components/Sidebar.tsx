"use client";

import React, { useEffect, useState } from "react";

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const offsetFromBottom = 900;
  const [barPosition, setBarPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 초기 상태 설정
    handleResize();
    setBarPosition(window.innerHeight - offsetFromBottom);

    const handleScroll = () => {
      const newPosition = window.innerHeight - offsetFromBottom + window.scrollY;
      setBarPosition(newPosition);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [offsetFromBottom]);

  const handleLinkClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
    `border border-white px-4 py-3 w-full md:w-40 text-center rounded transition font-bold ${
      activeSection === sectionId
        ? "bg-yellow-500 text-white shadow-lg"
        : "text-white hover:bg-white hover:text-black"
    }`;

  // 모바일 메뉴 토글 버튼
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          space-y-4 
          items-center 
          z-50 
          ${isMobile 
            ? `top-16 right-4 w-[180px] p-4 bg-black/80 rounded-lg backdrop-blur-sm ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}` 
            : 'absolute right-10 opacity-20 hover:opacity-100'
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
        <a href="#awards" className={getLinkClass("awards")} onClick={(e) => handleLinkClick("awards", e)}>
          Awards
        </a>
        <a href="#contact" className={getLinkClass("contact")} onClick={(e) => handleLinkClick("contact", e)}>
          Contact
        </a>
      </div>
    </>
  );
};

export default Sidebar;
