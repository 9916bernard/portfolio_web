"use client";

import Link from "next/link";
import psu_image from "../../assets/image/psu_image.jpg";

const projects = [
  {
    id: "cosmic",
    title: "Cosmic Survivor",
    description: "Thrilling space survival game",
  },
  {
    id: "avt",
    title: "AVT",
    description: "Autonomous vehicle team",
  },
  {
    id: "plo",
    title: "PLO",
    description: "Innovative student app community",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center min-h-[150vh] p-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${psu_image.src})` }}
    >
      {/* 부모의 대각선 그라데이션을 살리기 위해 부분 투명 오버레이만 사용 */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* 섹션 타이틀 */}
      <div className="relative z-20 text-center mb-12">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Projects</h1>
        <p className="text-md text-gray-300 mt-2">
          Explore some of my featured work below
        </p>
      </div>

      {/* 프로젝트 목록 - 세로 배치 */}
      <div className="relative z-20 flex flex-col gap-12 w-full max-w-3xl px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center p-6 bg-transparent rounded-xl border border-yellow-400 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* 프로젝트 타이틀 */}
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            {/* 한 줄 설명 */}
            <p className="text-md text-gray-300 text-center">{project.description}</p>
            {/* 버튼 */}
            <Link href={`/projects/${project.id}`}>
              <button className="relative overflow-hidden mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-all duration-200">
                <span className="relative z-10">View Details</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transform rotate-12 animate-shine pointer-events-none"></span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
