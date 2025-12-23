import nbrOfDaysRest from "@/utils/nbrOfDaysRest";
import getFirstDate from "@/utils/getFirstDate";

export default function userActivityMapper(data) {
  let totalCalBurn = 0;
  let activities = [];
  const daysRest = nbrOfDaysRest(data.apiUserActivity);
  const startWithDate = getFirstDate(data.apiUserActivity);
  const startWith = startWithDate.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  data.apiUserActivity.forEach((element) => {
    totalCalBurn += element.caloriesBurned;

    activities.push({
      date: element.date,
      distance: element.distance,
      duration: element.duration,
      heartRate: {
        min: element.heartRate.min,
        max: element.heartRate.max,
        average: element.heartRate.average,
      },
      caloriesBurned: element.caloriesBurned,
    });
  });

  return { activities, totalCalBurn, daysRest, startWith };
}
