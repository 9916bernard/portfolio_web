"use client";

import { useRouter } from "next/navigation";
import BackButton from "../../BackButton";
import PageTransition from "../../PageTransition";
import Image from "next/image";

import plo_lions from "../../../assets/image/plo_lions.jpg";
import plo_penncil from "../../../assets/image/plo_penncil.png";

export default function MobilePLOContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black text-white">
        <BackButton onClick={() => router.back()} />

        <div className="w-full px-4 pt-20 pb-20">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-3">
              Lions Market &amp; Penncil
            </h1>
            <h2 className="text-lg text-gray-300 mb-6">
              Innovative apps connecting students
            </h2>
          </div>



          <div className="space-y-8">
            {/* Lions Market 섹션 */}
            <section className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-yellow-400 border-b border-gray-600 pb-2">
                  Lions Market
                </h3>
                <a
                  href="https://peoplelinkoneplo.my.canva.site/lionsmarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black text-xs px-3 py-1 rounded hover:bg-yellow-300 transition"
                >
                  Visit Website
                </a>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  Working on <span className="text-yellow-400 font-semibold">Lions Market</span>{" "}
                  was such a cool journey. We built a friendly <span className="text-yellow-400 font-semibold">mobile app</span> that helped students trade second-hand items easily – it was more about connecting our <span className="text-yellow-400 font-semibold">community</span> than chasing download numbers. I loved setting up a smooth Git workflow and optimizing Firebase so that everything just worked seamlessly.
                </p>
                
                {/* 이미지 */}
                <div className="w-full">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={plo_lions}
                      alt="Lions Market"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Penncil 섹션 */}
            <section className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-yellow-400 border-b border-gray-600 pb-2">
                  Penncil
                </h3>
                <a
                  href="https://peoplelinkoneplo.my.canva.site/teampencil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black text-xs px-3 py-1 rounded hover:bg-yellow-300 transition"
                >
                  Visit Website
                </a>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  With <span className="text-yellow-400 font-semibold">Penncil</span>, I led an amazing team of creative minds to build a <span className="text-yellow-400 font-semibold">prototype app</span> that made it easy for students with similar academic interests to connect. It wasn&apos;t just coding – it was about fostering a <span className="text-yellow-400 font-semibold">community</span> where <span className="text-yellow-400 font-semibold">collaboration</span> and fun came first. We focused on making the experience intuitive and enjoyable rather than obsessing over every little metric.
                </p>
                
                {/* 이미지 */}
                <div className="w-full">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={plo_penncil}
                      alt="Penncil"
                      fill
                      className="object-cover"
                    />
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
