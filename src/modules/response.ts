export type ScheduledEventType = {
  id: number;
  date: Date;
  title: string;
  attendees: AttendeeType[];
};

export type AttendeeType = {
  id: number;
  name: string;
  contribution: number;
  paid: boolean;
};
