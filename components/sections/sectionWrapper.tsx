"use client";

import IntroSection from "../../components/sections/introSection";
import ProjectsSection from "../../components/sections/projectSection";
import ExperiencesSection from "../../components/sections/experienceSection";
import AwardsSection from "../../components/sections/awardSection";
import ContactSection from "../../components/sections/contactSection";

const SectionWrapper = () => {
    return (
        <>
            <IntroSection />
            <ProjectsSection />
            <ExperiencesSection />
            <AwardsSection />
            <ContactSection />
        </>
    );
};

export default SectionWrapper;
