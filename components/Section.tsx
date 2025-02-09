"use client";

import bg_me from "../assets/image/bg_me.jpeg";
import psu_image from "../assets/image/psu_image.jpg";
import logo from "../assets/image/logo-transparent-png.png";

type SectionProps = {
  id: string;
  title: string;
  content: string;
};

const Section = ({ id, title, content }: SectionProps) => {
  // intro, projects는 200vh, 나머지는 100vh
  let heightClass = "min-h-screen";
  if (id === "intro" || id === "projects") {
    heightClass = "min-h-[200vh]";
  }

  // 섹션별 배경 이미지
  let backgroundStyle = {};
  if (id === "intro") {
    backgroundStyle = { backgroundImage: `url(${bg_me.src})` };
  } else if (id === "projects") {
    backgroundStyle = { backgroundImage: `url(${psu_image.src})` };
  }

  return (
    <section
      id={id}
      className={`
        relative flex flex-col justify-center items-center
        p-8 bg-cover bg-center bg-fixed
        ${heightClass}
      `}
      style={backgroundStyle}
    >
      {id === "intro" && (
        <>
          {/* ============ Intro Section ============ */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              // Intro 섹션의 기존 그라데이션
              backgroundImage:
                "linear-gradient(135deg," +
                " rgba(0,0,0,0.9) 0%," +
                " rgba(0,0,0,0.9) 25%," +
                " rgba(0,0,0,0.4) 25%," +
                " rgba(0,0,0,0.4) 66.67%," +
                " rgba(0,0,0,0.9) 66.67%," +
                " rgba(0,0,0,0.9) 100%)",
            }}
          />
          <div className="absolute inset-0 z-30 pointer-events-none">
            {/* 로고 */}
            <img
              src={logo.src}
              alt="Logo"
              className="absolute"
              style={{
                top: "1%",
                left: "1%",
                width: "400px",
                height: "auto",
              }}
            />
            {/* 이름 */}
            <p
              className="absolute text-white text-8xl font-extrabold"
              style={{ top: "15%", left: "10%" }}
            >
              SUNGHEON
            </p>
            <p
              className="absolute text-yellow-400 text-7xl font-extrabold"
              style={{ top: "20%", left: "30%" }}
            >
              Bernard
            </p>
            {/* 캐치프레이즈 */}
            <p
              className="absolute text-white text-1xl font-semibold leading-tight"
              style={{ top: "20%", left: "11%" }}
            >
              Fast <span className="text-yellow-400">Learner</span>,{" "}
              <span className="text-yellow-400">Positive</span> Mindset
              <br />
              and Always <span className="text-yellow-400">Innovating</span>!
            </p>
            {/* 소개 (우측 하단) */}
            <div
              className="absolute text-white text-xl font-medium max-w-md leading-relaxed"
              style={{
                bottom: "5%",
                right: "5%",
                pointerEvents: "none",
              }}
            >
              <p>
                Hello! I&apos;m a{" "}
                <span className="text-yellow-400 font-bold">
                  Software Developer
                </span>{" "}
                currently pursuing my{" "}
                <span className="text-yellow-400 font-bold">
                  B.S. in Computer Science
                </span>{" "}
                (Class of 2026).
              </p>
              <p className="mt-2">
                I pride myself on my{" "}
                <span className="text-yellow-400 font-bold">fast learning</span>{" "}
                abilities and{" "}
                <span className="text-yellow-400 font-bold">collaborative</span>{" "}
                spirit, always eager to adapt to new challenges. With a{" "}
                <span className="text-yellow-400 font-bold">positive mindset</span>{" "}
                and strong interpersonal skills, I love working in teams that
                value open communication and shared success.
              </p>
              <p className="mt-2">
                Plus, I&apos;m not afraid to{" "}
                <span className="text-yellow-400 font-bold">innovate</span>
                —constantly pushing boundaries to discover fresh ideas and
                solutions.
              </p>

              <h3 className="text-yellow-400 font-bold text-2xl mt-6 mb-2">
                Highlights
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <span className="text-yellow-400">Penn State</span> - Computer
                  Science, graduating{" "}
                  <span className="font-bold">Spring 2026</span>
                </li>
                <li>
                  Awarded{" "}
                  <span className="text-yellow-400 font-bold">
                    DataFest Best in Show
                  </span>{" "}
                  for analytical excellence
                </li>
                <li>
                  Developer Intern at Maf Games: integrated ranking system, Google
                  Ads, Firebase
                </li>
                <li>
                  QA Intern at Naddic Games: reduced bugs by 25% for{" "}
                  <em>Closers</em>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {id === "projects" && (
        <>
          {/* ============ Projects Section ============ */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              // 왼쪽 위 25%만 투명도 0.4, 나머지 0.9
              backgroundImage:
                "linear-gradient(135deg," +
                " rgba(0,0,0,0.4) 0%," +   // 왼쪽 위 삼각형 투명
                " rgba(0,0,0,0.4) 13.25%," + // 0~25%: 0.4
                " rgba(0,0,0,0.7) 13.25%," + // 25%~100%: 0.9 (불투명)
                " rgba(0,0,0,0.9) 100%)",
            }}
          />
          <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-center items-center">
            <p className="text-white text-4xl font-extrabold mt-10">My Projects</p>
            <p className="text-white text-xl font-semibold mt-3 max-w-lg text-center leading-relaxed">
              A showcase of my recent work and collaborations,
              <br />
              reflecting my growth as a developer and problem solver.
            </p>
            {/* 추가 프로젝트 정보나 카드 등을 여기서 추가 */}
          </div>
        </>
      )}

      {/* 다른 섹션들은 여기서 else if 로 추가 가능 */}

      <h2 className="hidden text-1xl font-bold mb-4 relative z-20">{title}</h2>
      <p className="hidden relative z-20">{content}</p>
    </section>
  );
};

export default Section;
