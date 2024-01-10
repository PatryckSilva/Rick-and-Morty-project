import { FaDiscord, FaMediumM, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <section
      className={`bg-header relative flex w-screen flex-col justify-center gap-5 px-8 py-12 lg:flex-row lg:gap-[150px] xl:gap-[350px] xl:px-10 2xl:gap-[500px] 2xl:px-24`}
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="relative h-[53px] w-[100px] cursor-pointer "></div>
        <span className={`text-center font-medium text-secondary`}>
          Designed & Engineered by{" "}
          <span
            className={`cursor-pointer underline`}
            onClick={() => open("https://apexnft.com.br/")}
          >
            Apex NFT Brasil
          </span>{" "}
          |{" "}
          <span
            className={`cursor-pointer underline`}
            onClick={() =>
              open("https://app.connect3.io/services/blockchain-apis")
            }
          >
            Blockchain APIs provided by Connect3.
          </span>
        </span>
      </div>
      <div
        className={`right-[3%] flex items-end justify-center gap-5 md:absolute md:bottom-[10%]`}
      >
        <FaDiscord
          size={30}
          className={`cursor-pointer hover:text-[#2400ff]`}
        />
        <FaTwitter
          size={30}
          className={`cursor-pointer hover:text-[#2400ff]`}
        />
        <FaMediumM
          size={30}
          className={`cursor-pointer hover:text-[#2400ff]`}
        />
      </div>
    </section>
  );
};
