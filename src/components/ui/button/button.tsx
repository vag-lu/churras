import { ReactNode } from "react";

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
};
export function Button(props: ButtonProps) {
  const { className } = props;
  return (
    <button
      {...props}
      className={`${
        className ? className : ""
      } rounded-2xl bg-black text-white px-3 leading-1 h-12`}
    ></button>
  );
}
