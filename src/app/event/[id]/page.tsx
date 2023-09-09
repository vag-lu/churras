import { Attendee, EventHead } from "@/components";
import { ApiScheduledEventsReturn } from "@/mocks/api-scheduled-events-return";

type EventParams = { params: { id: string } };

export default function Event({ params }: EventParams) {
  const event = ApiScheduledEventsReturn[parseInt(params.id) - 1];
  return (
    <div className="bg-white rounded-sm p-9">
      <EventHead event={event} />
      {event.attendees.map((attendee, index) => (
        <Attendee key={index} attendee={attendee} />
      ))}
    </div>
  );
}
