import { EventCard } from "@/components";
import { Attendee, ScheduledEventType } from "@/modules";
import { sumTotalValue } from "@/utils";
import Image from "next/image";

type ScheduledEventProps = {
  event: ScheduledEventType;
};

export function ScheduledEvent({ event }: ScheduledEventProps) {
  const { title, attendees, id } = event;
  const date = new Date(event.date);

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
        <div className="flex gap-1">
          <Image
            alt="people quantity icon"
            src="/icon-people.svg"
            width={18}
            height={15.3}
          />
          <p>{attendees.length}</p>
        </div>

        <div className="flex gap-1">
          <Image
            alt="people quantity icon"
            src="/icon-money.svg"
            width={18}
            height={15.3}
          />
          <p>R$ {sumTotalValue(attendees)}</p>
        </div>
      </div>
    </EventCard>
  );
}
