export default function getTotalCalBurn(activities) {
  return activities.reduce((accumulator, currentActivity) => {
    return accumulator + currentActivity.caloriesBurned;
  }, 0);
}
