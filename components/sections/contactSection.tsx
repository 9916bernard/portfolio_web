"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col items-center justify-center bg-black text-white p-4 md:p-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 md:mb-4 text-center">Let&apos;s Connect</h2>
      <p className="text-gray-400 mt-2 md:mt-4 text-base md:text-xl text-center max-w-2xl px-4">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      {/* 데스크탑용 버튼 레이아웃 */}
      <div className="hidden md:flex mt-6 space-x-4">
        <a
          href="mailto:9916bernard@gmail.com"
          className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/sungheon-lee-ab6a86227"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/9916bernard"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition"
        >
          GitHub
        </a>
      </div>
      
      {/* 모바일용 아이콘 레이아웃 */}
      <div className="flex md:hidden mt-8 space-x-6">
        <a
          href="mailto:9916bernard@gmail.com"
          className="flex flex-col items-center text-yellow-400 hover:text-yellow-300 transition"
          aria-label="Email Me"
        >
          <FaEnvelope size={36} className="mb-2" />
          <span className="text-sm">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sungheon-lee-ab6a86227"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-yellow-400 hover:text-yellow-300 transition"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={36} className="mb-2" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a
          href="https://github.com/9916bernard"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-yellow-400 hover:text-yellow-300 transition"
          aria-label="GitHub Profile"
        >
          <FaGithub size={36} className="mb-2" />
          <span className="text-sm">GitHub</span>
        </a>
      </div>

      {/* 오른쪽 하단 작은 문구 */}
      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-[10px] md:text-xs text-gray-500 italic text-right">
        Built with Next.js, React, and Tailwind CSS<br className="md:hidden" /> By Sungheon Bernard Lee
      </div>
    </section>
  );
};

export default ContactSection;
