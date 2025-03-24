"use client";

import IntroSection from "../../components/sections/introSection";
import ProjectsSection from "../../components/sections/projectSection";

const IntroProjectsWrapper = () => {
  return (
    <section className="relative">
      {/* 부모 단일 그라데이션 오버레이 */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 48%, rgba(0,0,0,0.7) 48%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      {/* 자식 섹션 */}
      <IntroSection />
      <ProjectsSection />
    </section>
  );
};

export default IntroProjectsWrapper;
