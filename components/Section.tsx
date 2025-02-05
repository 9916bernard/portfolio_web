type SectionProps = {
    id: string;
    title: string;
    content: string;
  };
  
  const Section = ({ id, title, content }: SectionProps) => {
    return (
      <section id={id} className="min-h-screen flex flex-col justify-center items-center bg-black my-8 p-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
      </section>
    );
  };
  
  export default Section;
  