import { EventCard } from "@/components";
import { Attendee, ScheduledEent } from "@/modules";
import Image from "next/image";
import Link from "next/link";

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
  const { date, title, attendees, id } = event;
  return (
    <EventCard
      href={`/event/${id}`}
      className="bg-white justify-between flex flex-col"
    >
      <div>
        <p className="text-3xl font-extrabold">
          {date.getDay()}/{date.getMonth() + 1}
        </p>
        <p className="text-xl font-bold">{title}</p>
      </div>

      <div className="flex justify-between text-xl font-medium">
        <div>
          <Image
            alt="people quantity icon"
            src="/icon-people.svg"
            width={18}
            height={15.3}
          />
          <p>{attendees.length}</p>
        </div>

        <p>R$ {sumTotalValue(attendees)}</p>
      </div>
    </EventCard>
  );
}
