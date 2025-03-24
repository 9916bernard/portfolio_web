"use client";

import IntroProjectsWrapper from "./IntroProjectsWrapper";
import ExperiencesSection from "../../components/sections/experienceSection";
import AwardsSection from "../../components/sections/awardSection";
import ContactSection from "../../components/sections/contactSection";

const SectionWrapper = () => {
  return (
    <>
      {/* Intro + Projects를 하나로 묶은 Wrapper */}
      <IntroProjectsWrapper />

      {/* 나머지 섹션 */}
      <ExperiencesSection />
      <AwardsSection />
      <ContactSection />
    </>
  );
};

export default SectionWrapper;
