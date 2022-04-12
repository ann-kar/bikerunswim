export type Discipline = "biking" | "swimming" | "running";
export type Gender = "male" | "female" | "other" | "prefer not to say";
export type GoalType = "distance" | "workoutCount";

export interface IUserLogin {
  userId: string;
  username: string;
  password: string;
}

export interface IUserDetails {
  userId: string;
  username: string;
  about?: string;
  gender?: string;
  avatar?: string;
  workouts?: IWorkout[];
  goals?: IGoal[];
}

export interface IGoal {
  userId: string;
  goalId: string;
  type: "distance" | "workoutCount";
  startDate: string;
  endDate: string;
  name: string;
  notes?: string;
  isCompleted: boolean;
}

export interface IPartialWorkout {
  discipline: Discipline;
  distanceInMeters: number;
  durationInSeconds: number;
}

export interface IStandardResponse {
  statusCode: number;
  message: string;
  error?: string;
}

export interface IWorkout {
  workoutId: string;
  userId: string;
  date: string;
  parts: IPartialWorkout[];
  notes?: string;
}
