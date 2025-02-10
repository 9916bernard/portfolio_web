"use client";

import React from "react";

const awards = [
  { title: "DataFest Best in Show", description: "Awarded for analytical excellence in big data analysis." },
  { title: "Dean’s List (5/6 Semesters)", description: "Recognized for outstanding academic performance at Penn State." },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="relative min-h-[100vh] p-10 bg-gray-900 text-white">
      <h2 className="text-5xl font-bold text-yellow-400 text-center">Awards & Honors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
        {awards.map((award, index) => (
          <div key={index} className="p-5 border border-yellow-400 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400">{award.title}</h3>
            <p className="text-gray-300 mt-2">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
