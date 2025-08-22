"use client";

import React from "react";

const MobileContactSection = () => {
  return (
    <section
      id="mobile-contact"
      className="relative min-h-screen flex flex-col items-center justify-center p-4 pb-20 bg-black text-white"
    >
      <div className="w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-300 text-sm mb-8">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="space-y-4">
          <a
            href="mailto:9916bernard@gmail.com"
            className="block w-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-colors text-center"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/sungheon-lee-ab6a86227"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-colors text-center"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/9916bernard"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-colors text-center"
          >
            GitHub
          </a>
        </div>

        {/* 하단 문구 */}
        <div className="mt-12 text-xs text-gray-500 italic">
          Built and Designed By Sungheon Bernard Lee
        </div>
      </div>
    </section>
  );
};

export default MobileContactSection;
