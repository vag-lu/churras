import { ScheduledEvent } from "@/components";
import { AddSchedule } from "@/components/common/schedule/add-schedule";
import { ApiScheduledEventsReturn } from "@/mocks/api-scheduled-events-return";
import { Attendee } from "@/modules";

export default function Home() {
  return (
    <div className="flex gap-3 flex-wrap">
      {ApiScheduledEventsReturn.map((event) => (
        <ScheduledEvent key={event.id} event={event} />
      ))}
      <AddSchedule />
    </div>
  );
}
