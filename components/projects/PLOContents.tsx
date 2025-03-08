"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";

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
        {/* 배경 오버레이: 그라데이션이 더 빠르게 시작 */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.7) 50%)",
          }}
        ></div>

        {/* Back Button */}
        <BackButton onClick={() => router.back()} />

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-24 pb-32 text-white backdrop-blur-sm">
          <h1 className="text-center text-7xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
            Lions Market &amp; Penncil
          </h1>
          <h2 className="text-center text-2xl md:text-3xl mb-12 drop-shadow-md">
            Innovative apps connecting students
          </h2>

          <div className="bg-black/60 p-8 rounded-xl shadow-xl">
            {/* Lions Market 섹션 */}
            <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
              {/* 왼쪽: 텍스트 영역 */}
              <div className="md:w-1/2">
                <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                  <span className="text-yellow-400">Lions Market</span>
                  <div className="flex justify-end">
                    <a
                      href="https://peoplelinkoneplo.my.canva.site/lionsmarket"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-blue-900 text-sm px-3 py-1 rounded hover:bg-gray-200 transition"
                    >
                      Visit Website
                    </a>
                  </div>
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Working on <span className="text-yellow-400">Lions Market</span>{" "}
                  was such a cool journey. We built a friendly <span className="text-yellow-400">mobile app</span> that helped students trade second-hand items easily – it was more about connecting our <span className="text-yellow-400">community</span> than chasing download numbers. I loved setting up a smooth Git workflow and optimizing Firebase so that everything just worked seamlessly.
                </p>
              </div>
              {/* 오른쪽: 이미지 영역 */}
              <div className="md:w-1/2 flex justify-center items-center">
                <img
                  src={plo_lions.src}
                  alt="Lions Market"
                  className="w-full max-w-sm rounded-xl shadow-lg"
                />
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* Penncil 섹션 */}
            <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
              {/* 왼쪽: 텍스트 영역 */}
              <div className="md:w-1/2">
                <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                  <span className="text-yellow-400">Penncil</span>
                  <div className="flex justify-end">
                    <a
                      href="https://peoplelinkoneplo.my.canva.site/teampencil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-blue-900 text-sm px-3 py-1 rounded hover:bg-gray-200 transition"
                    >
                      Visit Website
                    </a>
                  </div>
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  With <span className="text-yellow-400">Penncil</span>, I led an amazing team of creative minds to build a <span className="text-yellow-400">prototype app</span> that made it easy for students with similar academic interests to connect. It wasn&apos;t just coding – it was about fostering a <span className="text-yellow-400">community</span> where <span className="text-yellow-400">collaboration</span> and fun came first. We focused on making the experience intuitive and enjoyable rather than obsessing over every little metric.
                </p>
              </div>
              {/* 오른쪽: 이미지 영역 */}
              <div className="md:w-1/2 flex justify-center items-center">
                <img
                  src={plo_penncil.src}
                  alt="Penncil"
                  className="w-full max-w-sm rounded-xl shadow-lg"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
