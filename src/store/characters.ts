/* eslint-disable react-hooks/rules-of-hooks */

import { CharacterType, InfoType } from "@/@types";
import { SWRCacheKeyGetters } from "@/services/swr";
import { fetcher } from "@/utils";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { create } from "zustand";

type CharacterStore = {
  characters: CharacterType[];
  setCharacters: (characters: any[]) => void;
  info: InfoType;
  setInfo: (info: any) => void;
};

interface State {
  data: string | null;
  setData: (data: string | null) => void;
}

const useCharacterStore = create<CharacterStore>(set => ({
  characters: [],

  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },

  setCharacters: (dataCharacters: any) => {
    const resolveDataCharacters = dataCharacters?.results || [];
    set(state => ({
      characters: [...resolveDataCharacters],
    }));
  },

  setInfo: (info: any) => {
    set(state => ({ info }));
  },
}));

export const useCharactersStore = () => {
  const [paginationFetch, setPaginationFetch] = useState(1);
  const { characters, setCharacters, setInfo, info } = useCharacterStore(
    state => state,
  );

  const handlePaginationCharacters = (event: any) => {
    setPaginationFetch(event);
  };

  const {
    data: dataCharacters,
    isLoading: isLoadingCharacters,
    error: errorCharacters,
  } = useSWR(SWRCacheKeyGetters.getCharacters(paginationFetch), fetcher);

  useEffect(() => {
    if (errorCharacters) {
      console.error("Error fetching data:", errorCharacters);
    }

    if (dataCharacters) {
      setCharacters(dataCharacters);
      setInfo(dataCharacters.info);
    }
  }, [dataCharacters, errorCharacters]);
  return {
    characters,
    isLoadingCharacters,
    errorCharacters,
    handlePaginationCharacters,
    info,
  };
};
