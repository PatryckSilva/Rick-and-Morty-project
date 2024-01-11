/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "utils-react";

import { SWRCacheKeyGetters } from "../services/swr";
import useCharactersStore from "../store/characters";

export const FetchProviders = () => {
  const charactersInitialPage = 1;
  const [paginationFetch, setPaginationFetch] = useState<any>();
  const { data: dataCharacters, isLoading: isLoadingCharacters } = useSWR(
    SWRCacheKeyGetters.getCharacters(paginationFetch || charactersInitialPage),
    fetcher,
  );

  const { setCharacters, setIsLoadingCharacters, setInfo } = useCharactersStore(
    state => state,
  );

  useEffect(() => {
    if (dataCharacters) {
      setCharacters(dataCharacters);
      setIsLoadingCharacters(isLoadingCharacters);
      setInfo(dataCharacters.info);
    }
  }, [dataCharacters]);

  const handlePaginationCharacters = (event: any) => {
    setPaginationFetch(event.selected + 1);
  };

  return {
    handlePaginationCharacters,
  };
};
