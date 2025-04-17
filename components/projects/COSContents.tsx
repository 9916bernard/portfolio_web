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

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-32 text-white">
          <h1 className="text-center text-5xl sm:text-6xl md:text-8xl font-extrabold mb-4 md:mb-6 drop-shadow-lg">
            Cosmic Survivor
          </h1>
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl mb-8 md:mb-12 drop-shadow-md">
            A Base-Defense Survival Game
          </h2>
          <p className="text-center text-xs md:text-sm text-gray-300 mb-8 md:mb-12">
            (All videos have been optimized for fast loading by adjusting their resolution.)
          </p>

          <div className="bg-black/60 p-4 md:p-8 rounded-xl shadow-xl">
            {/* 개요 섹션 */}
            <section className="mb-8 md:mb-12">
              <div className="flex items-center mb-4 border-b-2 border-gray-400 pb-2">
                <h3 className="text-3xl md:text-4xl font-semibold">Overview</h3>
              </div>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                <span className="text-yellow-400 font-bold">Cosmic Survivor</span> is a thrilling 2D base-defense survival game where players fend off waves of intergalactic enemies. Featuring pixel art, a level-up system, dynamic weapons, and a formidable final boss, I single-handedly developed this game using C# and Unity.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                As a self-directed passion project, I managed the entire development pipeline—from initial concept to final deployment on Android devices via Google Play Store. This project was a fantastic opportunity to push my programming skills and see a complete game through from start to finish.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                <span className="text-yellow-400 font-bold">Tech Stack:</span> Unity, C#, Google Play Console
              </p>
            </section>

            {/* 게임 섹션들 */}
            <Section
              title="Game Startup"
              description="The game begins with the player choosing their ship and entering the cosmic battlefield. I implemented a smooth start sequence with clear UI elements to introduce players to the controls and objectives."
              src={COS_START}
              caption="Initial gameplay showing player controls and basic mechanics"
            />

            <Section
              title="Level-Up System"
              description="Players earn experience by destroying enemies, allowing them to level up and choose from randomized power-ups. I developed a balanced progression system that scales difficulty while giving players strategic choices."
              src={COS_LEVEL_UP}
              caption="Level-up interface showing power-up options"
            />

            <Section
              title="Group Combat"
              description="As the game progresses, players face increasingly numerous enemy waves. I designed different enemy types with unique movement patterns and attack behaviors to create engaging combat scenarios."
              src={COS_GROUP_KILL}
              caption="Player fighting against multiple enemy types simultaneously"
            />

            <Section
              title="Boss Battle"
              description="The ultimate challenge comes in the form of a massive boss fight. I crafted a multi-phase boss with distinctive attack patterns that tests players' skills and rewards strategic gameplay."
              src={COS_BOSS}
              caption="Epic confrontation with the final boss"
            />

            <Section
              title="Victory Screen"
              description="Upon defeating the boss, players are rewarded with a satisfying victory screen showcasing their achievements. I implemented stat tracking to give players a sense of accomplishment and encourage replays."
              src={COS_FINAL}
              caption="Victory screen displaying player statistics"
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
}: {
  title: string;
  description: string;
  src: string;
  caption: string;
}) {
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center mb-4 border-b-2 border-gray-400 pb-2">
        <h3 className="text-2xl md:text-4xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
        <div className="md:w-1/2 text-left">
          <div className="bg-black/50 p-3 md:p-4 rounded-lg">
            <p className="text-sm md:text-base leading-relaxed mb-4">{description}</p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <OnDemandVideo
            src={src}
            className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-md"
          />
          <p className="text-gray-400 text-xs md:text-sm mt-2">{caption}</p>
          <p className="text-gray-400 text-xs mt-1">
            (Video resolution optimized for fast loading.)
          </p>
        </div>
      </div>
    </section>
  );
}
