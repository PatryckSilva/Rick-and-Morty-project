"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { DropDown } from "../HeaderMobile";
import { dataHeader } from "./data";

// interface Props {
//   className?: string;
//   offset?: number;
// }
// interface Countdown {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

export const Header = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function toggleMobileMenu(): void {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <>
      <header
        className={`bg-header fixed z-[100] flex h-[50px] w-screen items-center justify-between text-] md:h-[100px]
        ${isOpen ? " !border-0 !border-b-0" : ""}`}
      >
        <div className={`flex items-center gap-5`}>
          <div className="relative flex items-center gap-10 ">
            <Link href={"/"} passHref>
              <div className="relative ml-5 h-[63px] w-[100px] scale-50 cursor-pointer md:h-[48px] md:w-[150px] md:scale-100"></div>
            </Link>
          </div>
          <nav className="mr-20 hidden items-center space-x-4 md:space-x-4 lg:flex">
            {dataHeader.map((item, index) => {
              if (item.link.startsWith("https")) {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={` ${
                      router.asPath === item.link && "text-purple"
                    } text-secodary cursor-pointer text-center font-semibold md:text-xl`}
                  >
                    {item.name}
                  </a>
                );
              } else {
                return (
                  <Link key={index} href={item.link} passHref>
                    <span
                      className={`${
                        router.asPath === item.link && "text-purple"
                      } transition-time-text-header cursor-pointer font-semibold text-secondary transition-all delay-100 ease-in-out  md:text-xl`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              }
            })}
          </nav>
        </div>
        <div className={`relative mr-5 flex items-center justify-center gap-5`}>
          <label className="burger !z-10 lg:!hidden" htmlFor="burger">
            <input
              checked={isOpen}
              onChange={toggleMobileMenu}
              type="checkbox"
              id="burger"
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <DropDown isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};
