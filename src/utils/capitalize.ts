export const capitalize = (str: string) => {
  if (str === "") return "";

  const strCapitalize = str.charAt(0).toUpperCase() + str.slice(1);
  return strCapitalize;
};

export function capitalizeEveryWord(str: string) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
