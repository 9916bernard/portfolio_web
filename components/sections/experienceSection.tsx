"use client";

import React from "react";

const experiences = [
  {
    title: "QA Game Tester Intern",
    company: "Gravity Game Tech",
    period: "Jan 2024 - Feb 2024",
    details: [
      "Collaborated with game development teams to identify and report 50+ bugs",
      "Verified game functionality across multiple platforms (iOS, Android)",
      "Provided detailed documentation of testing processes",
      "Participated in daily stand-up meetings to discuss testing progress",
    ],
  },
  {
    title: "Game Developer Intern",
    company: "LL-Lab & Neowiz Lion Hearts",
    period: "Jun 2023 - Aug 2023",
    details: [
      "Implemented enemy AI patterns, UI elements using C# and Unity3D",
      "Participated in weekly team meetings and game feedback sessions",
      "Gained practical experience in game development lifecycle",
      "Optimized game performance for mobile platforms",
    ],
  },
];

const ExperiencesSection = () => {
  return (
    <section
      id="experiences"
      className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white p-4 md:p-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 md:mb-8 text-center">
        Professional Experience
      </h2>

      <div className="max-w-4xl w-full space-y-8 mx-auto">
        {/* 경험들 목록 */}
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-yellow-400 pl-3 md:pl-5 relative">
            <h3 className="text-xl md:text-2xl font-bold">
              {exp.title}{" "}
              <span className="text-yellow-400">@ {exp.company}</span>
            </h3>
            <p className="text-gray-300 text-sm md:text-base">{exp.period}</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm md:text-base space-y-1">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
        {/* 인턴십 구하는 블록 */}
        <div className="border-l-4 border-yellow-400 pl-3 md:pl-5 relative">
          <h3 className="text-xl md:text-2xl font-bold">
            2025 Summer, Fall Internship{" "}
            <span className="text-yellow-400">@ Your Company</span>
          </h3>
          <p className="text-gray-300 text-sm md:text-base">Preferred Location: USA or Korea | May 2025 - Dec 2025</p>
          <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm md:text-base space-y-1">
            <li>Actively seeking a Software Engineering Intern role</li>
            <li>Eager to gain more experience and further enhance my skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
