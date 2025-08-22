"use client";

import { useRouter } from "next/navigation";
import BackButton from "../../BackButton";
import PageTransition from "../../PageTransition";
import LineLimitedParagraph from "../../LineLimitedParagraph";
import React, { useState, memo } from "react";
import Image from "next/image";

import avt_group from "../../../assets/image/avt_group.jpeg";

const BACKCAR_VIDEO_SRC = "/video/avt_car_back_ad.mp4";
const AVT_TEST_VIDEO_SRC = "/video/avt_test_ad.mp4";

interface OnDemandVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const OnDemandVideo = memo(({ src, className, style }: OnDemandVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`relative ${className || ""}`} style={style}>
      {!isPlaying ? (
        <div className="w-full h-full aspect-video rounded-lg bg-black flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="flex items-center justify-center bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition duration-200 shadow-lg"
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
          style={style}
        />
      )}
    </div>
  );
});

OnDemandVideo.displayName = "OnDemandVideo";

export default function MobileAVTContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black text-white">
        <BackButton onClick={() => router.back()} />

        <div className="w-full px-4 pt-20 pb-20">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-3">
              AVT
            </h1>
            <h2 className="text-lg text-gray-300 mb-6">
              Autonomous Vehicle Team at PSU
            </h2>
          </div>



          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
                1. Joining the Penn State Advanced Vehicle Team (AVT)
              </h3>
              
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  In August 2024, I joined the <span className="text-yellow-400 font-semibold">Penn State Advanced Vehicle Team (AVT)</span>. The <span className="text-yellow-400 font-semibold">Penn State AVT's mission</span> is to offer an unparalleled learning experience for students by developing algorithms for <span className="text-yellow-400 font-semibold">autonomous driving</span>, re-engineering <span className="text-yellow-400 font-semibold">electric vehicles</span> to enhance driving range, and improving vehicle architecture while maintaining consumer demand.
                </p>
                
                <p className="text-sm leading-relaxed">
                  Since 1988, the <span className="text-yellow-400 font-semibold">Penn State AVT</span> has competed in the <span className="text-yellow-400 font-semibold">Advanced Vehicle Technology Competitions</span>, focusing on building a <span className="text-yellow-400 font-semibold">fuel-efficient vehicle</span> without compromising performance or safety.
                </p>
                
                <p className="text-sm leading-relaxed">
                  I was excited to join a team that emphasizes <span className="text-yellow-400 font-semibold">real-world applications</span> of <span className="text-yellow-400 font-semibold">cutting-edge engineering</span>. From day one, it was clear that <span className="text-yellow-400 font-semibold">collaboration</span> and <span className="text-yellow-400 font-semibold">hands-on learning</span> are central to <span className="text-yellow-400 font-semibold">AVT's culture</span>.
                </p>
              </div>

              {/* AVT 그룹 이미지 */}
              <div className="mt-6">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={avt_group}
                    alt="AVT Group"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-400 text-xs mt-2 text-center">
                  FA 2024 AVT – I'm standing at the far left.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
                2. Building the "Sensor Decider"
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-sm leading-relaxed">
                  I developed a core pipeline component in <span className="text-yellow-400 font-semibold">ROS2</span> using <span className="text-yellow-400 font-semibold">Python</span> to integrate data from <span className="text-yellow-400 font-semibold">HDMaps</span>, <span className="text-yellow-400 font-semibold">LiDAR</span>, and <span className="text-yellow-400 font-semibold">Camera</span>. This module publishes data to the <span className="text-yellow-400 font-semibold">Control State Machine</span>, generating <span className="text-yellow-400 font-semibold">real-time vehicle trajectories</span>.
                </p>
                
                <p className="text-sm leading-relaxed">
                  By synthesizing multiple sensor inputs simultaneously, the system can more reliably account for <span className="text-yellow-400 font-semibold">dynamic objects</span> on the road and update trajectories at <span className="text-yellow-400 font-semibold">high frequency</span>.
                </p>
                
                <p className="text-sm leading-relaxed">
                  Additionally, we introduced a robust <span className="text-yellow-400 font-semibold">error-handling routine</span> to ensure the pipeline gracefully recovers from unexpected sensor dropouts or corrupted data, which was crucial for <span className="text-yellow-400 font-semibold">real-world viability</span>.
                </p>
                
                <p className="text-sm leading-relaxed">
                  (This was the <span className="text-yellow-400 font-semibold">first time</span> we tested real sensor inputs from the <span className="text-yellow-400 font-semibold">Perception team</span> directly on the car.)
                </p>
              </div>

              {/* 비디오 */}
              <div className="w-full">
                <OnDemandVideo
                  src={BACKCAR_VIDEO_SRC}
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-xs mt-2 text-center">
                  First sensor test: captured the initial sensor integration on the car.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
                3. Prototype Demonstration and Design Showcase
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-sm leading-relaxed">
                  Ultimately, the car was able to operate in <span className="text-yellow-400 font-semibold">full autonomous mode</span> by recognizing <span className="text-yellow-400 font-semibold">dynamic objects</span> and <span className="text-yellow-400 font-semibold">traffic signals</span>. Our demonstration validated <span className="text-yellow-400 font-semibold">real-time data generation</span> within an 80 cm error range, highlighting the system's <span className="text-yellow-400 font-semibold">precision</span>.
                </p>
                
                <p className="text-sm leading-relaxed">
                  The design showcase provided an opportunity for <span className="text-yellow-400 font-semibold">industry professionals</span> and <span className="text-yellow-400 font-semibold">fellow researchers</span> to offer feedback. We gained insights into refining the <span className="text-yellow-400 font-semibold">user interface</span> for remote monitoring and ensuring <span className="text-yellow-400 font-semibold">robust performance</span> under inclement weather conditions.
                </p>
                
                <p className="text-sm leading-relaxed">
                  Moving forward, we plan to expand our testing environments to different terrains and incorporate more advanced <span className="text-yellow-400 font-semibold">sensor fusion algorithms</span>. Each iteration brings us closer to a truly <span className="text-yellow-400 font-semibold">autonomous solution</span> capable of handling diverse <span className="text-yellow-400 font-semibold">real-world scenarios</span>.
                </p>
              </div>

              {/* 비디오 */}
              <div className="w-full">
                <OnDemandVideo
                  src={AVT_TEST_VIDEO_SRC}
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Testing video: when the blue light is not blinking, the vehicle is in full autonomous mode.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
