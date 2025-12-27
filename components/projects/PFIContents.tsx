"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";
import LineLimitedParagraph from "../LineLimitedParagraph";
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

export default function PFIContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[200vh] bg-gradient-to-br from-gray-900 via-slate-800 to-emerald-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent z-10 pointer-events-none" />
        <BackButton onClick={() => router.back()} />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 text-white">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
              PFInspector
            </h1>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-200">
              Bluetooth Cycle Device Inspector
            </h2>
            <div className="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* Section 1: Overview */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-lg flex items-center justify-center text-black font-black text-2xl shadow-lg">
                    1
                  </div>
                  <h3 className="text-4xl font-bold text-white">
                    Project <span className="text-emerald-400">Overview</span>
                  </h3>
                </div>
                <div className="text-left space-y-6">
                  <LineLimitedParagraph
                    text="<strong class='text-emerald-400'>PFInspector</strong> is an application designed to connect with indoor <strong class='text-emerald-400'>Bluetooth cycling devices</strong> to directly inspect their specifications and evaluate their compatibility with Yanadoo's <strong class='text-emerald-400'>Yafit Cycle app</strong>. By streamlining the validation and integration process for new cycling devices, PFInspector aims to reduce the time and effort required for device onboarding by over <strong class='text-emerald-400'>30%</strong>."
                  />
                  <LineLimitedParagraph
                    text="The app is built using a <strong class='text-emerald-400'>React-based BLE library</strong> and supports <strong class='text-emerald-400'>Korean, English, and Chinese</strong>. It is designed to interpret and process <strong class='text-emerald-400'>bit-level signals</strong> in accordance with each device's specific protocol, ensuring accurate and reliable communication across different cycle models."
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Demo Video */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-lg flex items-center justify-center text-black font-black text-2xl shadow-lg">
                    2
                  </div>
                  <h3 className="text-4xl font-bold text-white">
                    Device Testing <span className="text-emerald-400">Demonstration</span>
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="md:w-1/2 text-left space-y-6">
                    <LineLimitedParagraph
                      text="The accompanying video demonstrates <strong class='text-emerald-400'>PFInspector</strong> testing connectivity with two different indoor cycles: <strong class='text-emerald-400'>Reborn (XQ Cycle protocol)</strong> and <strong class='text-emerald-400'>Yafit_S4 (YAFITF1 Cycle protocol)</strong>."
                    />
                    <LineLimitedParagraph
                      text="The testing sequence conducted in <strong class='text-emerald-400'>English</strong> begins at <strong class='text-emerald-400'>2:15</strong>. The application successfully establishes <strong class='text-emerald-400'>Bluetooth Low Energy (BLE)</strong> connections and parses real-time cycling data including <strong class='text-emerald-400'>speed, cadence, resistance, and power</strong> metrics."
                    />
                    <LineLimitedParagraph
                      text="This demonstration validates the app's ability to handle <strong class='text-emerald-400'>multiple device protocols</strong> and showcases the <strong class='text-emerald-400'>multilingual interface</strong> designed for international deployment."
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col items-center">
                    <div className="relative group/video">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-600 rounded-2xl blur opacity-25 group-hover/video:opacity-50 transition duration-500"></div>
                      <div className="relative">
                        <OnDemandVideo
                          src={ISYAFITTEST_VIDEO_SRC}
                          className="w-full max-w-xl"
                        />
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 italic">
                      Testing PFInspector with Reborn (XQ) and Yafit_S4 (YAFITF1) protocols. English testing starts at 2:15.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
