"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import psu_image from "../../assets/image/psu_image_res.jpg";

// 프로젝트 데이터 직접 정의
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  gitUrl?: string;
  websiteUrl?: string;
  isComingSoon?: boolean;
}

const projects: Project[] = [
  {
    id: "pfinspector",
    title: "PFInspector",
    description: "Bluetooth data parsing, monitoring tool",
    tags: ["#bluetooth", "#app", "#react", "#python"],
    websiteUrl: "https://pfsdk.yanadoofitness.com/tools",
    gitUrl: "https://github.com/9916bernard/isYafit_mobile",
  },
  {
    id: "symptomsense",
    title: "SymptomSense",
    description: "AI-powered symptom checker",
    tags: ["#gemini", "#mongoDB", "#googlemap", "#openFDA", "#health"],
    gitUrl: "https://github.com/9916bernard/symptom_sense",
  },
  {
    id: "avt",
    title: "AVT",
    description: "Autonomous vehicle team",
    tags: ["#ros2", "#python", "#gitlab", "#decider", "#autonomous", "#vehicle"],
    gitUrl: "https://github.com/9916bernard/avt-controls-pipeline",
  },
  {
    id: "cosmic",
    title: "Cosmic Survivor",
    description: "Thrilling space survival game",
    tags: ["#game", "#unity", "#C#", "#googlead", "#2d"],
    gitUrl: "https://github.com/9916bernard/CosmicSurvival",
  },
  {
    id: "plo",
    title: "PLO",
    description: "Innovative student app community",
    tags: ["#community", "#app", "#Flutter", "#Firebase", "#ios", "#android"],
  },
  {
    id: "momentum",
    title: "Momentum",
    description: "Coming Soon",
    tags: ["#community", "#react", "#web", "#app", "#openAI", "#firebase"],
    isComingSoon: true,
  },
];

// 로고 이미지 import
import cosmicLogo from "../../assets/image/cos_logo.png";
import avtLogo from "../../assets/image/avt_logo.png";
import ploLogo from "../../assets/image/plo_logo.png";
import symptomSenseLogo from "../../assets/image/symptomsense_logo.png";
import pfinspectorIcon from "../../assets/pfinspector_icon.png";
import momentumLogo from "../../assets/image/momentum_logo.jpeg";

const logoMap: Record<string, StaticImageData> = {
  cosmic: cosmicLogo,
  avt: avtLogo,
  plo: ploLogo,
  symptomsense: symptomSenseLogo,
  pfinspector: pfinspectorIcon,
  momentum: momentumLogo,
};

// Git 아이콘 SVG 컴포넌트
const GitIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center min-h-[150vh] p-4 md:p-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${psu_image.src})` }}
    >
      {/* 부모 오버레이 */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      {/* 섹션 타이틀 */}
      <div className="relative z-20 text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Projects</h1>
        <p className="text-sm md:text-md text-gray-300 mt-2">
          Explore some of my featured work below
        </p>
      </div>

      {/* 프로젝트 카드 */}
      <div className="relative z-20 w-full max-w-6xl px-4">
        {/* 모든 프로젝트를 하나의 통일된 그리드로 배치 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project: Project) => {
            const isComingSoon = project.isComingSoon || project.description === "Coming Soon";
            const logo = logoMap[project.id];

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between p-4 md:p-6 bg-transparent rounded-xl border border-yellow-400 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                style={{ aspectRatio: "1 / 1.3" }}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
                  <p className="text-sm md:text-md text-gray-300 text-center">{project.description}</p>
                </div>

                {logo && (
                  <div className="flex justify-center my-3 md:my-4">
                    <Image
                      src={logo}
                      alt={`${project.title} Logo`}
                      width={150}
                      height={150}
                      className="object-contain w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
                      placeholder="blur"
                    />
                  </div>
                )}

                <div>
                  {/* Git 버튼 */}
                  {project.gitUrl && (
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full mb-1 px-4 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-all duration-200 text-sm md:text-base flex items-center justify-center gap-2"
                    >
                      <GitIcon />
                      Git
                    </a>
                  )}

                  {/* Website 버튼 */}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden w-full mt-1 mb-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-all duration-200 text-sm md:text-base block text-center"
                    >
                      <span className="relative z-10">Visit Website</span>
                      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transform rotate-12 animate-shine pointer-events-none"></span>
                    </a>
                  )}

                  {/* View Details 버튼 */}
                  {!project.websiteUrl && (
                    isComingSoon ? (
                      <button
                        disabled
                        className="w-full mt-1 mb-2 px-4 py-2 bg-gray-500 text-white font-semibold rounded cursor-not-allowed text-sm md:text-base"
                      >
                        Coming Soon
                      </button>
                    ) : (
                      <Link href={`/projects/${project.id}`}>
                        <button className="relative overflow-hidden w-full mt-1 mb-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-all duration-200 text-sm md:text-base">
                          <span className="relative z-10">View Details</span>
                          <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transform rotate-12 animate-shine pointer-events-none"></span>
                        </button>
                      </Link>
                    )
                  )}

                  <div className="mt-3 md:mt-4 flex flex-wrap gap-1 justify-center">
                    {project.tags.slice(0, 4).map((tag: string, index: number) => (
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
