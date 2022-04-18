import { useEffect } from "react";
import React from "react";
import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import "reflect-metadata";
import { DateInput } from "../components/atoms/DateInput";
import { Label } from "../components/atoms/Label";
import { NotesInput } from "../components/atoms/NotesInput";
import { HiddenInput } from "../components/atoms/HiddenInput";
import { PartialWorkoutForms } from "../components/atoms/PartialWorkoutForms";
import { WorkoutClass } from "../validation/validationClasses";

const resolver = classValidatorResolver(WorkoutClass);

export const WorkoutForm = () => {

  const methods = useForm<WorkoutClass>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver,
  });

  useEffect(() => {
    methods.setValue("userId", "sampleUserId");
  }, []);

  const onSubmit = (data: any) => console.log("data", data);

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
        <input type="submit" />
      </form>
    </FormProvider>
  );
};
