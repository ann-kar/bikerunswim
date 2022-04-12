import { IWorkout } from "../interfaces/IWorkout";

export interface IStandardResponse {
  statusCode: number;
  message: string;
  error?: string;
}

export interface IApi {
  sendWorkout(data: IWorkout): Promise<IStandardResponse>;
}
