import { useState, useEffect } from "react";
import { IWorkout } from "../interfaces/IWorkout";
import { MockApi } from "../mocks/mockApi";
import { WorkoutListItem } from "./WorkoutListItem";

export const WorkoutList = () => {
  const [mockUserId, setMockUserId] = useState<string>("1");
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const res = MockApi.getWorkouts(mockUserId);
    res.then((res) => setWorkouts(res));
  }, []);

  return (
    <div className="w-full grow mx-auto max-w-md flex-wrap">
      {workouts &&
        workouts.map((workout) => {
          return <WorkoutListItem key={workout.workoutId} workout={workout} />;
        })}
    </div>
  );
};
