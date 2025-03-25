"use client";

import React, { useEffect, useState } from "react";

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const offsetFromBottom = 900;
  const [barPosition, setBarPosition] = useState(0);

  useEffect(() => {
    setBarPosition(window.innerHeight - offsetFromBottom);

    const handleScroll = () => {
      const newPosition = window.innerHeight - offsetFromBottom + window.scrollY;
      setBarPosition(newPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetFromBottom]);

  const handleLinkClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkClass = (sectionId: string) =>
    `border border-white px-4 py-3 w-40 text-center rounded transition font-bold ${
      activeSection === sectionId
        ? "bg-yellow-500 text-white shadow-lg"
        : "text-white hover:bg-white hover:text-black"
    }`;

  return (
    <div
      className="
        absolute 
        right-10 
        transition-all 
        duration-700 
        ease-out 
        flex 
        flex-col 
        space-y-4 
        items-center 
        z-50 
        opacity-20
        hover:opacity-100
      "
      style={{ top: `${barPosition}px` }}
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
  );
};

export default Sidebar;
