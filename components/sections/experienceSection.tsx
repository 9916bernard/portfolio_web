"use client";

import React from "react";
import StarField from "../StarField";

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

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="relative min-h-[100vh] p-10 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <StarField count={70} color="yellow" speed={0.5} />
      <h2 className="text-5xl font-bold text-yellow-400 text-center relative z-10">Work Experience</h2>
      <div className="mt-10 space-y-10 max-w-3xl mx-auto relative z-10">
        {experiences.map((exp, index) => {
          // Extract year from duration
          const year = exp.duration.split('–')[0].trim().split(' ').pop();
          
          return (
            <div key={index} className="relative">
              {/* Timeline bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-3 h-3 bg-yellow-400 rounded-full transform -translate-x-1"></div>
              {/* Year label */}
              <div className="absolute -left-12 top-5 text-xs text-white font-medium">
                {year}
              </div>
              
              <div className="border-l-4 border-yellow-400 pl-8 relative">
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperiencesSection;
