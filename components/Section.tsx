import bg_me from "../assets/image/bg_me.jpeg";

type SectionProps = {
  id: string;
  title: string;
  content: string;
};

const Section = ({ id, title, content }: SectionProps) => {
  // "intro" 섹션이면 높이를 200vh로, 아니면 100vh
  const heightClass = id === "intro" ? "min-h-[200vh]" : "min-h-screen";

  // "intro" 섹션에서만 배경 이미지
  const backgroundStyle =
    id === "intro"
      ? {
          backgroundImage: `url(${bg_me.src})`,
        }
      : {
        
      };

  return (
    <section
      id={id}
      className={`relative flex flex-col justify-center items-center my-8 p-8
        bg-cover bg-center bg-fixed
        ${heightClass}`}
      style={backgroundStyle}
    >
      {/* intro 섹션에서 대각선 그라데이션 오버레이 */}
      {id === "intro" && (
        <>
          {/* 대각선 오버레이 */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
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

          {/* 절대 위치로 텍스트 배치 */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {/* 첫 번째 구간 중간에 (대략 top: 10~15%, left: 10~20%) */}
            <p className="absolute text-white text-8xl font-extrabold overflow-hidden " style={{ top: "15%", left: "10%" }}>
              SUNGHEON
            </p>
            {/* 두 번째 구간 중간에 (대략 top: 45~50%, left: 30~40%) */}
            <p className="absolute text-yellow-400 text-7xl font-extrabold" style={{ top: "20%", left: "30%" }}>
              Bernard
            </p>
          </div>
        </>
      )}

      {/* 기본 섹션 컨텐츠 */}
      {/* <h2 className="text-3xl font-bold mb-4 relative z-20">{title}</h2>
      <p className="relative z-20">{content}</p> */}
    </section>
  );
};

export default Section;
