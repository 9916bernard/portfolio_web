"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-black text-white">
      <h2 className="text-5xl font-bold text-yellow-400">Let's Connect</h2>
      <p className="text-gray-400 mt-4 text-xl text-center max-w-2xl">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="mailto:9916bernard@gmail.com" className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/sungheon-lee-ab6a86227" target="_blank" className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition">
          LinkedIn
        </a>
        <a href="https://github.com/9916bernard" target="_blank" className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
