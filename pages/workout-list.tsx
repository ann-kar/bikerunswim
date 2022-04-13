import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { WorkoutListItem } from "../components/WorkoutListItem";
import { IWorkout } from "../interfaces/IWorkout";
import { MockApi } from "../mocks/mockApi";

const WorkoutList = () => {
  const [mockUserId, setMockUserId] = useState<string>("1");
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const res = MockApi.getWorkouts(mockUserId);
    res.then((res) => setWorkouts(res));
  }, []);

  return (
    <main>
      <Header label="see your workouts" />
      <div>
        {workouts &&
          workouts.map((workout) => {
            return (
              <WorkoutListItem key={workout.workoutId} workout={workout}/>
            );
          })}
      </div>
    </main>
  );
};

export default WorkoutList;
