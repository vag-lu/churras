import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EventHead } from "./event-head";
import { ScheduledEventType } from "@/modules";
import { sumTotalValue } from "@/utils";

describe("EventHead", () => {
  const mockEvent: ScheduledEventType = {
    id: 1,
    title: "Event Title",
    date: new Date("2023-10-20T00:00:00.000Z"),
    attendees: [
      { id: 1, name: "Attendee 1", contribution: 50, paid: false },
      { id: 2, name: "Attendee 2", contribution: 75, paid: false },
      { id: 3, name: "Attendee 3", contribution: 100, paid: false },
    ],
  };

  it("renders event information correctly", () => {
    const mockSumTotalValue = jest.fn(() => 50 + 75 + 100);
    jest.mock("../../../../utils", () => ({
      sumTotalValue: mockSumTotalValue,
    }));

    render(<EventHead event={mockEvent} />);

    const titleElement = screen.getByText("Event Title");
    const dateElement = screen.getByText("20/10");
    const attendeeCountElement = screen.getByText("3");
    const totalValueElement = screen.getByText("R$ 225");

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(attendeeCountElement).toBeInTheDocument();
    expect(totalValueElement).toBeInTheDocument();
  });
});
