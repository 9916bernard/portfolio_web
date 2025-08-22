"use client";

import { useRouter } from "next/navigation";
import BackButton from "../../BackButton";
import PageTransition from "../../PageTransition";
import React, { useState, memo } from "react";


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
        <div className="w-full h-full aspect-video rounded-lg bg-black flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="flex items-center justify-center bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition duration-200 shadow-lg"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black"
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
          className="rounded-lg w-full"
          playsInline
          muted
        />
      )}
    </div>
  );
});

OnDemandVideo.displayName = "OnDemandVideo";

export default function MobileCOSContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black text-white">
        <BackButton onClick={() => router.back()} />

        <div className="w-full px-4 pt-20 pb-20">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-3">
              Cosmic Survivor
            </h1>
            <h2 className="text-lg text-gray-300 mb-4">
              Base-Defense Survival Game
            </h2>
            <p className="text-xs text-gray-400">
              (Videos have optimized resolution)
            </p>
          </div>



          <div className="space-y-8">
            {/* 개요 섹션 */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
                Overview
              </h3>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  <span className="text-yellow-400 font-semibold">Cosmic Survivor</span> is a base-defense survival game inspired by the Vampire Survivors genre, featuring strategic base expansion, real-time combat, and upgrade mechanics. The game includes a variety of weapons, turrets, and enemies, with procedurally expanding maps and permanent progression elements.
                </p>
                <p className="text-sm leading-relaxed">
                  As a self-directed passion project, I managed the entire development pipeline—from initial concept to alpha test. This project was a fantastic opportunity to push my programming skills and see a complete game through from start to finish.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="text-yellow-400 font-semibold">Tech Stack:</span> Unity, C#, Google Play Console
                </p>
              </div>
            </section>

            {/* 게임 섹션들 */}
            <MobileSection
              title="Game Startup"
              description="The game implements a comprehensive tutorial system with step-by-step introduction to mechanics. Dual language support allows seamless switching between Korean and English. The system includes integrated advertising with ad removal functionality, providing a complete monetization framework."
              src={COS_START}
              caption="Tutorial system and dual language interface implementation"
            />

            <MobileSection
              title="Level-Up System"
              description="Players earn experience by destroying enemies, allowing them to level up and choose from randomized power-ups. I developed a balanced progression system that scales difficulty while giving players strategic choices."
              src={COS_LEVEL_UP}
              caption="Level-up interface showing power-up options"
            />

            <MobileSection
              title="Group Combat"
              description="As the game progresses, players face increasingly numerous enemy waves. I designed different enemy types with unique movement patterns and attack behaviors to create engaging combat scenarios."
              src={COS_FINAL}
              caption="Player fighting against multiple enemy types simultaneously"
            />

            <MobileSection
              title="Boss Battle"
              description="The ultimate challenge comes in the form of a massive boss fight. I crafted a multi-phase boss with distinctive attack patterns that tests players' skills and rewards strategic gameplay."
              src={COS_BOSS}
              caption="Epic confrontation with the final boss"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function MobileSection({
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
    <section className="bg-gray-900 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
        {title}
      </h3>
      
      <div className="space-y-4">
        <div className="bg-black/50 p-3 rounded-lg">
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="w-full">
          <OnDemandVideo
            src={src}
            className="w-full rounded-lg"
          />
          <p className="text-gray-400 text-xs mt-2 text-center">{caption}</p>
          <p className="text-gray-400 text-xs mt-1 text-center">
            (Video resolution optimized for fast loading.)
          </p>
        </div>
      </div>
    </section>
  );
}
