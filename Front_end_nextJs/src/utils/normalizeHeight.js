export function normalizeHeight(number) {
  const numberMeter = number / 100;
  return numberMeter.toFixed(2).replace(".", "m");
}
