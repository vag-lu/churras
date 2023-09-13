import { sumTotalValue } from "./sum-total-value";
import { AttendeeType } from "@/modules";

describe("sumTotalValue", () => {
  it("should return the sum of contributions for a list of attendees", () => {
    const attendees: AttendeeType[] = [
      { id: 1, name: "Attendee 1", contribution: 10, paid: false },
      { id: 2, name: "Attendee 2", contribution: 20, paid: false },
      { id: 3, name: "Attendee 3", contribution: 30, paid: false },
    ];

    const totalValue = sumTotalValue(attendees);

    expect(totalValue).toBe(10 + 20 + 30);
  });

  it("should return 0 for an empty list of attendees", () => {
    const attendees: AttendeeType[] = [];

    const totalValue = sumTotalValue(attendees);
    expect(totalValue).toBe(0);
  });

  it("should handle negative contributions", () => {
    const attendees: AttendeeType[] = [
      { id: 1, name: "Attendee 1", contribution: -10, paid: false },
      { id: 2, name: "Attendee 2", contribution: 20, paid: false },
      { id: 3, name: "Attendee 3", contribution: -5, paid: false },
    ];

    const totalValue = sumTotalValue(attendees);
    expect(totalValue).toBe(-10 + 20 - 5);
  });
});
