"use client";

import React from "react";
import StarField from "../StarField";

const experiences = [
  {
    company: "Maf Games",
    position: "Developer Intern",
    location: "Seoul, South Korea",
    duration: "May 2024 – Aug 2024",
    details: [
      "Created a feature-rich single-player game integrating ranking system, Google Ads, and Firebase.",
      "Developed using Unity with C#, focusing on performance optimization.",
    ],
  },
  {
    company: "Naddic Games",
    position: "Quality Assurance Intern",
    location: "Seoul, South Korea",
    duration: "May 2020 – Dec 2020",
    details: [
      "Reduced bugs in 'Closers' by 25% through meticulous QA testing.",
      "Translated Korean to English, ensuring cultural nuances in localization.",
    ],
  },
  {
    company: "Seongnam Court (Military Service)",
    position: "Administrative Officer",
    location: "Seongnam, South Korea",
    duration: "March 2021 – Jan 2023",
    details: [
      "Automated document creation with VBA, reducing manual work by 30-40%.",
      "Completed 4-week basic training, enhancing teamwork and discipline.",
    ],
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="relative min-h-[100vh] p-10 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <StarField count={70} color="yellow" speed={0.5} />
      <h2 className="text-5xl font-bold text-yellow-400 text-center relative z-10">Work Experience</h2>
      <div className="mt-10 space-y-10 max-w-3xl mx-auto relative z-10">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-yellow-400 pl-5 relative">
            <h3 className="text-2xl font-bold">
              {exp.position} <span className="text-yellow-400">@ {exp.company}</span>
            </h3>
            <p className="text-gray-300">
              {exp.location} | {exp.duration}
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-400">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
        {/* 인턴십 구하는 블록 */}
        <div className="border-l-4 border-yellow-400 pl-5 relative">
          <h3 className="text-2xl font-bold">
            2025 Summer, Fall Internship{" "}
            <span className="text-yellow-400">@ Yanadoo</span>
          </h3>
          <p className="text-gray-300"> Location: Korea | May 2025 - Dec 2025</p>
          <ul className="list-disc ml-5 mt-2 text-gray-300">
            <li>Will be updated soon</li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
