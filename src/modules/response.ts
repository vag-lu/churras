export type ScheduledEventType = {
  id: number;
  date: Date;
  title: string;
  attendees: Attendee[];
};

export type Attendee = {
  name: string;
  contribution: number;
  paid: boolean;
};
