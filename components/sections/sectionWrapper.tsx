"use client";

import IntroProjectsWrapper from "./IntroProjectsWrapper";
import ExperiencesSection from "../../components/sections/experienceSection";
import ResearchSection from "../../components/sections/researchSection";
import ContactSection from "../../components/sections/contactSection";

const SectionWrapper = () => {
  return (
    <>
      {/* Intro + Projects를 하나로 묶은 Wrapper */}
      <IntroProjectsWrapper />

      {/* 나머지 섹션 */}
      <ExperiencesSection />
      <ResearchSection />
      <ContactSection />
    </>
  );
};

export default SectionWrapper;
