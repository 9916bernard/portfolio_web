"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import bg_me from "../../assets/image/bg_me_rm_2.jpeg";
import logo from "../../assets/image/logo-transparent-png.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="relative flex flex-col justify-center items-center min-h-[200vh] p-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg_me.src})` }}
    >
      {/* 부모의 대각선 그라데이션을 살리기 위해 부분 투명 오버레이만 사용 */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* Contact Icons - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-8 right-8 z-50 flex gap-4"
        style={{ pointerEvents: "auto" }}
      >
        <Link 
          href="https://github.com/9916bernard" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="GitHub Profile"
        >
          <FaGithub size={32} />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/sungheon-lee-ab6a86227" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={32} />
        </Link>
        <Link 
          href="mailto:9916bernard@gmail.com" 
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="Email Contact"
        >
          <MdEmail size={34} />
        </Link>
      </motion.div>

      {/* Animated Content */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* LOGO - Fade-in Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute"
          style={{ top: "1%", left: "1%" }}
        >
          <Image src={logo} alt="Logo" width={400} height={100} />
        </motion.div>

        {/* TEXT - Slide Up Effect */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute text-white text-8xl font-extrabold"
          style={{ top: "15%", left: "10%" }}
        >
          SUNGHEON
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute text-yellow-400 text-7xl font-extrabold"
          style={{ top: "20%", left: "30%" }}
        >
          Bernard
        </motion.p>

        {/* PERSONAL INTRO - Fade-in Effect (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute text-white text-xl font-medium max-w-md leading-relaxed"
          style={{
            bottom: "5%",
            right: "5%",
            pointerEvents: "none",
          }}
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
          <p className="mt-2">
            I pride myself on my{" "}
            <span className="text-yellow-400 font-bold">fast learning</span>{" "}
            abilities and{" "}
            <span className="text-yellow-400 font-bold">collaborative</span>{" "}
            spirit, always eager to adapt to new challenges. With a{" "}
            <span className="text-yellow-400 font-bold">positive mindset</span>{" "}
            and strong interpersonal skills, I love working in teams that
            value open communication and shared success.
          </p>
          <p className="mt-2">
            Plus, I&apos;m not afraid to{" "}
            <span className="text-yellow-400 font-bold">innovate</span>
            —constantly pushing boundaries to discover fresh ideas and
            solutions.
          </p>

          {/* Bullet Points */}
          <h3 className="text-yellow-400 font-bold text-2xl mt-6 mb-2">
            Highlights
          </h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <span className="text-yellow-400">Penn State</span> – B.S. in Computer Science, graduating{" "}
              <span className="font-bold">Spring 2026</span>
            </li>
            <li>
              Projects: Developed <span className="text-yellow-400">games</span>,{" "}
              <span className="text-yellow-400">apps</span>,{" "}
              <span className="text-yellow-400">websites</span>, and{" "}
              <span className="text-yellow-400">autonomous vehicle</span> systems
            </li>
            <li>
              Internships: Gained hands-on experience as a Developer Intern and a QA Intern at gaming companies
            </li>
            <li>
              Awarded <span className="text-yellow-400 font-bold">DataFest Best in Show</span> for analytical insights
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
