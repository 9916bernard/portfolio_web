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
];

const researchExperience = [
  {
    title: "Privacy-Preserving Machine Learning Lab",
    role: "Undergraduate Researcher",
    institution: "Penn State University",
    period: "Jan 2026 – Present",
    description: [
      "Researching optimization strategies for Multi-Party Computation (MPC) frameworks, with focus on improving activation function approximation for privacy-preserving neural network inference.",
    ],
  },
  {
    title: "Blockchain Data Intelligence Lab",
    role: "Undergraduate Researcher",
    institution: "Penn State University",
    period: "Aug 2025 – Dec 2025",
    description: [
      "UAV Security: Implemented blockchain-based pipeline for no-trust UAV mission operations, developed prototype, and authored technical documentation with security recommendations for Zero Trust Architecture.",
      "EPXcoin: Developed MVP demonstrating blockchain-enabled electricity exchange mechanism, identified structural limitations, and proposed enhancements including IPFS integration for cost-efficient off-chain storage.",
    ],
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
                className="relative bg-gradient-to-r from-yellow-400 to-yellow-200 p-0.5 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
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
                className="relative bg-gradient-to-r from-yellow-400 to-yellow-200 p-0.5 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold text-yellow-300">
                          {exp.title}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-base mb-1">{exp.role}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                        <span>{exp.institution}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                      {exp.description && (
                        <ul className="list-disc ml-5 space-y-2 text-gray-400 text-sm">
                          {exp.description.map((desc: string, idx: number) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>
                      )}
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
