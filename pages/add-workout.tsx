import type { NextPage } from "next";
import "reflect-metadata";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WorkoutForm } from "../components/WorkoutForm";

const AddWorkout: NextPage = () => {
  return (
    <div>
      <main className="flex h-[100vh] flex-col">
        <Header label={"Log a new training"} />
        <div className="w-full grow flex-wrap bg-gray-50">
          <WorkoutForm />
        </div>
        <Footer label="home" link="./" />
      </main>
    </div>
  );
};

export default AddWorkout;
