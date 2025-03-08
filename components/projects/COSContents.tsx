"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";

// 배경 이미지 (예: /assets/image/cos_bg.jpeg)
import cos_bg from "../../assets/image/cos_bg.jpeg";

// 비디오 경로 (public/video/*.mp4)
const COS_START = "/video/cos_start.mp4";
const COS_LEVEL_UP = "/video/cos_level_up.mp4";
const COS_GROUP_KILL = "/video/cos_group_kill.mp4";
const COS_BOSS = "/video/cos_boss.mp4";
const COS_FINAL = "/video/cos_final.mp4";

export default function COSContext() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[300vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${cos_bg.src})` }}
      >
        {/* 배경 오버레이 (그라데이션) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10 pointer-events-none"></div>

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

          {/* 메인 소개 블록 (intro) */}
          <div className="bg-black/60 p-8 rounded-xl shadow-xl mb-12">
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                Introduction
              </h3>
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
            </section>
          </div>

          {/* 실제 게임 플레이 섹션들을 텍스트박스로 감싼 블록 */}
          <div className="border border-gray-600 p-6 rounded-lg bg-black/60">
            {/* 1. Start */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                1. Start
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* 텍스트 영역 */}
                <div className="md:w-1/2 text-left">
                  <p className="text-base leading-relaxed mb-4">
                    This is where the adventure begins! You can see the game&apos;s language settings, rankings, upgrades, tutorials, and shops right from the start screen. There&apos;s also an ad banner at the top. Once you&apos;re ready, press start to jump into the action.
                  </p>
                </div>
                {/* 비디오 영역 */}
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <video
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
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 2. Level Up */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                2. Level Up
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <p className="text-base leading-relaxed mb-4">
                    Leveling up is a core part of Cosmic Survivor. As you defeat enemies, you gain experience to upgrade your weapons or even your turrets. Each upgrade path can drastically change your playstyle, making every run feel fresh.
                  </p>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <video
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
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 3. Combat */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                3. Combat
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <p className="text-base leading-relaxed mb-4">
                    Combat is at the heart of this game, and you&apos;ll often find yourself surrounded by hordes of enemies. This clip shows mid-game progress where large groups of foes swarm the player, testing your upgraded weapons and strategic turret placement.
                  </p>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <video
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
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 4. Boss */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                4. Boss
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <p className="text-base leading-relaxed mb-4">
                    Every so often, a Boss unit appears. The longer you survive, the more dangerous it becomes—gaining new abilities or changing its attack patterns over time. Defeating a boss can reward you with rare upgrades or resources for your base.
                  </p>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <video
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
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 5. Final */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                5. Final
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <p className="text-base leading-relaxed mb-4">
                    Here&apos;s a glimpse of the late-game chaos. You&apos;ve got multiple upgraded weapons, but the enemies come in even greater numbers. This is where your base-building strategy and turret placement really pay off.
                  </p>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <video
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}


