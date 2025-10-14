"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";
import React, { useState, memo } from "react";
import cos_bg from "../../assets/image/cos_bg_res.jpg";

const COS_START = "/video/cos_start_ad.mp4";
const COS_LEVEL_UP = "/video/cos_level_up_ad.mp4";
const COS_GROUP_KILL = "/video/cos_group_kill_ad.mp4";
const COS_BOSS = "/video/cos_boss_ad.mp4";
const COS_FINAL = "/video/cos_final_ad.mp4";

interface OnDemandVideoProps {
  src: string;
  className?: string;
}

const OnDemandVideo = memo(({ src, className }: OnDemandVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!isPlaying ? (
        <div className="w-full h-full aspect-video rounded-xl bg-black flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="flex items-center justify-center bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 md:p-6 transition duration-200 shadow-lg"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 md:w-10 md:h-10 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          preload="metadata"
          className="rounded-xl w-full max-w-md"
          playsInline // 모바일 기기에서 비디오가 전체 화면으로 재생되지 않도록
          muted
        />
      )}
    </div>
  );
});

OnDemandVideo.displayName = "OnDemandVideo";

export default function COSContext() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[300vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${cos_bg.src})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none"></div>
        <BackButton onClick={() => router.back()} />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-32 text-white">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              Cosmic Survivor
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-gray-200">
              Base-Defense Survival Game
            </h2>
            <div className="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* 개요 섹션 */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-purple-900/40 to-black/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Overview</h3>
                </div>
                <div className="space-y-4 text-gray-200">
                  <p className="text-sm md:text-base leading-relaxed">
                    <span className="text-purple-400 font-bold">Cosmic Survivor</span> is a base-defense survival game inspired by the Vampire Survivors genre, featuring strategic base expansion, real-time combat, and upgrade mechanics. The game includes a variety of weapons, turrets, and enemies, with procedurally expanding maps and permanent progression elements.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    As a self-directed passion project, I managed the entire development pipeline—from initial concept to alpha test. This project was a fantastic opportunity to push my programming skills and see a complete game through from start to finish.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 font-semibold">Unity</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 font-semibold">C#</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 font-semibold">Google Play Console</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 게임 섹션들 */}
            <Section
              title="Game Startup"
              description="The game implements a comprehensive tutorial system with step-by-step introduction to mechanics. Dual language support allows seamless switching between Korean and English. The system includes integrated advertising with ad removal functionality, providing a complete monetization framework."
              src={COS_START}
              caption="Tutorial system and dual language interface implementation"
              number={1}
            />

            <Section
              title="Level-Up System"
              description="Players earn experience by destroying enemies, allowing them to level up and choose from randomized power-ups. I developed a balanced progression system that scales difficulty while giving players strategic choices."
              src={COS_LEVEL_UP}
              caption="Level-up interface showing power-up options"
              number={2}
            />

            <Section
              title="Group Combat"
              description="As the game progresses, players face increasingly numerous enemy waves. I designed different enemy types with unique movement patterns and attack behaviors to create engaging combat scenarios."
              src={COS_FINAL}
              caption="Player fighting against multiple enemy types simultaneously"
              number={3}
            />

            <Section
              title="Boss Battle"
              description="The ultimate challenge comes in the form of a massive boss fight. I crafted a multi-phase boss with distinctive attack patterns that tests players' skills and rewards strategic gameplay."
              src={COS_BOSS}
              caption="Epic confrontation with the final boss"
              number={4}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function Section({
  title,
  description,
  src,
  caption,
  number,
}: {
  title: string;
  description: string;
  src: string;
  caption: string;
  number: number;
}) {
  return (
    <section className="group">
      <div className="bg-gradient-to-br from-black/70 via-purple-900/40 to-black/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-black font-black text-2xl shadow-lg">
            {number}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <div className="md:w-1/2 text-left">
            <div className="bg-black/40 p-5 md:p-6 rounded-xl border border-gray-700/30">
              <p className="text-sm md:text-base leading-relaxed text-gray-200">{description}</p>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <div className="relative group/video w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-25 group-hover/video:opacity-50 transition duration-500"></div>
              <div className="relative">
                <OnDemandVideo
                  src={src}
                  className="w-full"
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm mt-4 italic text-center">{caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
