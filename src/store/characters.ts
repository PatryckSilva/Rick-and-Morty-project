/* eslint-disable react-hooks/rules-of-hooks */

import { CharacterType, InfoType } from "@/@types";
import { create } from "zustand";

type CharacterStore = {
  characters: CharacterType[];
  isLoadingCharacters: boolean;
  setCharacters: (characters: any[]) => void;
  setIsLoadingCharacters: (isLoadingCharacters: boolean) => void;
  info: InfoType;
  setInfo: (info: any) => void;
};

const useCharactersStore = create<CharacterStore>(set => ({
  characters: [],
  isLoadingCharacters: true,
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
  setCharacters: (dataCharacters: any) => {
    const resolveDataCharacters = dataCharacters.results;
    set(state => ({
      characters: [...resolveDataCharacters],
    }));
  },
  setIsLoadingCharacters: (isLoadingCharacters: boolean) => {
    set(state => ({ isLoadingCharacters }));
  },

  setInfo: (info: any) => {
    set(state => ({ info }));
  },
}));

export default useCharactersStore;
