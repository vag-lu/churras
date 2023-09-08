import Link from "next/link";
import { ReactNode } from "react";

type EventCardProps = {
  children?: ReactNode;
  className?: string;
  href?: string;
};

export function EventCard({ children, href, className = "" }: EventCardProps) {
  return (
    <Link
      href={href ?? ""}
      className={`${className} w-72 h-48 p-6 rounded-sm shadow-md`}
    >
      {children}
    </Link>
  );
}
