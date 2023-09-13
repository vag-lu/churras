import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EventCard } from "./event-card";

describe("EventCard", () => {
  it("renders children and sets the correct href and class", () => {
    const href = "/example";
    const className = "custom-class";
    const childrenText = "Event Card Content";

    render(
      <EventCard href={href} className={className}>
        {childrenText}
      </EventCard>
    );

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", href);
    expect(linkElement).toHaveClass(
      "w-72 h-48 p-6 rounded-sm shadow-md hover:bg-yellow-100"
    );
    expect(linkElement).toHaveTextContent(childrenText);
  });

  it("handles missing href and defaults to an empty string", () => {
    const childrenText = "Event Card Content";

    render(<EventCard>{childrenText}</EventCard>);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "");
  });

  it("handles missing children", () => {
    render(<EventCard />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeEmptyDOMElement();
  });
});
