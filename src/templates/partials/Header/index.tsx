"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { DropDown } from "../HeaderMobile";
import { useTheme } from "next-themes";
import Image from "next/image";
import { HamburguerMenu } from "@/components/ui/hamburguer-menu";
import { NavigationHeader } from "@/components/utils/NavigationHeader";
import { ModeToggle } from "@/components/ui/ModeToggle";

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
  const [isOpen, setIsOpen] = useState(false);

  function toggleMobileMenu(): void {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <>
      <header
        className={` fixed flex items-center justify-center bg-transparent z-[100] h-[70px] w-screen`}
      >
        <aside className="flex items-end justify-between w-[80%] ">
          <Link href={"/"} passHref>
            <div className="relative ml-5 cursor-pointer h-[46px] w-[150px] ">
              <Image
                src={"/images/logos/logo_dark_theme.png"}
                objectFit="contain"
                layout="fill"
                alt="logo Rick and morty dark Theme"
              />
            </div>
          </Link>
          <div className={`flex items-center gap-3`}>
            <NavigationHeader />
            <ModeToggle />
          </div>
          <div className={`md:hidden`}>
            <HamburguerMenu checked={isOpen} onChange={toggleMobileMenu} />
          </div>
        </aside>

        <DropDown isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};
