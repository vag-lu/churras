import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Attendee } from "./atendee";
import { AttendeeType } from "@/modules";

describe("Attendee", () => {
  const mockAttendee: AttendeeType = {
    id: 1,
    name: "João",
    contribution: 50,
    paid: false,
  };

  it("renders attendee information and handles checkbox change", () => {
    const checkHandle = jest.fn();

    render(<Attendee attendee={mockAttendee} checkHandle={checkHandle} />);

    const attendeeNameElement = screen.getByText("João");
    const attendeeContributionElement = screen.getByText("R$ 50");

    expect(attendeeNameElement).toBeInTheDocument();
    expect(attendeeContributionElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();

    fireEvent.click(checkboxElement);

    expect(checkHandle).toHaveBeenCalledWith(
      expect.objectContaining({ target: checkboxElement })
    );
  });

  it("renders attendee with line-through if paid", () => {
    const paidAttendee: AttendeeType = {
      ...mockAttendee,
      paid: true,
    };

    render(<Attendee attendee={paidAttendee} checkHandle={() => {}} />);

    const attendeeNameElement = screen.getByText("João");
    const attendeeContributionElement = screen.getByText("R$ 50");
    expect(attendeeContributionElement).toHaveClass("line-through");
    expect(attendeeNameElement).toBeInTheDocument();
  });
});
