import { useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WorkoutList } from "../components/WorkoutList";
import { IWorkout } from "../interfaces/IWorkout";
import { MockApi } from "../mocks/mockApi";

const WorkoutListPage = () => {
  const [mockUserId, setMockUserId] = useState<string>("1");
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const res = MockApi.getWorkouts(mockUserId);
    res.then((res) => setWorkouts(res));
  }, []);

  return (
    <main className="flex h-[100vh] flex-col">
      <Header label="see your workouts" />
      <WorkoutList workouts={workouts} />
      <Footer link="./" label="home" />
    </main>
  );
};

export default WorkoutListPage;
