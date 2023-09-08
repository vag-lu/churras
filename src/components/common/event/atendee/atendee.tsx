import { Attendee } from "@/modules";

export function Attendee({ attendee }: { attendee: Attendee }) {
  return (
    <div className="flex justify-between p-3 border-b border-yellow-300	">
      <label>
        <input type="checkbox" className="rounded-full mr-4"></input>
        {attendee.name}
      </label>

      <div className={`${attendee.paid ? "line-through" : ""}`}>
        R$ {attendee.contribution}
      </div>
    </div>
  );
}
