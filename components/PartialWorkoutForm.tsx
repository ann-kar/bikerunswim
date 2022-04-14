import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Min, IsString, IsIn, IsInt, Max } from "class-validator";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IPartialWorkout, Discipline } from "../interfaces/IWorkout";
import { DistanceInput } from "./DistanceInput";

export class PartialWorkout implements IPartialWorkout {
  @Min(1)
  @Max(1000000)
  distanceInMeters!: number;
  @IsString()
  @IsIn(["swimming", "biking", "running"])
  discipline!: Discipline;
  @IsInt()
  @Min(60)
  durationInSeconds!: number;
}

const resolver = classValidatorResolver(PartialWorkout);

export const PartialWorkoutForm = ({ discipline, setParts }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartialWorkout>({ resolver });
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const onSubmit = (data: PartialWorkout) => {
    setIsDisabled(true);
    setParts((prevParts: PartialWorkout[]) => [...prevParts, data]);
  };

  return (
    <form
      className="container mx-auto max-w-[300px]"
      onSubmit={handleSubmit(onSubmit)}
    >
        <h2 className="w-full text-center mt-4 mb-6 uppercase font-semibold text-lg">
          {discipline}
        </h2>
        <input type="hidden" value={discipline} {...register("discipline")} />
        <div className="w-52 mx-auto mb-4">
          <label
            className="block mb-2 mt-6 standard-label"
            htmlFor="distanceInMeters"
          >
            DISTANCE IN KM
          </label>
          <DistanceInput register={register} errors={errors} />
        </div>
        <div className="w-52 mx-auto mb-4">
          <label
            className="block mb-2 mt-6 standard-label"
            htmlFor="durationInSeconds"
          >
            DURATION (hh:mm:ss)
          </label>
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
            {errors.durationInSeconds?.message && "workout must be at least 10 seconds long"}
          </p>
        </div>
        <button
          disabled={isDisabled}
          className="block mx-auto w-6/12 mb-8 py-2 px-3 text-sm uppercase tracking-wide font-bold bg-white text-blue-500 border border-blue-400 rounded hover:text-white hover:bg-blue-500 btn-disabled"
        >
          save this part
        </button>

    </form>
  );
};
