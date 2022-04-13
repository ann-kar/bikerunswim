import { IStandardResponse } from "../interfaces/IApi";
import { IWorkout } from "../interfaces/IWorkout";

interface IApi {
  sendWorkout(data: IWorkout): Promise<IStandardResponse>;
  getWorkouts(userId: string): Promise<IWorkout[]>
}

class Api {
  static async sendWorkout(data: IWorkout): Promise<IStandardResponse> {
    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    return await response.json();
  }
  static async getWorkouts(userId: string): Promise<IWorkout[]> {
    const response = await fetch(
      "/api?" +
        new URLSearchParams({
          userId: userId,
        })
    );
    return await response.json();
  }
}
