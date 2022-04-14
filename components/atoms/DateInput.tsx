import { useFormContext } from "react-hook-form";

export const DateInput = () => {
  const { register } = useFormContext();

  return (
    <input
      className="block w-full mb-3 standard-input input-focus"
      id="date"
      type="date"
      defaultValue="2022-04-02"
      {...register("date")}
    />
  );
};
