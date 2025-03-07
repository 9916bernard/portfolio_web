"use client";

import Link from "next/link";
import psu_image from "../../assets/image/psu_image.jpg";

// 새로운 프로젝트 목록
const projects = [
  {
    id: "cosmic",
    title: "Cosmic Survivor",
    description: "Embark on a thrilling space survival adventure with mesmerizing visuals."
  },
  {
    id: "avt",
    title: "AVT",
    description: "Autonomous Vehicle Team at Penn State, pioneering real-world self-driving solutions."
  },
  {
    id: "plo",
    title: "PLO",
    description: "People Link One – a community-driven club for building innovative student apps."
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center min-h-[200vh] p-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${psu_image.src})` }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 13.25%, rgba(0,0,0,0.7) 13.25%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Project List */}
      <div className="relative z-40 mt-32 flex flex-col items-center gap-12">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="cursor-pointer bg-black/50 text-white px-8 py-6 w-80 text-center rounded-xl shadow-lg hover:scale-105 hover:bg-black/60 transition-all duration-300">
              <h3 className="text-2xl font-bold tracking-wide">{project.title}</h3>
              <p className="text-md mt-3 leading-relaxed">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
