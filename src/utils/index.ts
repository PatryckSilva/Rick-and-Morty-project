/* eslint-disable object-shorthand */

import { IFPS_URL } from "./constants";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const expirationValidator = (expiration: number, callFunction: any) => {
  if (expiration < Date.now()) {
    callFunction();
    location.reload();
  }
};

export const generateArray = (n: number) => {
  return Array.from({ length: n }, (_, i) => i + 1);
};

export const sortByProperty = (property: string) => {
  return function (a: any, b: any) {
    if (a[property] > b[property]) return 1;
    else if (a[property] < b[property]) return -1;

    return 0;
  };
};
export function isEmptyObject(obj: any) {
  return JSON.stringify(obj) === "{}";
}

export const countOccurrences = (arr: any[], val: string | number) => {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
};

export const navigateHandler = (targetUrl: string, isNewWindow: boolean) => {
  if (isNewWindow) {
    open(targetUrl, "_blank");
  } else {
    location.href = targetUrl;
  }
};

export const arrayEquals = (a: any[], b: any[]) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};
export function removeArrayItem(array: any[], item: any) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
  return array;
}

export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function reverseString(str: string) {
  return str?.split("").reverse().join("");
}

export const delay = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export const findNewestId = (
  oldArray: number[],
  newArray: any[],
  idName: string,
  retry = 0,
): number => {
  console.log({ oldArray, newArray, idName, retry });
  if (retry > 3) {
    return -1;
  }
  delay(500).then(() => {
    const newDecks = newArray.map(e => e[idName]);
    const sortedNewDecks = newDecks.sort((a, b) => b - a);
    const newestDeckId = sortedNewDecks[0][idName];
    if (oldArray.includes(newestDeckId)) {
      return findNewestId(oldArray, newArray, idName, retry + 1);
    } else {
      return newestDeckId;
    }
  });
  return -1;
};

export const lowerObject = (obj: any) => {
  for (const prop in obj) {
    if (typeof obj[prop] === "string") {
      obj[prop] = obj[prop].toLowerCase();
    }
    if (typeof obj[prop] === "object") {
      lowerObject(obj[prop]);
    }
  }

  return obj;
};

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const upperFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getPercentage = (currentAmount: number, maxAmount: number) => {
  return (currentAmount / maxAmount) * 100;
};

export function rpcEndpoint(endPoints: string) {
  let rpcEndpoint = endPoints;
  if (rpcEndpoint.includes("|")) {
    const endpoints = rpcEndpoint?.split("|");
    rpcEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
  }

  return rpcEndpoint;
}

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : undefined;
};

export const assetFormat = (data: any[]) => {
  const tempArr = data?.map(item => {
    const immutableData = item.data;
    const mutableData = item.data;

    const tempObj = {
      asset_id: +item.asset_id,
      owner: item.owner,
      schema_name: item.schema_name,
      template_id: +item.template_id,
      data: {
        ...mutableData,
        name: immutableData.name,
        img: IFPS_URL + mutableData.img,
      },
      row: null,
      template_mint: +item.template_mint,
    };

    return tempObj;
  });

  return tempArr;
};

export const makeNullArray = (quantity: number) => {
  const arr: any = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(null);
  }
  return arr;
};

export const removeDuplicatesCards = (assets: any[], isFree: boolean) => {
  const assetsDuplicates = [...assets];
  const assetsNoDuplicates: any = new Map();

  assetsDuplicates.forEach((asset: any) => {
    const mapId = `${asset.data.rarity} ${asset.data.season} ${
      asset.template_id
    } ${
      isFree &&
      asset.data?.eligibility &&
      asset.data.eligibility?.is_eligible_for_free_tournament
    }`;
    if (assetsNoDuplicates.has(mapId)) {
      const duplicate = assetsNoDuplicates.get(mapId);
      duplicate.counter += 1;
    } else {
      asset.counter = 1;
      assetsNoDuplicates.set(mapId, asset);
    }
  });

  const arr = Array.from(assetsNoDuplicates.values());

  // console.log({assetsNoDuplicates, assetsDuplicates, arr});

  return arr;
};

export const hoursFormated = (time: string) => {
  const timestamp = new Date(time);
  const now = new Date();
  const timeDifference = now.getTime() - timestamp.getTime();

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Format the result
  let formattedTime = "";

  if (days > 0) {
    formattedTime += `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    formattedTime += `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes <= 0) {
    formattedTime = "now";
  } else {
    formattedTime += `${minutes} min ago`;
  }

  return formattedTime;
};
export const hoursInvertedFormated = (time: string) => {
  const timestamp = new Date(time);
  const now = new Date();
  const timeDifference = timestamp.getTime() - now.getTime();

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Format the result
  let formattedTime = "";

  if (days > 0) {
    formattedTime += `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    formattedTime += `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes <= 0) {
    formattedTime = "now";
  } else {
    formattedTime += `${minutes} min ago`;
  }

  return formattedTime;
};

export const toFixedWaxString = (value: string, decimal: number): string => {
  const numberValue = parseFloat(value);
  return `${numberValue.toFixed(decimal)} WAX`;
};

export const generateYearRange = (startYear: number): number[] => {
  const currentYear = new Date().getFullYear();
  if (startYear > currentYear) {
    return [startYear];
  }

  const years: number[] = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  return years;
};

export const findDayOfWeek = (value: string) => {
  const date = new Date(value);
  const dayOfWeek = date.getDay();

  return dayOfWeek.toString();
};

export const findFantasy = (item: any, findingDayRoundId) => {
  return item.data.fantasy.find(
    val => Number(val.day_round_id) === Number(findingDayRoundId),
  );
};
