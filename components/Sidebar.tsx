"use client";

import React, { useState, useEffect } from 'react';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const offsetFromBottom = 450;
  const [barPosition, setBarPosition] = useState(0);

  useEffect(() => {
    setBarPosition(window.innerHeight - offsetFromBottom);

    const handleScroll = () => {
      const newPosition = window.innerHeight - offsetFromBottom + window.scrollY;
      setBarPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetFromBottom]);

  const getLinkClass = (sectionId: string) =>
    `border border-white px-4 py-2 w-28 text-center rounded transition ${
      activeSection === sectionId
        ? 'bg-blue-500 text-white shadow-lg'
        : 'text-white hover:bg-white hover:text-black'
    }`;

  return (
    <div
      className="absolute right-0 transition-all duration-700 ease-out flex flex-col space-y-4 items-center z-50"
      style={{ top: `${barPosition}px` }}
    >
      <a href="#intro" className={getLinkClass('intro')}>
        Intro
      </a>
      <a href="#projects" className={getLinkClass('projects')}>
        Projects
      </a>
      <a href="#experiences" className={getLinkClass('experiences')}>
        Experiences
      </a>
      <a href="#awards" className={getLinkClass('awards')}>
        Awards
      </a>
      <a href="#contact" className={getLinkClass('contact')}>
        Contact
      </a>
    </div>
  );
};

export default Sidebar;
