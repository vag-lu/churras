import { ScheduledEvent } from "@/components";
import { ApiScheduledEventsReturn } from "@/mocks/api-scheduled-events-return";
import { Attendee } from "@/modules";

export default function Home() {
  const sumTotalValue = (attendees: Attendee[]) => {
    const totalValue = attendees.reduce(
      (accumulator: number, currentValue: Attendee) =>
        accumulator + currentValue.contribution,
      0
    );
    return totalValue;
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {ApiScheduledEventsReturn.map((event) => (
        <ScheduledEvent
          key={event.id}
          date={event.date}
          qtyPeople={event.attendees.length}
          title={event.title}
          totalValue={sumTotalValue(event.attendees)}
        />
      ))}
    </div>
  );
}
