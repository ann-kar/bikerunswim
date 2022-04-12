import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { IsDateString, Min, Max, IsString, IsIn } from "class-validator";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IPartialWorkout, Discipline } from "../interfaces/IWorkout";
import { RadioInput } from "./RadioInput";

export class PartialWorkout implements IPartialWorkout {
  @IsDateString()
  date!: string;
  @Min(0)
  @Max(100000)
  distanceInMeters!: number;
  @IsString()
  @IsIn(["swimming", "biking", "running"])
  discipline!: Discipline;
  durationInSeconds!: number;
}

const resolver = classValidatorResolver(PartialWorkout);

export const PartialWorkoutForm = ({parts, setParts}:any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartialWorkout>({ resolver });
  const onSubmit = (data: PartialWorkout) => setParts((prevParts:PartialWorkout[]) => [...prevParts,{data}]);
  const [results, setResults] = useState<PartialWorkout>();

  return (
    <form
      className="container mx-auto w-10/12 max-w-[300px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="radio-group my-6 mt-8">
          <RadioInput
            register={register}
            name="discipline"
            value="biking"
            icon="biking.svg"
          />
          <RadioInput
            register={register}
            name="discipline"
            value="swimming"
            icon="swimming.svg"
          />
          <RadioInput
            register={register}
            name="discipline"
            value="running"
            icon="running.svg"
          />
        </div>
        <p className="w-full text-red-500 text-xs italic">
          {errors.discipline?.message}
        </p>
        <div className="w-full before:after: px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight input-focus"
            id="grid-first-name"
            type="date"
            defaultValue="2022-04-02"
            {...register("date")}
          />
          <p className="text-red-500 text-xs italic">{errors.date?.message}</p>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            DISTANCE IN KM
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight  input-focus"
            id="grid-first-name"
            type="number"
            defaultValue={2.25}
            step={0.01}
            {...register("distanceInMeters", {
              setValueAs: (v) => Number(v) * 1000,
            })}
          />
          <p className="text-red-500 text-xs italic">
            {errors.distanceInMeters?.message || "no error"}
          </p>
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
              {...register("durationInSeconds")}
              defaultValue={0}
            />
          </div>
          <p className="text-red-500 text-xs italic">
            {errors.durationInSeconds?.message}
          </p>
        </div>
        <button className="mx-auto my-4 hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block uppercase tracking-wide text-sm font-bold bg-white">
          submit
        </button>
      </div>
    </form>
  );
};
