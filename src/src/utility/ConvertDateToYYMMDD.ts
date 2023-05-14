export default function convertDateToYYMMDD(time: Date): string {
  const date = new Date(time);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
}
