import { ScheduledEventType } from "@/modules";
import { sumTotalValue } from "@/utils";
import Image from "next/image";

type EventHeadProps = {
  event: ScheduledEventType;
};

export function EventHead({ event }: EventHeadProps) {
  const { title, attendees } = event;
  const date = new Date(event.date);

  return (
    <section className="flex justify-between mb-6">
      <div>
        <p className="text-3xl font-extrabold">
          {date.getDay()}/{date.getMonth() + 1}
        </p>
        <p className="text-3xl font-bold">{title}</p>
      </div>

      <div className="flex justify-around flex-col flex-wrap">
        <div className="flex gap-2">
          <Image
            alt="people quantity icon"
            src="/icon-people.svg"
            width={18}
            height={15.3}
          />
          <p>{attendees.length}</p>
        </div>

        <div className="flex gap-2">
          <Image
            alt="people quantity icon"
            src="/icon-money.svg"
            width={18}
            height={15.3}
          />
          <p>R$ {sumTotalValue(attendees)}</p>
        </div>
      </div>
    </section>
  );
}
