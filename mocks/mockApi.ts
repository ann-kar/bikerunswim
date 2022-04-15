import { IWorkout } from "../interfaces/IWorkout";
import { IStandardResponse } from "../interfaces/IApi";
import { mockWorkoutList } from "../mocks/mockWorkoutList";
import { mockStats } from "./mockStats";

export class MockApi {
  static async sendWorkout(data: IWorkout): Promise<IStandardResponse> {
    return await { statusCode: 200, message: "message received" };
  }
  static async getWorkouts(userId: string): Promise<IWorkout[]> {
    return await mockWorkoutList.filter((workout) => workout.userId === userId);
  }
  static async deleteWorkout(workoutId: string): Promise<IStandardResponse> {
    return await { statusCode: 200, message: "workout deleted" };
  }
  static async getStats(userId: string): Promise<IStats> {
    return await mockStats;
  }
}
