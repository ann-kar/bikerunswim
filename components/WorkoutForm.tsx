import { useEffect, useState } from "react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import "reflect-metadata";
import { DateInput } from "../components/atoms/DateInput";
import { Label } from "../components/atoms/Label";
import { NotesInput } from "../components/atoms/NotesInput";
import { HiddenInput } from "../components/atoms/HiddenInput";
import { PartialWorkoutForms } from "../components/atoms/PartialWorkoutForms";
import { WorkoutClass } from "../validation/validationClasses";
import { Button } from "./atoms/Button";
import Link from "next/link";

const resolver = classValidatorResolver(WorkoutClass);

export const WorkoutForm = () => {
  const methods = useForm<WorkoutClass>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    methods.setValue("userId", "sampleUserId");
  }, []);

  const onSubmit = (data: any) => {
    console.log("data", data);
    methods.reset();
    setIsSubmitted(true);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="container mx-auto w-10/12 max-w-[300px]">
        <HiddenInput registerAs={"userId"} />
        <Label label={"date"} htmlFor={"date"} />
        <DateInput />
        <small className="error">
          {methods.formState.errors.date?.message}
        </small>
        <PartialWorkoutForms />
        <Label htmlFor="notes" label={"notes"} />
        <NotesInput />
        <small className="block m-4 text-md text-center font-bold text-emerald-500">
          {isSubmitted && "Workout added!"}
        </small>
        {isSubmitted ? (
          <Link href="./add-workout">
            <a className="block mx-auto w-6/12 my-4 text-center py-2 px-3 text-sm uppercase tracking-wide font-bold bg-white text-blue-500 border border-blue-400 rounded hover:text-white hover:bg-blue-500 btn-disabled">
              Add another workout
            </a>
          </Link>
        ) : (
          <Button label={"submit"} />
        )}
        <small className="error">
          {methods.formState.errors.parts &&
            "please select at least one activity"}
        </small>
      </form>
    </FormProvider>
  );
};
