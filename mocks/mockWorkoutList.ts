import { IWorkout } from "../interfaces/IWorkout";

export const mockWorkoutList: IWorkout[] = [
  {
    workoutId: "1",
    userId: "1",
    date: "2022-04-01",
    parts: [
      {
        discipline: "biking",
        distanceInMeters: 2022,
        durationInSeconds: 343360,
      },
      {
        discipline: "running",
        distanceInMeters: 2022,
        durationInSeconds: 343360,
      },
    ],
    notes: "evening workout",
  },
  {
    workoutId: "2",
    userId: "1",
    date: "2022-04-02",
    parts: [
      {
        discipline: "biking",
        distanceInMeters: 2422,
        durationInSeconds: 144060,
      },
    ],
    notes: "morning workout",
  },
  {
    workoutId: "3",
    userId: "2",
    date: "2022-04-042",
    parts: [
      {
        discipline: "swimming",
        distanceInMeters: 500,
        durationInSeconds: 3600,
      },
    ],
    notes: "my first workout",
  },
];
