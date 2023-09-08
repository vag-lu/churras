import { Attendee } from "@/components";
import { ApiScheduledEventsReturn } from "@/mocks/api-scheduled-events-return";

type EventParams = { params: { id: string } };

export default function Event({ params }: EventParams) {
  return (
    <div className="bg-white rounded-sm">
      {ApiScheduledEventsReturn[parseInt(params.id) - 1].attendees.map(
        (attendee, index) => (
          <Attendee key={index} attendee={attendee} />
        )
      )}
    </div>
  );
}
