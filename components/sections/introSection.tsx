"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bg_me from "../../assets/image/bg_me.jpeg";
import logo from "../../assets/image/logo-transparent-png.png";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="relative flex flex-col justify-center items-center min-h-[200vh] p-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg_me.src})` }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.4) 66.67%, rgba(0,0,0,0.9) 66.67%, rgba(0,0,0,0.9) 100%)",
        }}
      />

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
              <span className="text-yellow-400">Penn State</span> - Computer
              Science, graduating{" "}
              <span className="font-bold">Spring 2026</span>
            </li>
            <li>
              Awarded{" "}
              <span className="text-yellow-400 font-bold">
                DataFest Best in Show
              </span>{" "}
              for analytical excellence
            </li>
            <li>
              Developer Intern at Maf Games: integrated ranking system, Google
              Ads, Firebase
            </li>
            <li>
              QA Intern at Naddic Games: reduced bugs by 25% for{" "}
              <em>Closers</em>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
