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
            className="flex items-center justify-center bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition duration-200 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-black"
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
        />
      )}
    </div>
  );
});

OnDemandVideo.displayName = "OnDemandVideo"; // ✅ 해결: react/display-name

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

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-24 pb-32 text-white">
          <h1 className="text-center text-7xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
            Cosmic Survivor
          </h1>
          <h2 className="text-center text-2xl md:text-3xl mb-12 drop-shadow-md">
            A Base-Defense Survival Game
          </h2>
          <p className="text-center text-sm text-gray-300 mb-12">
            (All videos have been optimized for fast loading by adjusting their resolution.)
          </p>

          <div className="bg-black/60 p-8 rounded-xl shadow-xl mb-12">
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                Introduction
              </h3>
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-base leading-relaxed mb-4">
                  🚀 Cosmic Survivor is a base-defense survival game inspired by the Vampire Survivors genre, featuring strategic base expansion, real-time combat, and upgrade mechanics. I&apos;ve included various weapons, turrets, and enemies, with a procedurally expanding map and permanent progression elements.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Here are some of the key features already implemented:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Dual Language Support: Seamless switch between Korean &amp; English.</li>
                  <li>Base Expansion Mechanics: Defend and expand an infinitely scalable base.</li>
                  <li>Diverse Arsenal: 10+ weapons and 10+ deployable turrets.</li>
                  <li>Permanent Player Progression: Upgrade your spaceship permanently.</li>
                  <li>Control Stick Motion Recognition: Double-tap &amp; lateral swipe for boosts &amp; dodge.</li>
                  <li>Endless Procedural Map: A continuously expanding world with no boundaries.</li>
                  <li>Guided Navigation: Directional arrow leading back to the base.</li>
                  <li>Randomized Resource Gathering: Collect minerals for permanent upgrades.</li>
                  <li>Dynamic Enemies &amp; Bosses: 6 unique enemy units that get stronger over time.</li>
                  <li>In-Game Tutorial: Step-by-step introduction to mechanics.</li>
                </ul>
                <p className="text-base leading-relaxed mb-4">
                  Planned features include more weapons, additional playable spaceships, and new abilities. Currently, it&apos;s at an Alpha Prototype stage, but the core mechanics are fully implemented.
                </p>
              </div>
            </section>
          </div>

          <div className="border border-gray-600 p-6 rounded-lg bg-black/60">
            {/* Start */}
            <Section
              title="Start"
              description="This is where the adventure begins! From language settings to rankings, upgrades, tutorials, and shops, the start screen lays the foundation for your gameplay. An ad banner is displayed at the top. Press start when you&apos;re ready for action."
              src={COS_START}
              caption="The start screen: language toggle, shop, and more."
            />
            <hr className="border-gray-600 mb-12" />

            {/* Level Up */}
            <Section
              title="Level Up"
              description="Leveling up is at the heart of Cosmic Survivor. Defeat enemies to gain experience and unlock upgrades for your weapons and turrets—each choice drastically reshapes your playstyle."
              src={COS_LEVEL_UP}
              caption="Level up screen: choose new abilities or enhance turrets."
            />
            <hr className="border-gray-600 mb-12" />

            {/* Combat */}
            <Section
              title="Combat"
              description="In the heat of battle, combat becomes the ultimate test. Surrounded by hordes of enemies, your strategic placement of turrets and upgraded weapons will decide your fate."
              src={COS_GROUP_KILL}
              caption="Mid-game action: group kills and turret support."
            />
            <hr className="border-gray-600 mb-12" />

            {/* Boss */}
            <Section
              title="Boss"
              description="Occasionally, a formidable Boss appears, evolving its attack patterns as you progress. Defeating a boss rewards you with rare upgrades and crucial resources."
              src={COS_BOSS}
              caption="Boss encounter: evolves with new patterns over time."
            />
            <hr className="border-gray-600 mb-12" />

            {/* Final */}
            <Section
              title="Final"
              description="Witness the chaos of late-game where multiple upgraded weapons clash with overwhelming enemy forces. This is where your base-building strategy truly shines."
              src={COS_FINAL}
              caption="Late-game madness: upgraded weapons &amp; overwhelming enemies."
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
    <section className="mb-12">
      <div className="flex items-center mb-4 border-b-2 border-gray-400 pb-2">
        <h3 className="text-4xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 text-left">
          <div className="bg-black/50 p-4 rounded-lg">
            <p className="text-base leading-relaxed mb-4">{description}</p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <OnDemandVideo
            src={src}
            className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-md"
          />
          <p className="text-gray-400 text-sm mt-2">{caption}</p>
          <p className="text-gray-400 text-xs mt-1">
            (Video resolution optimized for fast loading.)
          </p>
        </div>
      </div>
    </section>
  );
}
