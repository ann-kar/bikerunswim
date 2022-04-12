import { IGoal } from "./IGoal";
import { IWorkout } from "./IWorkout";

export type Gender = "male" | "female" | "other" | "prefer not to say";

export interface IUserLogin {
  userId: string;
  username: string;
  password: string;
}

export interface IUserDetails {
  userId: string;
  username: string;
  about?: string;
  gender?: Gender;
  avatar?: string;
  workouts?: IWorkout[];
  goals?: IGoal[];
}
