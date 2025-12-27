"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Yanadoo",
    position: "Developer Intern",
    location: "Seoul, South Korea",
    duration: "May 2025 – July 2025",
    details: [
      "Developed a data parsing, monitoring, and testing application for Yafit indoor cycle game compatibility testing.",
      "Created an onboarding chatbot with email reply capabilities and Google Sheets integration for bug reporting.",
    ],
  },
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
    company: "Seongnam Court (Military Service)",
    position: "Administrative Officer",
    location: "Seongnam, South Korea",
    duration: "March 2021 – Jan 2023",
    details: [
      "Automated document creation with VBA, reducing manual work by 30-40%.",
      "Completed 4-week basic training, enhancing teamwork and discipline.",
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
];

const MobileExperienceSection = () => {
  return (
    <section
      id="mobile-experience"
      className="relative min-h-screen p-4 pb-20 bg-black text-white"
    >
      {/* 섹션 타이틀 */}
      <div className="w-full text-center mb-8 mt-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">Experience</h1>
      </div>

      {/* Timeline layout */}
      <div className="relative w-full">
        {/* Yellow vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-yellow-400" />

        {experiences.map((exp, index) => {
          // Extract year from duration
          const year = exp.duration.split('–')[0].trim().split(' ').pop();

          return (
            <div key={index} className="relative flex items-start mb-10">
              {/* Year circle on the line */}
              <div className="absolute left-6 -translate-x-1/2 flex flex-col items-center">
                {/* Year label positioned above with background */}
                <span className="text-yellow-400 font-bold text-base mb-2 bg-black px-2 py-0.5 rounded shadow-md">
                  {year}
                </span>
                <div className="w-5 h-5 rounded-full bg-yellow-400 border-4 border-black shadow-lg shadow-yellow-400/30" />
              </div>

              {/* Card to the right */}
              <div className="ml-14 flex-1">
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700 hover:border-yellow-400/50 shadow-xl"
                >
                  {/* 회사명 */}
                  <h3 className="text-base font-bold text-white mb-1">{exp.company}</h3>

                  {/* 직책 */}
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">{exp.position}</h4>

                  {/* 위치 & 기간 */}
                  <p className="text-gray-300 text-xs mb-3">
                    {exp.location} | {exp.duration}
                  </p>

                  {/* 상세 내용 */}
                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-yellow-400 mr-2 mt-0.5 font-bold">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileExperienceSection;
