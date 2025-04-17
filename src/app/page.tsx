"use client";

import './globals.css';
import React from 'react';
import Sidebar from "../../components/Sidebar";
import SectionWrapper from "../../components/sections/sectionWrapper";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function Home() {
  const sectionIds = ['intro', 'projects', 'experiences', 'awards', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="relative w-full">
      <Sidebar activeSection={activeSection} />
      <SectionWrapper />
    </div>
  );
}
