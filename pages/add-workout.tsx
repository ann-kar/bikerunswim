import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import {
  IsString,
  IsDateString,
  ValidateNested,
} from "class-validator";
import { useState } from "react";
import { Type } from "class-transformer";
import "reflect-metadata";

import { IWorkout, IPartialWorkout } from "../interfaces/IWorkout";
import { Header } from "../components/Header";
import { PartialWorkout, PartialWorkoutForm } from "../components/PartialWorkoutForm";

export class Workout implements IWorkout {
  @IsDateString()
  date!: string;
  @IsString()
  userId!: string;
  @ValidateNested({ each: true })
  @Type(() => PartialWorkout)
  parts!: PartialWorkout[];
}

const resolver = classValidatorResolver(PartialWorkout);

const AddWorkout: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Workout>({ resolver });
  const onSubmit = (data: Workout) => console.log(data);
  const [parts, setParts] = useState<IPartialWorkout[]>([]);

  return (
    <div>
      <main>
        <Header label={"Log a new training"} />
        <PartialWorkoutForm parts={parts} setParts={setParts} />
      </main>
    </div>
  );
};

export default AddWorkout;
