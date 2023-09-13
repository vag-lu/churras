import { API_STORAGE_TAG } from "@/constantes";
import { useSessionStorage } from "@/hooks/session-storage";
import { ApiScheduledEventsReturn } from "@/mocks/api-scheduled-events-return";
import { ScheduledEventType } from "@/modules";

export function useServices() {
  const { getSessionStorage, setSessionStorage } = useSessionStorage();

  const getScheduledEvents = (): ScheduledEventType[] => {
    const response = getSessionStorage(API_STORAGE_TAG);
    if (!response) {
      setSessionStorage(
        API_STORAGE_TAG,
        JSON.stringify(ApiScheduledEventsReturn)
      );
      return ApiScheduledEventsReturn;
    }
    return JSON.parse(response);
  };

  const setScheduledEvent = (event: ScheduledEventType) => {
    const response = getScheduledEvents();
    response.push(event);

    setSessionStorage(API_STORAGE_TAG, JSON.stringify(response));
    return response;
  };

  const getEventById = (id: string) => {
    const response = getScheduledEvents();
    return response.find((event) => event.id.toString() === id);
  };

  return { getScheduledEvents, setScheduledEvent, getEventById };
}
