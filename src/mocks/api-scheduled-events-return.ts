import { ScheduledEventType } from "@/modules";

export const ApiScheduledEventsReturn: ScheduledEventType[] = [
  {
    id: 1,
    date: new Date("2023-12-1"),
    title: "Niver do Gui",
    attendees: [
      { id: 1, name: "Alice", contribution: 20, paid: false },
      { id: 2, name: "Beto", contribution: 20, paid: false },
      { id: 3, name: "Diego B.", contribution: 20, paid: false },
      { id: 4, name: "Diego P.", contribution: 10, paid: false },
      { id: 5, name: "Fernando", contribution: 20, paid: false },
      { id: 6, name: "Gabriel", contribution: 20, paid: true },
      { id: 7, name: "Leonardo", contribution: 10, paid: false },
      { id: 8, name: "Marcus J.", contribution: 20, paid: false },
      { id: 9, name: "Michele", contribution: 20, paid: false },
      { id: 10, name: "Paulo", contribution: 20, paid: false },
      { id: 11, name: "Rafael S.", contribution: 20, paid: false },
      { id: 12, name: "Ralf", contribution: 20, paid: false },
      { id: 13, name: "Ruan", contribution: 20, paid: true },
      { id: 14, name: "Thales", contribution: 20, paid: false },
      { id: 15, name: "Wait", contribution: 20, paid: false },
    ],
  },
  {
    id: 2,
    date: new Date("2023-12-23"),
    title: "Final de Ano",
    attendees: [
      { id: 1, name: "Alice", contribution: 25, paid: false },
      { id: 2, name: "Beto", contribution: 25, paid: false },
      { id: 3, name: "Diego B.", contribution: 25, paid: true },
      { id: 4, name: "Rafael S.", contribution: 25, paid: false },
      { id: 5, name: "Ralf", contribution: 25, paid: false },
      { id: 6, name: "Ruan", contribution: 25, paid: true },
      { id: 7, name: "Thales", contribution: 25, paid: false },
      { id: 8, name: "Wait", contribution: 25, paid: false },
      { id: 9, name: "Leonardo", contribution: 35, paid: true },
    ],
  },
  {
    id: 3,
    date: new Date("2024-1-6"),
    title: "Sem motivo",
    attendees: [
      { id: 1, name: "Alice", contribution: 15, paid: false },
      { id: 2, name: "Beto", contribution: 15, paid: false },
      { id: 3, name: "Diego B.", contribution: 15, paid: false },
      { id: 4, name: "Diego P.", contribution: 25, paid: false },
      { id: 5, name: "Fernando", contribution: 15, paid: false },
      { id: 6, name: "Gabriel", contribution: 15, paid: true },
      { id: 7, name: "Marcus J.", contribution: 15, paid: false },
      { id: 8, name: "Ruan", contribution: 20, paid: true },
      { id: 9, name: "Thales", contribution: 20, paid: false },
      { id: 10, name: "Wait", contribution: 20, paid: false },
    ],
  },
];
