"use client";

import React from "react";
import { motion } from "framer-motion";

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

const MobileResearchSection = () => {
  return (
    <section
      id="mobile-research"
      className="relative min-h-screen p-4 pb-20 bg-gradient-to-b from-gray-900 via-gray-800 to-slate-700 text-white"
    >
      {/* 섹션 타이틀 */}
      <div className="w-full text-center mb-8 mt-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">Research</h1>
      </div>

      {/* Publications Section */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-yellow-300 mb-4">
          Peer-Reviewed Conference/Journal Papers
        </h2>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 border border-yellow-400"
            >
              <p className="text-gray-400 text-xs mb-2">{pub.authors}</p>
              <h3 className="text-base font-bold text-yellow-300 mb-2">
                &quot;{pub.title}&quot;
              </h3>
              <p className="text-gray-400 text-xs">
                Submitted to <span className="text-yellow-200 font-semibold">{pub.venue}</span>, {pub.date},{" "}
                <span className="italic">{pub.status}</span>.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Experience Section */}
      <div>
        <h2 className="text-xl font-bold text-yellow-300 mb-4">
          Research Experience
        </h2>
        <div className="space-y-4">
          {researchExperience.map((exp, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 rounded-lg p-4 border-2 border-yellow-400 active:border-yellow-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-bold text-yellow-300 flex-1">
                  {exp.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm mb-1">{exp.role}</p>
              <div className="flex flex-col gap-1 text-xs text-gray-400 mb-3">
                <span>{exp.institution}</span>
                <span>{exp.period}</span>
              </div>
              {exp.description && (
                <ul className="list-disc ml-4 space-y-1 text-gray-400 text-xs">
                  {exp.description.map((desc: string, idx: number) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileResearchSection;
