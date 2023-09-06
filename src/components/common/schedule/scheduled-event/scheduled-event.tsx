import { EventCard } from "@/components";
import { Attendee, ScheduledEent } from "@/modules";

type ScheduledEventProps = {
  event: ScheduledEent;
};

const sumTotalValue = (attendees: Attendee[]) => {
  const totalValue = attendees.reduce(
    (accumulator: number, currentValue: Attendee) =>
      accumulator + currentValue.contribution,
    0
  );
  return totalValue;
};

export function ScheduledEvent({ event }: ScheduledEventProps) {
  const { date, title, attendees } = event;
  return (
    <EventCard className=" bg-white justify-between flex flex-col">
      <div>
        <p className="text-3xl font-extrabold">
          {date.getDay()}/{date.getMonth() + 1}
        </p>
        <p className="text-xl font-bold">{title}</p>
      </div>

      <div className="flex justify-between text-xl font-medium">
        <p>{attendees.length}</p>
        <p>R$ {sumTotalValue(attendees)}</p>
      </div>
    </EventCard>
  );
}
