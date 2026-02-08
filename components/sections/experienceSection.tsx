"use client";

import React from "react";
import { motion } from "framer-motion";
import StarField from "../StarField";

const experiences = [
  {
    company: "RadSquared.ai",
    position: "AI Engineer Intern",
    location: "PA, United States",
    duration: "Jan 2026 – Present",
    details: [
      "Developing an end-to-end pipeline to build domain-specific Small Language Models (SLMs) that outperform Large Language Models (LLMs) on specialized tasks.",
    ],
  },
  {
    company: "Yanadoo",
    position: "Software Development Intern",
    location: "Seoul, South Korea",
    duration: "May 2025 – July 2025",
    details: [
      "Developed a data parsing, monitoring, and testing application for Yafit indoor cycle game compatibility testing.",
      "Created an onboarding chatbot with email reply capabilities and Google Sheets integration for bug reporting.",
    ],
  },
  {
    company: "Maf Games",
    position: "Game Development Intern",
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

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="relative min-h-[100vh] p-10 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <StarField count={70} color="yellow" speed={0.5} />
      <h2 className="text-5xl font-bold text-yellow-400 text-center relative z-10 mb-16">
        Work Experience
      </h2>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Yellow vertical line */}
        <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-yellow-400" />

        {experiences.map((exp, index) => {
          // Extract year from duration
          const year = exp.duration.split('–')[0].trim().split(' ').pop();

          return (
            <div key={index} className="relative flex items-start mb-16">
              {/* Year circle on the line */}
              <div className="absolute left-12 -translate-x-1/2 flex flex-col items-center">
                {/* Year label positioned above with more space */}
                <span className="text-yellow-400 font-bold text-xl mb-3 bg-gradient-to-b from-black to-gray-900 px-2 py-1 rounded">
                  {year}
                </span>
                <div className="w-6 h-6 rounded-full bg-yellow-400 border-4 border-gray-900 shadow-lg shadow-yellow-400/30" />
              </div>

              {/* Card to the right */}
              <div className="ml-28 flex-1">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-gradient-to-br from-gray-900/50 via-gray-900/30 to-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold">
                    {exp.position} <span className="text-yellow-400">@ {exp.company}</span>
                  </h3>
                  <p className="text-gray-300 mt-1">
                    {exp.location} | {exp.duration}
                  </p>
                  <ul className="list-disc ml-5 mt-4 text-gray-400 space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="hover:text-gray-300 transition-colors duration-200">{detail}</li>
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

export default ExperiencesSection;
