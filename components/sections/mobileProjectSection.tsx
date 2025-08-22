"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MobileProjectSection = () => {
  return (
    <section
      id="mobile-projects"
      className="relative flex flex-col justify-start items-center min-h-screen p-4 pb-20 bg-black"
    >
      {/* 섹션 타이틀 */}
      <div className="w-full text-center mb-8 mt-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">My Work</h1>
        <p className="text-sm text-gray-300">
          Explore some of my featured work below
        </p>
      </div>

      {/* 프로젝트 카드들 */}
      <div className="w-full space-y-6">
        {projects.map((project: Project) => {
          const isComingSoon = project.isComingSoon || project.description === "Coming Soon";
          const logo = logoMap[project.id];

          return (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg p-4 border border-gray-700"
            >
              {/* 프로젝트 헤더 */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                {logo && (
                  <Image
                    src={logo}
                    alt={`${project.title} Logo`}
                    width={40}
                    height={40}
                    className="object-contain w-10 h-10"
                    placeholder="blur"
                  />
                )}
              </div>

              {/* 프로젝트 설명 */}
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* 태그들 */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 3).map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs text-gray-500">+{project.tags.length - 3} more</span>
                )}
              </div>

              {/* 액션 버튼들 */}
              <div className="flex gap-2">
                {/* Git 버튼 */}
                {project.gitUrl && (
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 border border-gray-600 text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors flex items-center justify-center gap-1"
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
                    className="flex-1 px-3 py-2 bg-yellow-400 text-black text-xs font-medium rounded hover:bg-yellow-300 transition-colors text-center"
                  >
                    Visit
                  </a>
                )}

                {/* View Details 버튼 */}
                {!project.websiteUrl && (
                  isComingSoon ? (
                    <button
                      disabled
                      className="flex-1 px-3 py-2 bg-gray-600 text-gray-400 text-xs font-medium rounded cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <button className="w-full px-3 py-2 bg-yellow-400 text-black text-xs font-medium rounded hover:bg-yellow-300 transition-colors">
                        Details
                      </button>
                    </Link>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileProjectSection;
