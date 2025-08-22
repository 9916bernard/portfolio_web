"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import bg_me from "../../assets/image/bg_me_rm_2.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TypingAnimation from "../TypingAnimation";

const MobileIntroSection = () => {
  return (
    <section
      id="mobile-intro"
      className="relative flex flex-col justify-start items-center min-h-screen p-4 pb-20 bg-black"
    >

      {/* 상단 소셜 미디어 아이콘 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-50 flex gap-4 mt-8"
      >
        <Link 
          href="https://github.com/9916bernard" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="GitHub Profile"
        >
          <FaGithub size={28} />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/sungheon-lee-ab6a86227" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={28} />
        </Link>
        <Link 
          href="mailto:9916bernard@gmail.com" 
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="Email Contact"
        >
          <MdEmail size={30} />
        </Link>
      </motion.div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-30 flex flex-col items-center justify-center flex-1 w-full max-w-sm">
        {/* 코딩 애니메이션 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mb-6"
        >
          <span className="text-yellow-400 text-lg font-mono">&lt;code&gt;</span>
          <span className="text-gray-300 text-lg font-mono">I build </span>
          <TypingAnimation 
            texts={["apps", "websites", "games"]} 
            typingSpeed={100} 
            deletingSpeed={50} 
            delayBetween={1500}
          />
          <span className="text-yellow-400 text-lg font-mono">&lt;/code&gt;</span>
        </motion.div>

        {/* 이름 */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-4xl font-extrabold text-white text-center mb-2"
        >
          SUNGHEON
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-3xl font-extrabold text-yellow-400 text-center mb-6"
        >
          Bernard
        </motion.h2>

        {/* 작은 배너 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="relative z-50 w-full max-w-xs h-32 rounded-lg overflow-hidden mb-8"
        >
          <Image
            src={bg_me}
            alt="Profile Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* 소개 텍스트 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.7 }}
          className="text-white text-sm leading-relaxed text-center space-y-3"
        >
          <p>
            Hello! I&apos;m a{" "}
            <span className="text-yellow-400 font-bold">Software Developer</span>{" "}
            currently pursuing my{" "}
            <span className="text-yellow-400 font-bold">
              B.S. in Computer Science
            </span>{" "}
            (Class of 2026).
          </p>
          <p>
            I pride myself on my{" "}
            <span className="text-yellow-400 font-bold">fast learning</span>{" "}
            abilities and{" "}
            <span className="text-yellow-400 font-bold">collaborative</span>{" "}
            spirit, always eager to adapt to new challenges.
          </p>
          <p>
            Plus, I&apos;m not afraid to{" "}
            <span className="text-yellow-400 font-bold">innovate</span>
            —constantly pushing boundaries to discover fresh ideas and
            solutions.
          </p>
        </motion.div>

        {/* 하이라이트 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="mt-6 w-full"
        >
          <h3 className="text-yellow-400 font-bold text-lg mb-3 text-center">
            Highlights
          </h3>
          <ul className="text-white text-xs space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>
                <span className="text-yellow-400">Penn State</span> – B.S. in Computer Science, graduating{" "}
                <span className="font-bold">Spring 2026</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>
                Projects: Developed <span className="text-yellow-400">games</span>,{" "}
                <span className="text-yellow-400">apps</span>,{" "}
                <span className="text-yellow-400">websites</span>, and{" "}
                <span className="text-yellow-400">autonomous vehicle</span> systems
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>
                Internships: Gained hands-on experience as a Developer Intern and a QA Intern at gaming companies
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>
                Awarded <span className="text-yellow-400 font-bold">DataFest Best in Show</span> for analytical insights
              </span>
            </li>
          </ul>
        </motion.div>

        {/* 액션 버튼들 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="flex flex-col gap-3 w-full mt-8"
        >
          <Link href="#mobile-projects">
            <button className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors">
              View My Work
            </button>
          </Link>
          <Link href="#mobile-contact">
            <button className="w-full px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileIntroSection;
