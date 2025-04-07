"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";
import LineLimitedParagraph from "../LineLimitedParagraph";
import React, { useState, memo } from "react";
import Image from "next/image";

import avt_bg from "../../assets/image/avt_bg_noel_res.jpg";
import avt_group from "../../assets/image/avt_group.jpeg";

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
          className="rounded-xl w-full max-w-xl"
          style={style}
        />
      )}
    </div>
  );
});

OnDemandVideo.displayName = "OnDemandVideo";

export default function AVTContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[300vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${avt_bg.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20 z-10 pointer-events-none" />
        <BackButton onClick={() => router.back()} />

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-24 pb-32 text-white">
          <h1 className="text-center text-7xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
            AVT
          </h1>
          <h2 className="text-center text-2xl md:text-3xl mb-12 drop-shadow-md">
            Autonomous Vehicle Team at PSU
          </h2>

          <div className="bg-black/60 p-8 rounded-xl shadow-xl">
            {/* Section 1 */}
            <section className="mb-12 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 text-left">
                <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                  1. Joining the{" "}
                  <strong className="text-yellow-400">
                    Penn State Advanced Vehicle Team (AVT)
                  </strong>
                </h3>
                <LineLimitedParagraph
                  text="In August 2024, I joined the <strong class='text-yellow-400'>Penn State Advanced Vehicle Team (AVT)</strong>. The <strong class='text-yellow-400'>Penn State AVT’s mission</strong> is to offer an unparalleled learning experience for students by developing algorithms for <strong class='text-yellow-400'>autonomous driving</strong>, re-engineering <strong class='text-yellow-400'>electric vehicles</strong> to enhance driving range, and improving vehicle architecture while maintaining consumer demand."
                />
                <LineLimitedParagraph
                  text="Since 1988, the <strong class='text-yellow-400'>Penn State AVT</strong> has competed in the <strong class='text-yellow-400'>Advanced Vehicle Technology Competitions</strong>, focusing on building a <strong class='text-yellow-400'>fuel-efficient vehicle</strong> without compromising performance or safety."
                />
                <LineLimitedParagraph
                  text="I was excited to join a team that emphasizes <strong class='text-yellow-400'>real-world applications</strong> of <strong class='text-yellow-400'>cutting-edge engineering</strong>. From day one, it was clear that <strong class='text-yellow-400'>collaboration</strong> and <strong class='text-yellow-400'>hands-on learning</strong> are central to <strong class='text-yellow-400'>AVT’s culture</strong>."
                />
                <LineLimitedParagraph
                  text="We regularly partner with <strong class='text-yellow-400'>industry sponsors</strong> and <strong class='text-yellow-400'>academic departments</strong>, ensuring that each member gains exposure to <strong class='text-yellow-400'>multi-disciplinary projects</strong>. It’s a fast-paced environment, but the support from <strong class='text-yellow-400'>faculty</strong> and <strong class='text-yellow-400'>alumni</strong> helps keep our goals on track."
                />
              </div>
              <div className="md:w-1/2 flex flex-col items-center">
                <Image
                  src={avt_group}
                  alt="AVT Group"
                  className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-xl"
                  placeholder="blur"
                />
                <p className="text-gray-400 text-sm mt-2">
                  FA 2024 AVT – I&apos;m standing at the far left.
                </p>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* Section 2 */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                2. Building the{" "}
                <strong className="text-yellow-400">“Sensor Decider”</strong>
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <LineLimitedParagraph
                    text="I developed a core pipeline component in <strong class='text-yellow-400'>ROS2</strong> using <strong class='text-yellow-400'>Python</strong> to integrate data from <strong class='text-yellow-400'>HDMaps</strong>, <strong class='text-yellow-400'>LiDAR</strong>, and <strong class='text-yellow-400'>Camera</strong>. This module publishes data to the <strong class='text-yellow-400'>Control State Machine</strong>, generating <strong class='text-yellow-400'>real-time vehicle trajectories</strong>."
                  />
                  <LineLimitedParagraph
                    text="By synthesizing multiple sensor inputs simultaneously, the system can more reliably account for <strong class='text-yellow-400'>dynamic objects</strong> on the road and update trajectories at <strong class='text-yellow-400'>high frequency</strong>."
                  />
                  <LineLimitedParagraph
                    text="Additionally, we introduced a robust <strong class='text-yellow-400'>error-handling routine</strong> to ensure the pipeline gracefully recovers from unexpected sensor dropouts or corrupted data, which was crucial for <strong class='text-yellow-400'>real-world viability</strong>."
                  />
                  <LineLimitedParagraph
                    text="(This was the <strong class='text-yellow-400'>first time</strong> we tested real sensor inputs from the <strong class='text-yellow-400'>Perception team</strong> directly on the car.)"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <OnDemandVideo
                    src={BACKCAR_VIDEO_SRC}
                    className="w-full max-w-xl rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    First sensor test: captured the initial sensor integration on the car.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* Section 3 */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                3. Prototype Demonstration and{" "}
                <strong className="text-yellow-400">Design Showcase</strong>
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <LineLimitedParagraph
                    text="Ultimately, the car was able to operate in <strong class='text-yellow-400'>full autonomous mode</strong> by recognizing <strong class='text-yellow-400'>dynamic objects</strong> and <strong class='text-yellow-400'>traffic signals</strong>. Our demonstration validated <strong class='text-yellow-400'>real-time data generation</strong> within an 80 cm error range, highlighting the system’s <strong class='text-yellow-400'>precision</strong>."
                  />
                  <LineLimitedParagraph
                    text="The design showcase provided an opportunity for <strong class='text-yellow-400'>industry professionals</strong> and <strong class='text-yellow-400'>fellow researchers</strong> to offer feedback. We gained insights into refining the <strong class='text-yellow-400'>user interface</strong> for remote monitoring and ensuring <strong class='text-yellow-400'>robust performance</strong> under inclement weather conditions."
                  />
                  <LineLimitedParagraph
                    text="Moving forward, we plan to expand our testing environments to different terrains and incorporate more advanced <strong class='text-yellow-400'>sensor fusion algorithms</strong>. Each iteration brings us closer to a truly <strong class='text-yellow-400'>autonomous solution</strong> capable of handling diverse <strong class='text-yellow-400'>real-world scenarios</strong>."
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <OnDemandVideo
                    src={AVT_TEST_VIDEO_SRC}
                    className="w-full max-w-xl rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Testing video: when the blue light is not blinking, the vehicle is in full autonomous mode.
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
