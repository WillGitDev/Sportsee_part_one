export default function getFirstDate(date) {
  const dates = date.map((date) => {
    return new Date(date.date).getTime();
  });

  return new Date(Math.min(...dates));
}
