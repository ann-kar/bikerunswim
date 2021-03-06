import { IWorkout } from "../interfaces/IWorkout";

export interface IStandardResponse {
  statusCode: number;
  message: string;
  error?: string;
}

interface IApi {
  sendWorkout(data: IWorkout): Promise<IStandardResponse>;
  getWorkouts(userId: string): Promise<IWorkout[]>;
  deleteWorkout(workoutId: string): Promise<IStandardResponse>;
}