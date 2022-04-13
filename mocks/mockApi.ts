import { IWorkout } from "../interfaces/IWorkout";
import {IStandardResponse} from "../interfaces/IApi";

export class MockApi {
  static async sendWorkout(data: IWorkout): Promise<IStandardResponse> {
    return await {statusCode: 200, message: "message received"};
  }
}
