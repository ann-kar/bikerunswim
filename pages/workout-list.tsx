import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";

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
    <main className="flex h-[100vh] flex-col">
      <Header label="see your workouts" />
      <div className="w-full grow flex-wrap">
        {workouts &&
          workouts.map((workout) => {
            return (
              <WorkoutListItem key={workout.workoutId} workout={workout} />
            );
          })}
      </div>
      <Footer link="./" label="home" />
    </main>
  );
};

export default WorkoutList;
