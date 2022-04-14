import { useFormContext } from "react-hook-form";

const stringToSeconds = (v: string) => {
  return (
    Number(v[0] + v[1]) * 3600 + Number(v[3] + v[4]) * 60 + Number(v[6] + v[7])
  );
};

export const DurationInput = ({ index }: { index: number }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        className="min-w-full mb-4 standard-input input-focus text-2xl"
        id="durationInSeconds"
        type="time"
        step="1"
        {...register(`parts.${index}.durationInSeconds`, {
          setValueAs: (v) => stringToSeconds(v)
        })}
      />
    </>
  );
};
