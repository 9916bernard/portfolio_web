"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";
import { useRef, useEffect } from "react";
import React from "react";

// 배경 이미지 (예: /assets/image/cos_bg.jpeg)
import cos_bg from "../../assets/image/cos_bg.jpeg";

// 비디오 경로 (public/video/*.mp4)
const COS_START = "/video/cos_start_ad.mp4";
const COS_LEVEL_UP = "/video/cos_level_up_ad.mp4";
const COS_GROUP_KILL = "/video/cos_group_kill_ad.mp4";
const COS_BOSS = "/video/cos_boss_ad.mp4";
const COS_FINAL = "/video/cos_final_ad.mp4";

// LazyVideo 컴포넌트: 뷰포트 내에 있을 때 재생, 아니면 일시 중지
function LazyVideo(props: React.VideoHTMLAttributes<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return <video ref={videoRef} {...props} />;
}

export default function COSContext() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[300vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${cos_bg.src})` }}
      >
        {/* 배경 오버레이 (그라데이션) - GPU 가속을 위해 CSS 속성 추가 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10 pointer-events-none"
          style={{
            willChange: "opacity, transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        ></div>

        {/* Back Button */}
        <BackButton onClick={() => router.back()} />

        {/* 컨텐츠 영역 */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-24 pb-32 text-white backdrop-blur-sm">
          {/* 메인 타이틀 */}
          <h1 className="text-center text-7xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
            Cosmic Survivor
          </h1>
          <h2 className="text-center text-2xl md:text-3xl mb-12 drop-shadow-md">
            A Base-Defense Survival Game
          </h2>

          {/* 영상 최적화 안내 문구 */}
          <p className="text-center text-sm text-gray-300 mb-12">
            (All videos have been optimized for fast loading by adjusting their resolution.)
          </p>

          {/* 메인 소개 블록 (intro) */}
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

          {/* 실제 게임 플레이 섹션들을 텍스트박스로 감싼 블록 */}
          <div className="border border-gray-600 p-6 rounded-lg bg-black/60">
            {/* 1. Start */}
            <section className="mb-12">
              <div className="flex items-center mb-4 border-b-2 border-gray-400 pb-2">
                <h3 className="text-4xl font-semibold">Start</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* 텍스트 영역 */}
                <div className="md:w-1/2 text-left">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-base leading-relaxed mb-4">
                      This is where the adventure begins! From language settings to rankings, upgrades, tutorials, and shops, the start screen lays the foundation for your gameplay. An ad banner is displayed at the top. Press start when you’re ready for action.
                    </p>
                  </div>
                </div>
                {/* 비디오 영역 */}
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <LazyVideo
                    src={COS_START}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-md"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    The start screen: language toggle, shop, and more.
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    (Video resolution optimized for fast loading.)
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 2. Level Up */}
            <section className="mb-12">
              <div className="flex items-center mb-4 border-b-2 border-gray-400 pb-2">
                <h3 className="text-4xl font-semibold">Level Up</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-base leading-relaxed mb-4">
                      Leveling up is at the heart of Cosmic Survivor. Defeat enemies to gain experience and unlock upgrades for your weapons and turrets—each choice drastically reshapes your playstyle.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <LazyVideo
                    src={COS_LEVEL_UP}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-md"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Level up screen: choose new abilities or enhance turrets.
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    (Video resolution optimized for fast loading.)
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 3. Combat */}
            <section className="mb-12">
              <div className="flex items-center mb-4 border-b-2 border-gray-400 pb-2">
                <h3 className="text-4xl font-semibold">Combat</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-base leading-relaxed mb-4">
                      In the heat of battle, combat becomes the ultimate test. Surrounded by hordes of enemies, your strategic placement of turrets and upgraded weapons will decide your fate.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <LazyVideo
                    src={COS_GROUP_KILL}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-md"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Mid-game action: group kills and turret support.
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    (Video resolution optimized for fast loading.)
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 4. Boss */}
            <section className="mb-12">
              <div className="flex items-center mb-4 border-b-2 border-gray-400 pb-2">
                <h3 className="text-4xl font-semibold">Boss</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-base leading-relaxed mb-4">
                      Occasionally, a formidable Boss appears, evolving its attack patterns as you progress. Defeating a boss rewards you with rare upgrades and crucial resources.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <LazyVideo
                    src={COS_BOSS}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-md"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Boss encounter: evolves with new patterns over time.
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    (Video resolution optimized for fast loading.)
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 5. Final */}
            <section className="mb-12">
              <div className="flex items-center mb-4 border-b-2 border-gray-400 pb-2">
                <h3 className="text-4xl font-semibold">Final</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-base leading-relaxed mb-4">
                      Witness the chaos of late-game where multiple upgraded weapons clash with overwhelming enemy forces. This is where your base-building strategy truly shines.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <LazyVideo
                    src={COS_FINAL}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-md"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Late-game madness: upgraded weapons &amp; overwhelming enemies.
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    (Video resolution optimized for fast loading.)
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
