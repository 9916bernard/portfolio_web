"use client";

import { useRouter } from "next/navigation";
import BackButton from "../../BackButton";
import PageTransition from "../../PageTransition";
import React, { useState, memo } from "react";

const ISYAFITTEST_VIDEO_SRC = "/video/Isyafittest.mp4";

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

export default function MobilePFIContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black text-white">
        <BackButton onClick={() => router.back()} />

        <div className="w-full px-4 pt-20 pb-20">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-3">
              PFInspector
            </h1>
            <h2 className="text-lg text-gray-300 mb-6">
              Bluetooth Cycle Device Inspector
            </h2>
          </div>

          <div className="space-y-8">
            {/* Section 1: Overview */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400 border-b border-gray-600 pb-2">
                1. Project Overview
              </h3>

              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  <span className="text-emerald-400 font-semibold">PFInspector</span> is an application designed to connect with indoor <span className="text-emerald-400 font-semibold">Bluetooth cycling devices</span> to directly inspect their specifications and evaluate their compatibility with Yanadoo's <span className="text-emerald-400 font-semibold">Yafit Cycle app</span>. By streamlining the validation and integration process for new cycling devices, PFInspector aims to reduce the time and effort required for device onboarding by over <span className="text-emerald-400 font-semibold">30%</span>.
                </p>

                <p className="text-sm leading-relaxed">
                  The app is built using a <span className="text-emerald-400 font-semibold">React-based BLE library</span> and supports <span className="text-emerald-400 font-semibold">Korean, English, and Chinese</span>. It is designed to interpret and process <span className="text-emerald-400 font-semibold">bit-level signals</span> in accordance with each device's specific protocol, ensuring accurate and reliable communication across different cycle models.
                </p>
              </div>
            </section>

            {/* Section 2: Demo Video */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400 border-b border-gray-600 pb-2">
                2. Device Testing Demonstration
              </h3>

              <div className="space-y-4 mb-6">
                <p className="text-sm leading-relaxed">
                  The accompanying video demonstrates <span className="text-emerald-400 font-semibold">PFInspector</span> testing connectivity with two different indoor cycles: <span className="text-emerald-400 font-semibold">Reborn (XQ Cycle protocol)</span> and <span className="text-emerald-400 font-semibold">Yafit_S4 (YAFITF1 Cycle protocol)</span>.
                </p>

                <p className="text-sm leading-relaxed">
                  The testing sequence conducted in <span className="text-emerald-400 font-semibold">English</span> begins at <span className="text-emerald-400 font-semibold">2:15</span>. The application successfully establishes <span className="text-emerald-400 font-semibold">Bluetooth Low Energy (BLE)</span> connections and parses real-time cycling data including <span className="text-emerald-400 font-semibold">speed, cadence, resistance, and power</span> metrics.
                </p>

                <p className="text-sm leading-relaxed">
                  This demonstration validates the app's ability to handle <span className="text-emerald-400 font-semibold">multiple device protocols</span> and showcases the <span className="text-emerald-400 font-semibold">multilingual interface</span> designed for international deployment.
                </p>
              </div>

              {/* 비디오 */}
              <div className="w-full">
                <OnDemandVideo
                  src={ISYAFITTEST_VIDEO_SRC}
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Testing PFInspector with Reborn (XQ) and Yafit_S4 (YAFITF1) protocols. English testing starts at 2:15.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
