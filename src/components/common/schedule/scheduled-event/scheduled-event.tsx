type ScheduledEventProps = {
  date: Date;
  title: string;
  qtyPeople: number;
  totalValue: number;
};

export function ScheduledEvent({
  date,
  title,
  qtyPeople,
  totalValue,
}: ScheduledEventProps) {
  console.info(date);
  return (
    <div className="w-72 h-48 bg-white p-6 rounded-sm shadow-md">
      <p>
        {date.getDay()}/{date.getMonth() + 1}
      </p>
      <p>{title}</p>
      <div className="flex justify-between">
        <div className="">{qtyPeople}</div>
        <div className="">{totalValue}</div>
      </div>
    </div>
  );
}
