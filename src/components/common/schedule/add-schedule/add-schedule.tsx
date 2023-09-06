import { EventCard } from "@/components";
import Image from "next/image";

export function AddSchedule() {
  return (
    <EventCard className="flex flex-col items-center justify-center bg-gray-200">
      <Image
        alt="Botão adicionar churras"
        src="/add-icon.svg"
        width={90}
        height={90}
      />
      <p className="text-xl font-bold">Adicionar Churras</p>
    </EventCard>
  );
}
