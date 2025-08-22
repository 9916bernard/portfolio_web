"use client";

import React, { useState, useEffect } from 'react';
import { FaHome, FaBriefcase, FaTrophy, FaEnvelope } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

interface MobileNavbarProps {
  activeSection: string;
}

const MobileNavbar = ({ activeSection }: MobileNavbarProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'mobile-intro', label: 'Home', icon: FaHome },
    { id: 'mobile-projects', label: 'Work', icon: MdWork },
    { id: 'mobile-experience', label: 'Experience', icon: FaBriefcase },
    { id: 'mobile-awards', label: 'Awards', icon: FaTrophy },
    { id: 'mobile-contact', label: 'Contact', icon: FaEnvelope },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-yellow-400 bg-gray-800'
                  : 'text-gray-400 hover:text-yellow-400'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavbar;
