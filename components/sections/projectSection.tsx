"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import psu_image from "../../assets/image/psu_image_res.jpg";

// 로고 이미지 import
import cosmicLogo from "../../assets/image/cos_logo.png";
import avtLogo from "../../assets/image/avt_logo.png";
import ploLogo from "../../assets/image/plo_logo.png";
import symptomSenseLogo from "../../assets/image/symptomsense_logo.png";
import momentumLogo from "../../assets/image/momentum_logo.jpeg";

const projects = [
  {
    id: "cosmic",
    title: "Cosmic Survivor",
    description: "Thrilling space survival game",
    tags: ["#game", "#unity", "#C#", "#googlead", "#2d"],
  },
  {
    id: "avt",
    title: "AVT",
    description: "Autonomous vehicle team",
    tags: ["#ros2", "#python", "#gitlab", "#decider", "#autonomous", "#vehicle"],
  },
  {
    id: "plo",
    title: "PLO",
    description: "Innovative student app community",
    tags: ["#community", "#app", "#Flutter", "#Firebase", "#ios", "#android"],
  },
  {
    id: "symptomsense",
    title: "SymptomSense",
    description: "AI-powered symptom checker",
    tags: ["#typescript", "#gemini", "#mongoDB", "#googlemap", "#openFDA", "#health"],
  },
  {
    id: "momentum",
    title: "Momentum",
    description: "Coming Soon",
    tags: ["#community", "#react", "#typescript", "#web", "#app", "#openAI", "#firebase"],
  },
];

const logoMap: Record<string, StaticImageData> = {
  cosmic: cosmicLogo,
  avt: avtLogo,
  plo: ploLogo,
  symptomsense: symptomSenseLogo,
  momentum: momentumLogo,
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center min-h-[150vh] p-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${psu_image.src})` }}
    >
      {/* 부모 오버레이 */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      {/* 섹션 타이틀 */}
      <div className="relative z-20 text-center mb-12">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Projects</h1>
        <p className="text-md text-gray-300 mt-2">
          Explore some of my featured work below
        </p>
      </div>

      {/* 프로젝트 카드 */}
      <div className="relative z-20 w-full max-w-6xl px-4 space-y-8">
        {/* 첫 줄: 3개 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => {
            const isComingSoon = project.description === "Coming Soon";
            const logo = logoMap[project.id];

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between p-6 bg-transparent rounded-xl border border-yellow-400 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                style={{ aspectRatio: "1 / 1.3" }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
                  <p className="text-md text-gray-300 text-center">{project.description}</p>
                </div>

                {logo && (
                  <div className="flex justify-center my-4">
                    <Image
                      src={logo}
                      alt={`${project.title} Logo`}
                      width={200}
                      height={200}
                      className="object-contain"
                      placeholder="blur"
                    />
                  </div>
                )}

                <div>
                  {isComingSoon ? (
                    <button
                      disabled
                      className="w-full mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <Link href={`/projects/${project.id}`}>
                      <button className="relative overflow-hidden w-full mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-all duration-200">
                        <span className="relative z-10">View Details</span>
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transform rotate-12 animate-shine pointer-events-none"></span>
                      </button>
                    </Link>
                  )}
                  <div className="mt-4 flex flex-wrap gap-1 justify-center">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 두 번째 줄: 2개, 가운데 정렬 */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {projects.slice(3).map((project) => {
            const isComingSoon = project.description === "Coming Soon";
            const logo = logoMap[project.id];

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between p-6 bg-transparent rounded-xl border border-yellow-400 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                style={{ aspectRatio: "1 / 1.3", width: "100%", maxWidth: "20rem" }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
                  <p className="text-md text-gray-300 text-center">{project.description}</p>
                </div>

                {logo && (
                  <div className="flex justify-center my-4">
                    <Image
                      src={logo}
                      alt={`${project.title} Logo`}
                      width={200}
                      height={200}
                      className="object-contain"
                      placeholder="blur"
                    />
                  </div>
                )}

                <div>
                  {isComingSoon ? (
                    <button
                      disabled
                      className="w-full mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <Link href={`/projects/${project.id}`}>
                      <button className="relative overflow-hidden w-full mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-all duration-200">
                        <span className="relative z-10">View Details</span>
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transform rotate-12 animate-shine pointer-events-none"></span>
                      </button>
                    </Link>
                  )}
                  <div className="mt-4 flex flex-wrap gap-1 justify-center">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
