import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WorkoutList } from "../components/WorkoutList";

const WorkoutListPage = () => {
  return (
    <main className="flex h-[100vh] flex-col">
      <Header label="see your workouts" />
      <WorkoutList />
      <Footer link="./" label="home" />
    </main>
  );
};

export default WorkoutListPage;
