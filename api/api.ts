import { IStandardResponse } from "../interfaces/IApi";
import { IWorkout } from "../interfaces/IWorkout";

interface IApi {
  sendWorkout(data: IWorkout): Promise<IStandardResponse>;
}

class Api implements IApi {
  async sendWorkout(data: IWorkout): Promise<IStandardResponse> {
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    return await response.json();
  }
}
