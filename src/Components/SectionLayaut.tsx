type SectionLayautProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const SectionLayaut = ({ title, subtitle, children }: SectionLayautProps) => {
  return (
    <section className="w-full pt-10 px-5 flex flex-col gap-10 lg:px-10 xl:px-20">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl text-text-color font-medium text-center text-pretty md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <span className="text-md text-text-color/60 font-medium text-center text-pretty md:text-lg lg:text-xl lg:font-normal">
          {subtitle}
        </span>
      </div>
      {children}
    </section>
  );
};

export default SectionLayaut;
