"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";
import Image from "next/image";

// 배경 이미지 (예: /assets/image/plo_bg.jpg)
import plo_bg from "../../assets/image/plo_bg.jpg";
// 추가 이미지
import plo_lions from "../../assets/image/plo_lions.jpg";
import plo_penncil from "../../assets/image/plo_penncil.png";

export default function PLOContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[100vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${plo_bg.src})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none"></div>

        <BackButton onClick={() => router.back()} />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 text-white">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
              Lions Market &amp; Penncil
            </h1>
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-200">
              Innovative apps connecting students
            </h2>
            <div className="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Lions Market 섹션 */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-blue-900/40 to-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="md:w-1/2 space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="text-4xl font-bold text-blue-400">Lions Market</h3>
                      </div>
                      <a
                        href="https://peoplelinkoneplo.my.canva.site/lionsmarket"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-gray-700/30">
                      <p className="text-base leading-relaxed text-gray-200">
                        Working on <span className="text-blue-400 font-semibold">Lions Market</span> was such a cool journey. We built a friendly <span className="text-blue-400 font-semibold">mobile app</span> that helped students trade second-hand items easily – it was more about connecting our <span className="text-blue-400 font-semibold">community</span> than chasing download numbers. I loved setting up a smooth Git workflow and optimizing Firebase so that everything just worked seamlessly.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-center">
                    <div className="relative group/img">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-25 group-hover/img:opacity-50 transition duration-500"></div>
                      <Image
                        src={plo_lions}
                        alt="Lions Market"
                        width={400}
                        height={300}
                        className="relative w-full max-w-sm rounded-2xl shadow-2xl transform group-hover/img:scale-105 transition duration-500"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Penncil 섹션 */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-indigo-900/40 to-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-indigo-400/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="md:w-1/2 space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h3 className="text-4xl font-bold text-indigo-400">Penncil</h3>
                      </div>
                      <a
                        href="https://peoplelinkoneplo.my.canva.site/teampencil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-gray-700/30">
                      <p className="text-base leading-relaxed text-gray-200">
                        With <span className="text-indigo-400 font-semibold">Penncil</span>, I led an amazing team of creative minds to build a <span className="text-indigo-400 font-semibold">prototype app</span> that made it easy for students with similar academic interests to connect. It wasn&apos;t just coding – it was about fostering a <span className="text-indigo-400 font-semibold">community</span> where <span className="text-indigo-400 font-semibold">collaboration</span> and fun came first. We focused on making the experience intuitive and enjoyable rather than obsessing over every little metric.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-center">
                    <div className="relative group/img">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl blur opacity-25 group-hover/img:opacity-50 transition duration-500"></div>
                      <Image
                        src={plo_penncil}
                        alt="Penncil"
                        width={400}
                        height={300}
                        className="relative w-full max-w-sm rounded-2xl shadow-2xl transform group-hover/img:scale-105 transition duration-500"
                        priority
                      />
                    </div>
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
