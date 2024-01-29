import Image from "next/image";

const PresentationFrame = () => {
  return (
    <main
      className={`dark:bg-black bg-cover bg-center py-28 md:py-32 flex flex-col md:flex-row items-center justify-center w-screen gap-8`}
    >
      <aside className={`w-1/2 flex justify-center items-center`}>
        <div
          className={`flex flex-col items-center justify-center gap-8 lg:gap-28 text-center md:items-start md:text-left`}
        >
          <h1
            className={`text-3xl md:text-3xl lg:text-5xl max-w-[350px] font-semibold`}
          >
            Saiba tudo em um só <span className={`text-rick_blue`}>lugar</span>.
          </h1>

          <span className={`lg:text-xl w-[250px] lg:w-[300px]`}>
            Personagens. localizações, episódios e muito mais.
          </span>
        </div>
      </aside>
      <figure
        className={`relative w-[300px] h-[300px] lg:w-[550px] lg:h-[550px]`}
      >
        <Image
          alt="rick background"
          src={"/images/backgrounds/Highlight.png"}
          objectFit="contain"
          layout="fill"
        />
      </figure>
    </main>
  );
};

export default PresentationFrame;
