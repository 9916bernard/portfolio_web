"use client";

import React from "react";
import { motion } from "framer-motion";
import StarField from "../StarField";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-slate-700 via-slate-600 to-slate-500 overflow-hidden"
    >
      <StarField count={30} color="white" speed={0.4} />

      {/* Dawn light glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-900/20 to-transparent" />

      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-gray-100 drop-shadow-lg">Let&apos;s Connect</h2>
        <p className="text-gray-300 mt-4 text-xl text-center max-w-2xl font-medium">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.a
            href="mailto:9916bernard@gmail.com"
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Me
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sungheon-lee-ab6a86227"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/9916bernard"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>

      {/* 오른쪽 하단 작은 문구 */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-400 italic z-10 font-medium">
        Built and Designed By Sungheon Bernard Lee
      </div>
    </section>
  );
};

export default ContactSection;
