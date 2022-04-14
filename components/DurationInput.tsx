import { useFormContext } from "react-hook-form";

export const DurationInput = () => {
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
        {...register("durationInSeconds", {
          setValueAs: (v) =>
            Number(v[0] + v[1]) * 3600 +
            Number(v[3] + v[4]) * 60 +
            Number(v[6] + v[7]),
        })}
        defaultValue={0}
      />
      <p className="error">
        {errors.durationInSeconds?.message &&
          "workout must be at least 10 seconds long"}
      </p>
    </>
  );
};
