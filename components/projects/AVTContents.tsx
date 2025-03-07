"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";
import LineLimitedParagraph from "../LineLimitedParagraph";

// 이미지 &amp; 영상 경로 (예시)
import avt_bg from "../../assets/image/avt_bg_noel.jpeg";
import avt_group from "../../assets/image/avt_group.jpeg";

const BACKCAR_VIDEO_SRC = "/video/avt_car_back.MOV";
const AVT_TEST_VIDEO_SRC = "/video/avt_test.MOV";

export default function AVTContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[300vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${avt_bg.src})` }}
      >
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10 pointer-events-none"></div>

        {/* Back Button */}
        <BackButton onClick={() => router.back()} />

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-24 pb-32 text-white backdrop-blur-sm">
          <h1 className="text-center text-7xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
            AVT
          </h1>
          <h2 className="text-center text-2xl md:text-3xl mb-12 drop-shadow-md">
            Autonomous Vehicle Team at PSU
          </h2>

          <div className="bg-black/60 p-8 rounded-xl shadow-xl">
            {/* 첫 번째 섹션 */}
            <section className="mb-12 flex flex-col md:flex-row gap-8">
              {/* 텍스트 영역 */}
              <div className="md:w-1/2 text-left">
                <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                  1. Joining the{" "}
                  <strong className="text-yellow-400">
                    Penn State Advanced Vehicle Team (AVT)
                  </strong>
                </h3>
                <LineLimitedParagraph
                  text="In August 2024, I joined the <strong class=&apos;text-yellow-400&apos;>Penn State Advanced Vehicle Team (AVT)</strong>. The <strong class=&apos;text-yellow-400&apos;>Penn State AVT&apos;s mission</strong> is to offer an unparalleled learning experience for students by developing algorithms for <strong class=&apos;text-yellow-400&apos;>autonomous driving</strong>, re-engineering <strong class=&apos;text-yellow-400&apos;>electric vehicles</strong> to enhance driving range, and improving vehicle architecture while maintaining consumer demand."
                />
                <LineLimitedParagraph
                  text="Since 1988, the <strong class=&apos;text-yellow-400&apos;>Penn State AVT</strong> has competed in the <strong class=&apos;text-yellow-400&apos;>Advanced Vehicle Technology Competitions</strong>, focusing on building a <strong class=&apos;text-yellow-400&apos;>fuel-efficient vehicle</strong> without compromising performance or safety."
                />
                <LineLimitedParagraph
                  text="I was excited to join a team that emphasizes <strong class=&apos;text-yellow-400&apos;>real-world applications</strong> of <strong class=&apos;text-yellow-400&apos;>cutting-edge engineering</strong>. From day one, it was clear that <strong class=&apos;text-yellow-400&apos;>collaboration</strong> and <strong class=&apos;text-yellow-400&apos;>hands-on learning</strong> are central to <strong class=&apos;text-yellow-400&apos;>AVT&apos;s culture</strong>."
                />
                <LineLimitedParagraph
                  text="We regularly partner with <strong class=&apos;text-yellow-400&apos;>industry sponsors</strong> and <strong class=&apos;text-yellow-400&apos;>academic departments</strong>, ensuring that each member gains exposure to <strong class=&apos;text-yellow-400&apos;>multi-disciplinary projects</strong>. It&apos;s a fast-paced environment, but the support from <strong class=&apos;text-yellow-400&apos;>faculty</strong> and <strong class=&apos;text-yellow-400&apos;>alumni</strong> helps keep our goals on track."
                />
              </div>

              {/* 이미지 영역 */}
              <div className="md:w-1/2 flex flex-col items-center">
                <img
                  src={avt_group.src}
                  alt="AVT Group"
                  className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
                  style={{ width: "600px", height: "auto" }}
                />
                <p className="text-gray-400 text-sm mt-2">
                  FA 2024 AVT – I&apos;m standing at the far left.
                </p>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 두 번째 섹션 */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                2. Building the{" "}
                <strong className="text-yellow-400">“Sensor Decider”</strong>
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* 텍스트 영역 */}
                <div className="md:w-1/2 text-left">
                  <LineLimitedParagraph
                    text="I developed a core pipeline component in <strong class=&apos;text-yellow-400&apos;>ROS2</strong> using <strong class=&apos;text-yellow-400&apos;>Python</strong> to integrate data from <strong class=&apos;text-yellow-400&apos;>HDMaps</strong>, <strong class=&apos;text-yellow-400&apos;>LiDAR</strong>, and <strong class=&apos;text-yellow-400&apos;>Camera</strong>. This module publishes data to the <strong class=&apos;text-yellow-400&apos;>Control State Machine</strong>, generating <strong class=&apos;text-yellow-400&apos;>real-time vehicle trajectories</strong>."
                  />
                  <LineLimitedParagraph
                    text="By synthesizing multiple sensor inputs simultaneously, the system can more reliably account for <strong class=&apos;text-yellow-400&apos;>dynamic objects</strong> on the road and update trajectories at <strong class=&apos;text-yellow-400&apos;>high frequency</strong>."
                  />
                  <LineLimitedParagraph
                    text="Additionally, we introduced a robust <strong class=&apos;text-yellow-400&apos;>error-handling routine</strong> to ensure the pipeline gracefully recovers from unexpected sensor dropouts or corrupted data, which was crucial for <strong class=&apos;text-yellow-400&apos;>real-world viability</strong>."
                  />
                  <LineLimitedParagraph
                    text="(This was the <strong class=&apos;text-yellow-400&apos;>first time</strong> we tested real sensor inputs from the <strong class=&apos;text-yellow-400&apos;>Perception team</strong> directly on the car.)"
                  />
                </div>
                {/* 영상 영역 */}
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <video
                    src={BACKCAR_VIDEO_SRC}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
                    style={{ width: "600px", height: "auto" }}
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    First sensor test: captured the initial sensor integration on the car.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* 세 번째 섹션 */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2 text-left">
                3. Prototype Demonstration and{" "}
                <strong className="text-yellow-400">Design Showcase</strong>
              </h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* 텍스트 영역 */}
                <div className="md:w-1/2 text-left">
                  <LineLimitedParagraph
                    text="Ultimately, the car was able to operate in <strong class=&apos;text-yellow-400&apos;>full autonomous mode</strong> by recognizing <strong class=&apos;text-yellow-400&apos;>dynamic objects</strong> and <strong class=&apos;text-yellow-400&apos;>traffic signals</strong>. Our demonstration validated <strong class=&apos;text-yellow-400&apos;>real-time data generation</strong> within an 80 cm error range, highlighting the system&apos;s <strong class=&apos;text-yellow-400&apos;>precision</strong>."
                  />
                  <LineLimitedParagraph
                    text="The design showcase provided an opportunity for <strong class=&apos;text-yellow-400&apos;>industry professionals</strong> and <strong class=&apos;text-yellow-400&apos;>fellow researchers</strong> to offer feedback. We gained insights into refining the <strong class=&apos;text-yellow-400&apos;>user interface</strong> for remote monitoring and ensuring <strong class=&apos;text-yellow-400&apos;>robust performance</strong> under inclement weather conditions."
                  />
                  <LineLimitedParagraph
                    text="Moving forward, we plan to expand our testing environments to different terrains and incorporate more advanced <strong class=&apos;text-yellow-400&apos;>sensor fusion algorithms</strong>. Each iteration brings us closer to a truly <strong class=&apos;text-yellow-400&apos;>autonomous solution</strong> capable of handling diverse <strong class=&apos;text-yellow-400&apos;>real-world scenarios</strong>."
                  />
                </div>
                {/* 영상 영역 */}
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                  <video
                    src={AVT_TEST_VIDEO_SRC}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
                    style={{ width: "600px", height: "auto" }}
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
