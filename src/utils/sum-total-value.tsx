import { Attendee } from "@/modules";

export function sumTotalValue(attendees: Attendee[]) {
  const totalValue = attendees.reduce(
    (accumulator: number, currentValue: Attendee) =>
      accumulator + currentValue.contribution,
    0
  );
  return totalValue;
}
