import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { IsString, IsDateString, ValidateNested } from "class-validator";
import { useEffect, useState } from "react";
import { Type } from "class-transformer";
import "reflect-metadata";

import { MockApi } from "../mocks/mockApi";
import { IWorkout, IPartialWorkout, Discipline } from "../interfaces/IWorkout";
import { Header } from "../components/Header";
import {
  PartialWorkout,
  PartialWorkoutForm,
} from "../components/PartialWorkoutForm";
import { CheckboxInput } from "../components/CheckboxInput";

export class Workout implements IWorkout {
  @IsDateString()
  date!: string;
  @IsString()
  userId!: string;
  @ValidateNested({ each: true })
  @Type(() => PartialWorkout)
  parts!: PartialWorkout[];
  notes!: string;
}

const resolver = classValidatorResolver(Workout);

const AddWorkout: NextPage = () => {
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

  const handleDisciplineChoice = (value: any) => {
    setDisciplines((prevDisciplines: Discipline[]) => {
      if (prevDisciplines.includes(value)) {
        return prevDisciplines.filter((el) => el !== value);
      } else {
        return [...prevDisciplines, value];
      }
    });
  };

  return (
    <div>
      <main>
        <Header label={"Log a new training"} />
        <form className="container mx-auto w-10/12 max-w-[300px]">
          <h2 className="mt-8 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Sports practiced:
          </h2>
          <div className="radio-group">
            <CheckboxInput
              register={register}
              name="discipline"
              value="biking"
              icon="biking.svg"
              onChange={(e: any) => handleDisciplineChoice(e.target.value)}
            />
            <CheckboxInput
              register={register}
              name="discipline"
              value="swimming"
              icon="swimming.svg"
              onChange={(e: any) => handleDisciplineChoice(e.target.value)}
            />
            <CheckboxInput
              register={register}
              name="discipline"
              value="running"
              icon="running.svg"
              onChange={(e: any) => handleDisciplineChoice(e.target.value)}
            />
          </div>
        </form>
        {disciplines.includes("swimming") && (
          <PartialWorkoutForm
            discipline={"swimming"}
            setParts={setWorkoutParts}
          />
        )}
        {disciplines.includes("biking") && (
          <PartialWorkoutForm
            discipline={"biking"}
            setParts={setWorkoutParts}
          />
        )}
        {disciplines.includes("running") && (
          <PartialWorkoutForm
            discipline={"running"}
            setParts={setWorkoutParts}
          />
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container mx-auto w-10/12 max-w-[300px]"
        >
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
            <p className="text-red-500 text-xs italic">
              {errors.date?.message}
            </p>
          </div>
          <textarea
            className="border-2 border-blue-300 container mx-auto w-10/12 max-w-[300px]"
            {...register("notes")}
          ></textarea>
          <button className="full-w mx-auto mt-1 mb-8 hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block uppercase tracking-wide text-sm font-bold bg-white">
            submit workout
          </button>
          {errors.notes?.message}
        </form>
      </main>
    </div>
  );
};

export default AddWorkout;
