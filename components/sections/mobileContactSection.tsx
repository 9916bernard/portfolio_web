"use client";

import React from "react";
import { motion } from "framer-motion";

const MobileContactSection = () => {
  return (
    <section
      id="mobile-contact"
      className="relative min-h-screen flex flex-col items-center justify-center p-4 pb-20 bg-gradient-to-b from-slate-700 via-slate-600 to-slate-500 overflow-hidden"
    >
      {/* Dawn light glow - mobile sized */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-900/20 to-transparent" />

      <div className="w-full max-w-sm text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-100 mb-4 drop-shadow-lg">Let&apos;s Connect</h2>
        <p className="text-gray-300 text-sm mb-8 font-medium">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="space-y-4">
          <motion.a
            href="mailto:9916bernard@gmail.com"
            className="block w-full px-6 py-3.5 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center shadow-lg backdrop-blur-sm"
            whileTap={{ scale: 0.95 }}
          >
            Email Me
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sungheon-lee-ab6a86227"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3.5 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center shadow-lg backdrop-blur-sm"
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/9916bernard"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3.5 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center shadow-lg backdrop-blur-sm"
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </div>

        {/* 하단 문구 */}
        <div className="mt-12 text-xs text-gray-400 italic font-medium">
          Built and Designed By Sungheon Bernard Lee
        </div>
      </div>
    </section>
  );
};

export default MobileContactSection;
