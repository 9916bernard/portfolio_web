"use client";

import React from "react";
import StarField from "../StarField";

// Awards 데이터
const awards = [
  {
    title: "Yanadoo chatbot contest | 2nd place",
    highlights: [
      "Created onboarding email chatbot utilizing n8n",
      "Integrated OpenAI LLM, Supabase database, and Google Cloud services",
      "Implemented vector search and email automation for seamless user onboarding",
    ],
  },
  {
    title: "DataFest 2024 | Best in Show - Team Leader",
    link: "https://datafest.psu.edu/_2024/",
    highlights: [
      "Analyzed large-scale 'CourseKata' datasets to identify key patterns for improved educational strategies.",
      "Adapted to unexpected results by refining hypotheses, ensuring actionable insights for better learning outcomes.",
    ],
  },
  {
    title: "Dean's List (6/7 Semesters)",
    highlights: ["Recognized for outstanding academic performance at Penn State."],
  },
  {
    title: "2026 Spring Hackathon",
    isComingSoon: true,
    highlights: [
      "Preparing to participate in a major hackathon event in Spring 2026.",
      "Stay tuned for updates on new ideas and innovative solutions!",
    ],
  },
];

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="relative min-h-[100vh] p-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <StarField count={90} color="mixed" speed={0.7} />
      <div className="py-12 relative z-10">
        <h2 className="text-5xl font-bold text-yellow-400 text-center mb-10">
          Awards &amp; Honors
        </h2>

        {/* 단일 열로 나열 */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => {
            const isDeansList = award.title.includes("Dean");
            return isDeansList ? (
              // Dean's List는 외부 노란 테두리 없이
              <div
                key={index}
                className="relative rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-yellow-300">
                      {award.title}
                    </h3>
                  </div>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-yellow-300 text-gray-800 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-200 transition-colors duration-300 mb-3"
                    >
                      Learn More
                    </a>
                  )}
                  <ul className="list-disc list-inside text-gray-200 text-sm leading-relaxed">
                    {award.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // 나머지 항목은 노란 그라데이션 테두리 적용
              <div
                key={index}
                className="relative bg-gradient-to-r from-yellow-400 to-yellow-200 p-1 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-yellow-300">
                      {award.title}
                    </h3>
                    {award.isComingSoon && (
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-semibold">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-yellow-300 text-gray-800 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-200 transition-colors duration-300 mb-3"
                    >
                      Learn More
                    </a>
                  )}
                  <ul className="list-disc list-inside text-gray-200 text-sm leading-relaxed">
                    {award.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
