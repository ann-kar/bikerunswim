import { Type } from "class-transformer";
import { Min, Max, IsString, IsIn, IsInt, IsDateString, ValidateNested, IsNotEmpty, Matches, Equals } from "class-validator";
import { IPartialWorkout, Discipline, IWorkout } from "../interfaces/IWorkout";

export class PartialWorkoutClass implements IPartialWorkout {
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

  export class WorkoutClass implements IWorkout {
    @IsDateString()
    date!: string;
    @IsString()
    userId!: string;
    @ValidateNested({ each: true })
    @Type(() => PartialWorkoutClass)
    @IsNotEmpty()
    parts!: PartialWorkoutClass[];
    notes!: string;
  }
