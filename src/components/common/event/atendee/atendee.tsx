import { Attendee } from "@/modules";

export function Attendee({ attendee }: { attendee: Attendee }) {
  return (
    <section>
      <section className="flex justify-between p-3 border-b border-yellow-300	">
        <label className="font-bold">
          <input
            type="checkbox"
            className="rounded-full mr-4 accent-yellow-400"
          ></input>
          {attendee.name}
        </label>

        <div className={`${attendee.paid ? "line-through" : ""} font-bold`}>
          R$ {attendee.contribution}
        </div>
      </section>
    </section>
  );
}
