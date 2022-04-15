import { IStandardResponse } from "../interfaces/IApi";
import { IWorkout } from "../interfaces/IWorkout";

class Api {
  static async sendWorkout(data: IWorkout): Promise<IStandardResponse> {
    const response = await fetch("/api/training", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    return await response.json();
  }
  static async getWorkouts(userId: string): Promise<IWorkout[]> {
    const response = await fetch(
      "/api/training" +
        new URLSearchParams({
          userId: userId,
        })
    );
    return await response.json();
  }

  static async getWorkout(workoutId: string): Promise<IWorkout[]> {
    const response = await fetch(
      "/api/training" +
        new URLSearchParams({
          id: workoutId,
        })
    );
    return await response.json();
  }

  static async deleteWorkout(workoutId: string): Promise<IStandardResponse> {
    const response = await fetch(
      "/api/training" +
        new URLSearchParams({
          id: workoutId,
        }),
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    return await response.json();
  }
}
