"use client";
import { useEffect, useState } from "react";
import { AddSchedule } from "@/components/common/schedule/add-schedule";
import { ApiScheduledEventsReturn } from "@/mocks/api-scheduled-events-return";
import { useServices } from "@/hooks";
import { ScheduledEventType } from "@/modules";
import { ScheduledEvent } from "@/components";

export default function Home() {
  const { getScheduledEvents } = useServices();
  const [events, setEvents] = useState<ScheduledEventType[]>();

  useEffect(() => {
    const response = getScheduledEvents();
    setEvents(response);
  }, []);

  return (
    <section className="flex justify-center">
      <div className="grid gap-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        {events &&
          events.map((event) => (
            <ScheduledEvent key={event.id} event={event} />
          ))}
        <AddSchedule />
      </div>
    </section>
  );
}
