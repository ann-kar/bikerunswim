import { IWorkout } from "../interfaces/IWorkout";
import { IStandardResponse } from "../interfaces/IApi";
import { mockWorkoutList } from "../mocks/mockWorkoutList";

export class MockApi {
  static async sendWorkout(data: IWorkout): Promise<IStandardResponse> {
    return await { statusCode: 200, message: "message received" };
  }
  static async getWorkouts(userId: string): Promise<IWorkout[]> {
    return await mockWorkoutList.filter((workout) => workout.userId === userId);
  }
}
