import { ReactNode } from "react";

type EventCardProps = {
  children?: ReactNode;
  className?: string;
};

export function EventCard({ children, className = "" }: EventCardProps) {
  return (
    <div className={`${className} w-72 h-48 p-6 rounded-sm shadow-md`}>
      {children}
    </div>
  );
}
