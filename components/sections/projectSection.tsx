"use client";

import psu_image from "../../assets/image/psu_image.jpg";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center min-h-[200vh] p-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${psu_image.src})` }}
    >
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 13.25%, rgba(0,0,0,0.7) 13.25%, rgba(0,0,0,0.9) 100%)" }}
      />
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-center items-center">
        <p className="text-white text-4xl font-extrabold mt-10">My Projects</p>
        <p className="text-white text-xl font-semibold mt-3 max-w-lg text-center leading-relaxed">
          A showcase of my recent work and collaborations,
          <br />
          reflecting my growth as a developer and problem solver.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
