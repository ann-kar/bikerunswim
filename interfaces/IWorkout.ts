export type Discipline = "biking" | "swimming" | "running";

export interface IPartialWorkout {
  discipline: Discipline;
  distanceInMeters: number;
  durationInSeconds: number;
}

export interface IWorkout {
  workoutId?: string;
  userId: string;
  date: string;
  parts: IPartialWorkout[];
  notes?: string;
}
