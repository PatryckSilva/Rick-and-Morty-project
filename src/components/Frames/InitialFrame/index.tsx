"use client";

import { useCharactersStore } from "@/store/characters";
import Image from "next/image";
import { useEffect } from "react";

export const InitialFrame = () => {
  const { characters, handlePaginationCharacters, info } = useCharactersStore();

  return (
    <main
      className={`dark:bg-[url(/images/backgrounds/dark_bg_ellipses.png)] bg-cover  dark:md:bg-black h-[70dvh] -mt-[50px] md:-mt-[100px] flex items-center justify-center w-screen `}
    >
      <aside
        className={`w-1/2 h-full flex flex-col items-center justify-center`}
      >
        <h1 className={`text-5xl max-w-[350px] flex-bold`}>
          Saiba tudo em um só lugar.
        </h1>
      </aside>
      <aside className={`w-1/2 h-full flex items-end`}>
        <figure className={`relative w-[550px] h-[550px]`}>
          <Image
            alt="rick background"
            src={"/images/backgrounds/dark_rick_removed_bg.png"}
            objectFit="contain"
            layout="fill"
          />
        </figure>
        <button onClick={() => handlePaginationCharacters(1)}>click</button>
      </aside>
    </main>
  );
};
