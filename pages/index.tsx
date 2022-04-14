import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import WorkoutList from "./workout-list";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Train for the TRIATHLON</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex h-[100vh] flex-col">
        <Header label="Welcome back!" />
        <div className="w-full  grow flex-wrap bg-blue-50">
          <div className="flex h-[50%] w-full py-8 justify-start">
            <div className="w-9/12 border-2 text-blue-900 text-lg border-blue-300 rounded-xl rounded-l-none py-3 px-3">
              see your recent workouts
            </div>
          </div>
          <div className="flex h-[50%] w-full py-8 justify-end">
            <h3 className="w-9/12 border-2 text-blue-900 text-lg border-blue-300 rounded-xl rounded-r-none text-right py-3 px-3">
              check out your statistics
            </h3>
          </div>
        </div>
        <Footer link="./add-workout" label="Log a new workout" />
      </main>
    </div>
  );
};

export default Home;
