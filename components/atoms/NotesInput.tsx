import { useFormContext } from "react-hook-form";

export const NotesInput = () => {
  const { register } = useFormContext();

  return (
    <textarea
    data-testid="notes"
      className="input-focus min-w-full rounded border-2 border-blue-300"
      {...register("notes")}
    />
  );
};
