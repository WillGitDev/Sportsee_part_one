export default function nbrOfDaysRest(tabOfRests) {
  const activeDaysSet = new Set(
    tabOfRests.map((element) => {
      return new Date(element.date).getTime();
    })
  );

  const firstDay = new Date(Math.min(...activeDaysSet));
  const lastDay = new Date(Math.max(...activeDaysSet));

  const diffTime = Math.abs(lastDay - firstDay);
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

  return totalDays - activeDaysSet.size;
}
