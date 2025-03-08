"use client";

import Link from "next/link";
import psu_image from "../../assets/image/psu_image.jpg";

// 새로운 프로젝트 목록
const projects = [
  {
    id: "cosmic",
    title: "Cosmic Survivor",
    description: "Embark on a thrilling space survival adventure with mesmerizing visuals.",
  },
  {
    id: "avt",
    title: "AVT",
    description:
      "Autonomous Vehicle Team at Penn State, pioneering real-world self-driving solutions.",
  },
  {
    id: "plo",
    title: "PLO",
    description:
      "People Link One – a community-driven club for building innovative student apps.",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center min-h-[150vh] p-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${psu_image.src})` }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 15.35%, rgba(0,0,0,0.7) 13.25%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Projects Title */}
      <div className="relative z-40 mb-16">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Projects</h1>
      </div>

      {/* Project List - 가로 배열 */}
      <div className="relative z-40 flex flex-row flex-wrap justify-center items-center gap-12">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="cursor-pointer group w-[350px] rounded-xl overflow-hidden border-2 border-yellow-400 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className="bg-black/50 backdrop-blur-sm px-8 py-10 text-center">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-md mt-3 text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4">
                  <span className="text-lg font-semibold text-yellow-400 uppercase tracking-wider">
                    Click to Explore
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
