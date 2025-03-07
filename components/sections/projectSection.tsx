"use client";

import Link from "next/link";
import psu_image from "../../assets/image/psu_image.jpg";

const projects = [
  { id: "avt",      title: "AVT",      description: "Autonomous Vehicle Team project at Penn State." },
  { id: "plo",      title: "PLO",      description: "Project related to predictive learning optimization." },
  { id: "datafest", title: "DATAFEST", description: "Data analysis competition experience." },
  { id: "others",   title: "Others",   description: "Other notable projects and collaborations." },
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

      {/* Project List (세로 배치) */}
      <div className="relative z-40 mt-20 flex flex-col items-center gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="cursor-pointer bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg hover:bg-opacity-80 transition w-80 text-center">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-md mt-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
