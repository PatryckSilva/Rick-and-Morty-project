import axios from "axios";
import { mutate } from "swr";

import { arrayEquals, delay } from "../utils";
import { config } from "../utils/constants";

export class SWRCacheKeyGetters {
  static getCharacters = (page: number) => {
    return `${config.apiEndpoint}/character?page=${page}`;
  };
}

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const SWRTimedCacheOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateOnMount: true,
  dedupingInterval: Number(process.env.swrTimedCacheExpiration),
};

export const mutateApiData = async (
  key: any,
  currentData: any,
  fetcher: (url: string) => Promise<any>,
  retries = 1,
  time = 2,
) => {
  if (retries === 11) {
    return "";
  }

  const data = await fetcher(key);

  const isEqual = arrayEquals(data, currentData);

  if (isEqual) {
    if (retries <= 6) {
      await delay(2000);
      mutateApiData(key, currentData, fetcher, retries + 1, time);
    } else {
      await delay(2000 * time);
      mutateApiData(key, currentData, fetcher, retries + 1, time + 1);
    }

    return true;
  }

  mutate(key, data);
  return false;
};
