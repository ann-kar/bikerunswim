import { FormProvider, useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useState } from "react";
import "reflect-metadata";

import { MockApi } from "../mocks/mockApi";
import { IWorkout, Discipline } from "../interfaces/IWorkout";
import { PartialWorkoutForm } from "../components/PartialWorkoutForm";
import { Label } from "./atoms/Label";
import { DisciplineChoice } from "./DisciplineChoice";
import { DateInput } from "./atoms/DateInput";
import { HiddenInput } from "./atoms/HiddenInput";
import { WorkoutClass } from "../validation/validationClasses";
import { NotesInput } from "./atoms/NotesInput";
import { Button } from "./atoms/Button";

const resolver = classValidatorResolver(WorkoutClass);

export const WorkoutForm = () => {
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const methods = useForm<WorkoutClass>({ resolver });

  const onSubmit = async (data: IWorkout) => {
    const response = await MockApi.sendWorkout(data);
    if (response.statusCode === 200) {
      setIsSubmitted(true);
      methods.reset();
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="container mx-auto w-10/12 max-w-[300px]"
          onSubmit={methods.handleSubmit(onSubmit)}>
          <Label label={"date"} htmlFor={"date"} />
          <DateInput />
          <small className="error">
            {methods.formState.errors.date?.message}
          </small>
          <DisciplineChoice
            discipline={disciplines}
            setDisciplines={setDisciplines}
          />
          {["biking", "running", "swimming"].map((discipline, i) => {
            if (disciplines.includes(discipline as Discipline)) {
              return (
                <PartialWorkoutForm
                  key={`partial-${discipline}`}
                  discipline={discipline}
                  index={i}
                />
              );
            }
          })}
          <HiddenInput value={"sampleUserId"} regName={"userId"} />
          <Label htmlFor="notes" label={"notes"} />
          <NotesInput />
          <small className="error">
            {methods.formState.errors.notes?.message}
          </small>
          <div className="mt-8 mb-8 flex flex-col justify-center">
            {isSubmitted? <a
            className="block mx-auto w-6/12 mb-8 py-2 text-center px-3 text-sm uppercase tracking-wide font-bold bg-white text-blue-500 border border-blue-400 rounded hover:text-white hover:bg-blue-500"
            href="./add-workout">add new workout</a>: <Button label={"submit"} /> }

            {isSubmitted && (
              <small className="text-sm  text-center font-semibold text-emerald-500">
                Workout added!
              </small>
            )}
            <small className="error text-center">
              {methods.formState.errors && methods.formState.errors.parts &&
                "isNotEmpty" &&
                "please provide data for at least one discipline"}
            </small>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
