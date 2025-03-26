import { weddingDate } from "../config";

export function Countdown() {
  const targetDate = new Date(weddingDate);
  const daysRemaining = Math.ceil(
    (targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );
  let displayText = "";

  if (daysRemaining === 1) {
    displayText = `1 day left for the wedding!`;
  } else {
    displayText = `We're ${daysRemaining} days away from the wedding!`;
  }

  return daysRemaining < 0 ? null : (
    <p className="text-2xl mt-4">{displayText}</p>
  );
}
