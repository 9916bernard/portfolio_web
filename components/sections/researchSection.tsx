"use client";

import React from "react";
import StarField from "../StarField";

// Research 데이터
const publications = [
  {
    authors: "Sungheon Lee, M. Singh, D. Singh",
    title: "Traceable and Immutable LLM-Generated Contents through a Blockchain Framework",
    venue: "IET Blockchain",
    date: "Nov 2025",
    status: "under review",
  },
  {
    authors: "M. Singh, Sungheon Lee",
    title: "Local vs. Global Blockchain-Backed Zero Trust Framework for UAV Data Security",
    venue: "37th IEEE Intelligent Vehicles Symposium (IV 2026)",
    date: "Nov 2025",
    status: "under review",
  },
];

const researchExperience = [
  {
    title: "EPXcoin: Blockchain-enabled Electricity Exchange Mechanism",
    role: "Undergraduate Researcher (Methodology Architect, MVP Developer)",
    institution: "Penn State University",
    period: "Aug 2025 – Dec 2025",
  },
  {
    title: "Multi-Party Computation (MPC)",
    role: "Undergraduate Researcher",
    institution: "Penn State University",
    period: "Spring 2026 (Upcoming)",
    isUpcoming: true,
  },
];

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="relative min-h-[100vh] p-10 bg-gradient-to-b from-gray-900 via-gray-800 to-slate-700 text-white overflow-hidden"
    >
      <StarField count={60} color="mixed" speed={0.7} />
      <div className="py-12 relative z-10">
        <h2 className="text-5xl font-bold text-yellow-400 text-center mb-10">
          Research
        </h2>

        {/* Publications Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-yellow-300 mb-6">
            Peer-Reviewed Conference/Journal Papers
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-r from-yellow-400 to-yellow-200 p-1 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm mb-2">{pub.authors}</p>
                      <h4 className="text-xl font-bold text-yellow-300 mb-2">
                        &quot;{pub.title}&quot;
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Submitted to <span className="text-yellow-200 font-semibold">{pub.venue}</span>, {pub.date},{" "}
                        <span className="italic">{pub.status}</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Experience Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-yellow-300 mb-6">
            Research Experience
          </h3>
          <div className="space-y-6">
            {researchExperience.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  exp.isUpcoming
                    ? "bg-gray-800"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-200"
                } p-1 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300`}
              >
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold text-yellow-300">
                          {exp.title}
                        </h4>
                        {exp.isUpcoming && (
                          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full font-semibold">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-base mb-1">{exp.role}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span>{exp.institution}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
