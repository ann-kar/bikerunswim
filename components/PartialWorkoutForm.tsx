import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Min, IsString, IsIn, IsInt, Max } from "class-validator";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IPartialWorkout, Discipline } from "../interfaces/IWorkout";
import { DistanceInput } from "./DistanceInput";

export class PartialWorkout implements IPartialWorkout {
  @Min(1)
  @IsInt()
  @Max(10000000)
  distanceInMeters!: number;
  @IsString()
  @IsIn(["swimming", "biking", "running"])
  discipline!: Discipline;
  @IsInt()
  @Min(1)
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
      className="container mx-auto w-10/12 max-w-[300px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <h2 className="w-full text-center my-4 uppercase text-lg">
          {discipline}
        </h2>
        <input type="hidden" value={discipline} {...register("discipline")} />

        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="distanceInMeters"
          >
            DISTANCE IN KM
          </label>
          <DistanceInput register={register} errors={errors}/>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            DURATION (hh:mm:ss)
          </label>
          <div className="flex justify-center">
            <input
              className="mx-2 appearance-none block w-full bg-gray-100 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight input-focus"
              id="durationInSeconds"
              type="time"
              step="1"

              {...register("durationInSeconds", {
                setValueAs: (v) => ((Number((v[0] + v[1])) * 3600) +(Number((v[3] + v[4])) * 60) + (Number((v[6] + v[7]))))
              })}
              defaultValue={0}
            />
          </div>
          <p className="text-red-500 text-xs italic">
            {errors.durationInSeconds?.message}
            {errors.discipline?.message}
          </p>
        </div>
        <button
          disabled={isDisabled}
          className="disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 full-w mx-auto my-4 hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block uppercase tracking-wide text-sm font-bold bg-white"
        >
          save this part
        </button>
      </div>
    </form>
  );
};
