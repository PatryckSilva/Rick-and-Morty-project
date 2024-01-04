export const formatteTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const formatteEua = "MM/DD/YYYY";

  const formattedDate = formatteEua
    .replace("YYYY", date.getFullYear().toString())
    .replace("MM", ("0" + (date.getMonth() + 1)).slice(-2))
    .replace("DD", ("0" + date.getDate()).slice(-2));

  return formattedDate;
};
