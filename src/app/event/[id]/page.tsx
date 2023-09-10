"use client";
import { Attendee, EventHead } from "@/components";
import { useServices } from "@/hooks";
import { AttendeeType, ScheduledEventType } from "@/modules";
import { useEffect, useState } from "react";

type EventParams = { params: { id: string } };

export default function Event({ params }: EventParams) {
  const [event, setEvent] = useState<ScheduledEventType>();
  const { getEventById } = useServices();

  useEffect(() => {
    const event = getEventById(params.id);
    setEvent(event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const checkHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const attendeeId = parseInt(e.target.value);
    if (event) {
      const attendeesUpdated = event.attendees.map((attendee: AttendeeType) => {
        if (attendee.id === attendeeId) {
          return { ...attendee, paid: e.target.checked };
        } else {
          return attendee;
        }
      });

      setEvent({ ...event, attendees: attendeesUpdated });
    }
  };

  return (
    <div className="bg-white rounded-sm p-9">
      {event && <EventHead event={event} />}
      {event?.attendees.map((attendee, index) => (
        <Attendee key={index} attendee={attendee} checkHandle={checkHandle} />
      ))}
    </div>
  );
}
