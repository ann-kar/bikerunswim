import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Min, IsString, IsIn, IsInt, Max } from "class-validator";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { IPartialWorkout, Discipline } from "../interfaces/IWorkout";
import { Button } from "./Button";
import { DistanceInput } from "./DistanceInput";
import { DurationInput } from "./DurationInput";
import { HiddenInput } from "./HiddenInput";
import { InputCnt } from "./InputCnt";
import { Label } from "./Label";

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

interface PartialWorkoutFormProps {
  setParts: Dispatch<SetStateAction<IPartialWorkout[]>>;
  discipline: string;
}

export const PartialWorkoutForm = ({
  discipline,
  setParts,
}: PartialWorkoutFormProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const methods = useForm<PartialWorkout>({ resolver });

  const onSubmit = (data: PartialWorkout) => {
    setIsDisabled(true);
    setParts((prevParts: PartialWorkout[]) => [...prevParts, data]);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="container mx-auto max-w-[300px]"
        onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className="w-full text-center mt-4 mb-6 uppercase font-semibold text-lg">
          {discipline}
        </h2>
        <HiddenInput value={discipline} regName="discipline" />
        <InputCnt>
          <Label htmlFor="distanceInMeters" label="DISTANCE IN KM" />
          <DistanceInput />
        </InputCnt>
        <InputCnt>
          <Label htmlFor="durationInSeconds" label="DURATION (hh:mm:ss)" />
          <DurationInput />
        </InputCnt>
        <Button isDisabled={isDisabled} label={"save this part"} />
      </form>
    </FormProvider>
  );
};
