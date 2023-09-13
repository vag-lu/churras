import { AttendeeType } from "@/modules";

export function sumTotalValue(attendees: AttendeeType[]) {
  const totalValue = attendees.reduce(
    (accumulator: number, currentValue: AttendeeType) =>
      accumulator + currentValue.contribution,
    0
  );
  return totalValue;
}
