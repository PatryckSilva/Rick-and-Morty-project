import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { dataHeader } from "../Header/data";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const DropDown = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={`absolute top-[50px] z-50 h-[100vh] w-screen !border-0  transition-all
        ${isOpen ? " right-0" : " right-[101vw] hidden"}`}
    >
      <div>
        <div className="mx-10 mt-5 flex flex-col items-start justify-center space-y-5 text-3xl font-medium">
          {dataHeader.map((item, index) => {
            if (item.link.startsWith("https")) {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`cursor-pointer text-center text-[17px]`}
                >
                  {item.name}
                </a>
              );
            } else {
              return (
                <Link key={index} href={item.link} passHref>
                  <span
                    className={`flex cursor-pointer items-center justify-center rounded-md text-center text-[17px] text-primary `}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            }
          })}
        </div>
        <hr className="my-4 bg-[#254244]" />
      </div>
    </div>
  );
};
