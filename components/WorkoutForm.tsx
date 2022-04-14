import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import {
  IsString,
  IsDateString,
  ValidateNested,
  IsNotEmpty,
} from "class-validator";
import { useEffect, useState } from "react";
import { Type } from "class-transformer";
import "reflect-metadata";

import { MockApi } from "../mocks/mockApi";
import { IWorkout, IPartialWorkout, Discipline } from "../interfaces/IWorkout";
import {
  PartialWorkout,
  PartialWorkoutForm,
} from "../components/PartialWorkoutForm";
import { Label } from "./Label";
import { DisciplineChoice } from "./DisciplineChoice";

export class Workout implements IWorkout {
  @IsDateString()
  date!: string;
  @IsString()
  userId!: string;
  @ValidateNested({ each: true })
  @Type(() => PartialWorkout)
  @IsNotEmpty()
  parts!: PartialWorkout[];
  notes!: string;
}

const resolver = classValidatorResolver(Workout);

export const WorkoutForm = ({ defaultData }: { defaultData?: IWorkout }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Workout>({ resolver });
  const onSubmit = async (data: Workout) => {
    console.log(data);
    const response = await MockApi.sendWorkout(data);
    console.log(response);
  };

  const [workoutParts, setWorkoutParts] = useState<IPartialWorkout[]>([]);
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);

  useEffect(() => {
    workoutParts.filter((part) => disciplines.includes(part.discipline));
  }, [disciplines]);

  return (
    <>
      <form className="container mx-auto w-10/12 max-w-[300px]">
        <Label label={"date"} htmlFor={"date"} />
        <input
          className="block w-full mb-3 standard-input input-focus"
          id="date"
          type="date"
          defaultValue="2022-04-02"
          {...register("date")}
        />
        <p className="error">{errors.date?.message}</p>
        <DisciplineChoice
          discipline={disciplines}
          setDisciplines={setDisciplines}
        />
      </form>

      {["biking", "running", "swimming"].map((sport) => {
        if (disciplines.includes(sport as Discipline)) {
          return (
            <PartialWorkoutForm key={`partial-${sport}`} discipline={sport} setParts={setWorkoutParts} />
          );
        }
      })}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container mx-auto w-10/12 max-w-[300px]">
        {workoutParts &&
          workoutParts.map((part, i) => {
            return (
              <div key={`key-${part.discipline}`}>
                <input
                  className="hidden"
                  {...register(`parts.${i}.discipline`)}
                  id="parts"
                  value={part.discipline}
                />
                <input
                  className="hidden"
                  {...register(`parts.${i}.distanceInMeters`, {
                    setValueAs: (v) => Number(v),
                  })}
                  id="parts"
                  value={part.distanceInMeters}
                />
                <input
                  className="hidden"
                  {...register(`parts.${i}.durationInSeconds`, {
                    setValueAs: (v) => Number(v),
                  })}
                  id="parts"
                  value={part.durationInSeconds}
                />
              </div>
            );
          })}
        <input type="hidden" value="sampleUserId" {...register("userId")} />
        <Label htmlFor="notes" label={"notes"} />
        <textarea
          className="input-focus min-w-full rounded border-2 border-blue-300"
          {...register("notes")}></textarea>
        {errors.notes?.message}
        <button className="full-w mx-auto mt-6 mb-8 hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block uppercase tracking-wide text-sm font-bold bg-white">
          submit workout
        </button>
        <p className="error">
          {errors.parts &&
            "isNotEmpty" &&
            "please provide data for at least one discipline"}
        </p>
      </form>
    </>
  );
};
