// app/projects/[id]/page.tsx

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "../../../../components/BackButton";
import PageTransition from "../../../../components/PageTransition";

import avt_bg from "../../../../assets/image/avt_bg_noel.jpeg";

const projectDetails: Record<string, { title: string; description: string; image: string }> = {
  avt: {
    title: "AVT",
    description: "Autonomous Vehicle Team at PSU",
    image: avt_bg.src,
  },
  plo: {
    title: "PLO",
    description: "Predictive Learning Optimization",
    image: avt_bg.src,
  },
  datafest: {
    title: "DATAFEST",
    description: "Data Analysis Challenge",
    image: "/images/datafest.jpg",
  },
  others: {
    title: "Others",
    description: "Various collaborations and projects",
    image: "/images/others.jpg",
  },
};

const ProjectPage = () => {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<
    { title: string; description: string; image: string } | null
  >(null);

  useEffect(() => {
    if (params.id) {
      const projectData = projectDetails[params.id as string];
      setProject(projectData || null);
    }
  }, [params.id]);

  if (!project) return <p className="text-white">Project not found.</p>;

  return (
    <PageTransition>
      {/*
        (1) 가장 바깥 래퍼:
        - 세로 길이를 넉넉히(200vh) 줘서 스크롤 생성
        - 배경은 fixed + cover
      */}
      <div
        className="relative min-h-[200vh] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
        {/*
        (2) 배경을 좀 더 어둡게 하고 싶다면 오버레이를 추가 가능
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        */}

        {/*
          (3) 실제 내용(텍스트, 영상)은 배경 위에 놓이도록 relative + z-10 이상
          상단/하단에 여백을 넣어 스크롤 시 배경이 잘 보이도록
        */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 pt-12 pb-32 text-white">
          {/* 제목/부제목 더 크게 & 화면 상단으로 배치 */}
          <h1 className="text-center text-7xl font-extrabold mb-4">{project.title}</h1>
          <h2 className="text-center text-3xl mb-12">{project.description}</h2>

          {/* 'avt'라면 영상 + 설명 표시 */}
          {params.id === "avt" && (
            <div className="flex flex-col md:flex-row items-start justify-center gap-8">
              {/* 왼쪽: 영상 (20% 정도로 설정해서 이전보다 크게) */}
              <div style={{ width: "20%" }} className="min-w-[200px]">
                <video
                  src="/video/avt_car_back.MOV"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>

              {/* 오른쪽: 설명 (배경 제거, 줄바꿈 예시로 p 태그 사용) */}
              <div className="md:flex-1 w-full p-2">
                <h2 className="text-3xl font-semibold mb-2">
                  Autonomous Vehicle Project - Controls Team Leader
                </h2>
                <p className="text-sm text-gray-200 mb-4">Aug 2024 – Dec 2024</p>
                <div className="space-y-4 text-gray-200 leading-relaxed">
                  <p>
                    Created the ‘Sensor Decider,’ a core pipeline component in ROS2 using Python to
                    integrate data from HDMaps, LiDAR, and Camera, publishing it to the Control
                    State Machine for generating real-time vehicle trajectories.
                  </p>
                  <p>
                    Resolved uncertainty in incoming perception data by defining a standardized
                    input format for the pipeline, developing a mock dataset publisher for
                    controlled testing, and collaborating with the perception team through iterative
                    debugging.
                  </p>
                  <p>
                    Presented at prototype demonstration and design showcase, enabling the car to
                    operate in full autonomous mode by stopping for stop signs, dynamic objects, and
                    traffic lights, with real-time data generated within an 80 cm error range.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* (4) 뒤로가기 버튼 */}
        <BackButton onClick={() => router.back()} />
      </div>
    </PageTransition>
  );
};

export default ProjectPage;
