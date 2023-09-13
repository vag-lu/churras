"use client";
import { Button, Input } from "@/components";
import { useServices } from "@/hooks";
import { AttendeeType, ScheduledEventType } from "@/modules";
import { generateId } from "@/utils";
import { useState, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function EventNew() {
  const { handleSubmit, register, reset } = useForm();
  const {
    handleSubmit: handleSubmitAttendee,
    register: registerAttendee,
    reset: resetAttendee,
  } = useForm();
  const [attendeeList, setAttemdeeList] = useState<AttendeeType[]>([]);
  const { setScheduledEvent } = useServices();

  const handleSaveEvent = (data) => {
    const newEvent: ScheduledEventType = {
      id: generateId(),
      title: data.title,
      date: data.date,
      attendees: attendeeList,
    };
    setScheduledEvent(newEvent);
    reset();
    setAttemdeeList([]);
  };

  const handleAddAttendee = (data: UseFormRegister<FieldValues>) => {
    const newAttendee = {
      id: generateId(),
      name: data?.name,
      contribution: parseInt(data.contribution),
      paid: false,
    };

    setAttemdeeList([...attendeeList, newAttendee]);
    resetAttendee();
  };

  console.info(attendeeList);
  return (
    <section className="bg-white p-8">
      <form onSubmit={handleSubmit(handleSaveEvent)}>
        <h1 className="font-bold text-xl">Novo Churras:</h1>
        <div className="flex justify-around">
          <div className="flex gap-4 mb-4">
            <Input
              id="title"
              name="title"
              register={register}
              label="Motivo:"
            />
            <Input
              id="date"
              name="date"
              register={register}
              label="Data:"
              type="date"
            />
          </div>
          <Button type="submit">Salvar Churras</Button>
        </div>
      </form>
      <form onSubmit={handleSubmitAttendee(handleAddAttendee)}>
        <h2 className="text-lg">Participantes:</h2>
        <div className="flex gap-4 pt-5 border-t border-black">
          <Input
            id="name"
            name="name"
            register={registerAttendee}
            label="Nome:"
          />
          <Input
            id="contribution"
            name="contribution"
            register={registerAttendee}
            label="Contribuição:"
            type="number"
          />
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
      <div className="flex gap-5">
        <p className="font-bold">Nome</p>
        <p className="font-bold">Contribuição</p>
      </div>
      {attendeeList.map((attendee, index) => (
        <div key={index} className="flex gap-5">
          <p>{attendee.name}</p>
          <p>R$ {attendee.contribution.toFixed(2)}</p>
        </div>
      ))}
    </section>
  );
}
