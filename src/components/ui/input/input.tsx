import { FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = React.HTMLProps<HTMLInputElement> & {
  label?: string;
  register: UseFormRegister<FieldValues>;
  id: string;
};

export function Input(props: InputProps) {
  const { className, register, label, id } = props;
  return (
    <>
      <label htmlFor="id">
        {label}
        <input
          {...props}
          {...register(id)}
          className={`${
            className ? className : ""
          } rounded-sm shadow-md pt-2 pb-2 pl-4 pr-4 block text-sm`}
        ></input>
      </label>
    </>
  );
}
