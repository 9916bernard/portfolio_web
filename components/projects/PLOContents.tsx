"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";

export default function PLOContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="relative min-h-[100vh] bg-fixed bg-cover bg-center bg-gradient-to-b from-blue-500 to-blue-900">
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
              <div className="md:w-1/2 text-left">
                <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                  Lions Market
                  <a
                    href="https://peoplelinkoneplo.my.canva.site/lionsmarket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 inline-block bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200"
                  >
                    Visit
                  </a>
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Working on Lions Market was such a cool journey. We built a
                  friendly mobile app that helped students trade second-hand
                  items easily – it was more about connecting our community than
                  chasing download numbers. I loved setting up a smooth Git
                  workflow and optimizing Firebase so that everything just
                  worked seamlessly.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-center">
                {/* 이미지나 기타 요소가 있다면 여기에 배치 */}
              </div>
            </section>

            <hr className="border-gray-600 mb-12" />

            {/* Penncil 섹션 */}
            <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 text-left">
                <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                  Penncil
                  <a
                    href="https://peoplelinkoneplo.my.canva.site/teampencil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 inline-block bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200"
                  >
                    Visit
                  </a>
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  With Penncil, I led an amazing team of creative minds to build
                  a prototype app that made it easy for students with similar
                  academic interests to connect. It wasn’t just coding – it was
                  about fostering a community where collaboration and fun came
                  first. We focused on making the experience intuitive and
                  enjoyable rather than obsessing over every little metric.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-center">
                {/* 이미지나 기타 요소가 있다면 여기에 배치 */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
