import axios from "axios";
import { mutate } from "swr";

import { arrayEquals, delay } from "../utils";
import {
  collectionRoutes,
  config,
  statusRoutes,
  tablesApi,
  waxAccountToken,
} from "../utils/constants";
import { rede } from "../utils/rede";
import { AssetFormatter } from "./formatter";

const collection =
  rede === "mainet"
    ? config.collectionNameMainet
    : config.collectionNameTestnet;

const api = rede === "mainet" ? config.atomicMainet : config.atomicTestnet;

const url = api + collection;
const contract =
  rede === "mainet"
    ? config.contractAccountMainet
    : config.contractAccountTestnet;
const waxTokenAccount = "eosio.token";
export class SWRCacheKeyGetters {}
export const atomicFetcher = async (url: string) => {
  let nonce = Date.now();
  let pageNumber = 1;

  let data = [];
  while (true) {
    const response = await axios.get(
      `${url}&limit=1000&page=${pageNumber}&nonce=${nonce}`,
    );
    data = [...data, ...response.data.data] as any;
    pageNumber++;
    nonce = Date.now() + 1;
    if (response.data.data.length < 1000) {
      break;
    }
  }

  return data;
};

export const secondAtomicFetcher = async (url: string, account?: any) => {
  try {
    let nonce = Date.now();
    let pageNumber = 1;

    let data = [];
    while (true) {
      const response = await axios.get(
        `${url}&limit=1000&page=${pageNumber}&nonce=${nonce}`,
      );

      if (response.data.data) {
        data = [...data, ...response.data.data] as any;
        pageNumber++;
        nonce = Date.now() + 1;
        if (response.data.data.length < 1000) {
          break;
        }
      }
    }

    const response = AssetFormatter.formatAsset(data, account || "");
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const bloksFetcher = async (url: string) => {
  const response = await axios.get(url);

  return response.data;
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
  property: string,
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
      await delay(10000);
      mutateApiData(key, currentData, fetcher, property, retries + 1, time);
    } else {
      await delay(10000 * time);
      mutateApiData(key, currentData, fetcher, property, retries + 1, time + 1);
    }

    return true;
  }

  mutate(key, data);
  return false;
};
