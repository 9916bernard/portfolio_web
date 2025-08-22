"use client";

import React from "react";

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
      "Utilized Python and Power BI to explore trends in student focus time and the impact of visual content.",
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

const MobileAwardSection = () => {
  return (
    <section
      id="mobile-awards"
      className="relative min-h-screen p-4 pb-20 bg-black text-white"
    >
      {/* 섹션 타이틀 */}
      <div className="w-full text-center mb-8 mt-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">Awards & Honors</h1>
      </div>

      {/* 수상 카드들 */}
      <div className="w-full space-y-6">
        {awards.map((award, index) => {
          const isDeansList = award.title.includes("Dean");
          
          return (
            <div
              key={index}
              className={`bg-gray-900 rounded-lg p-4 border ${
                isDeansList ? 'border-gray-700' : 'border-yellow-400'
              }`}
            >
              {/* 제목 */}
              <h3 className="text-lg font-bold text-yellow-400 mb-3">
                {award.title}
              </h3>
              
              {/* Coming Soon 배지 */}
              {award.isComingSoon && (
                <div className="inline-block bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full mb-3">
                  Coming Soon
                </div>
              )}
              
              {/* 링크 버튼 */}
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black text-xs font-medium px-3 py-2 rounded mb-3 hover:bg-yellow-300 transition-colors"
                >
                  Learn More
                </a>
              )}
              
              {/* 상세 내용 */}
              <ul className="space-y-2">
                {award.highlights.map((point, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-yellow-400 mr-2 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileAwardSection;
