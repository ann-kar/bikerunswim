import type { NextPage } from "next";
import "reflect-metadata";
import { Header } from "../components/Header";
import { WorkoutForm } from "../components/WorkoutForm";

const AddWorkout: NextPage = () => {
  return (
    <div>
      <main>
        <Header label={"Log a new training"} />
        <WorkoutForm/>
      </main>
    </div>
  );
};

export default AddWorkout;
