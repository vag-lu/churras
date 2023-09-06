import Image from "next/image";
import { ReactNode } from "react";

type HeadProps = {
  children?: ReactNode;
};

export function PageHead(props: HeadProps) {
  return (
    <div className="flex bg-[url('/box-title.svg')] w-full h-52 bg-cover justify-center items-center">
      <h1 className="text-3xl font-extrabold">{props?.children}</h1>
    </div>
  );
}
