"use client";

import './globals.css';
import React from 'react';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function Home() {
  const sectionIds = ['intro', 'projects', 'experiences', 'awards', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  console.log('activeSection:', activeSection);

  return (
    <div className="relative w-full">
      <Sidebar activeSection={activeSection} />
      <div className="flex flex-col">
        <Navbar />
        <Section id="intro" title="Intro" content="Welcome to my Portfolio!" />
        <Section id="projects" title="Projects" content="Here are my projects." />
        <Section id="experiences" title="Experiences" content="My work experiences." />
        <Section id="awards" title="Awards" content="Achievements and awards." />
        <Section id="contact" title="Contact" content="Let's get in touch!" />
      </div>
    </div>
  );
}
