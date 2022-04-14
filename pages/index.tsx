import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WorkoutList } from "../components/WorkoutList";

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
          <div className="flex flex-wrap align-center h-[50%] w-full py-8 justify-center">
            <a
              className="text-blue-700 border border-blue-500 hover:text-white  hover:bg-blue-500 rounded block uppercase tracking-wide text-sm font-bold bg-white"
              href="./workout-list">
                <div className="pointer-events-none">
                  <p className=" py-6 px-4">see your recent workouts</p>
              <WorkoutList />
                </div>

            </a>
          </div>
          <div className="flex align-center h-[50%] w-full py-8 justify-center">
            <a
              className="hover:bg-blue-500 w-6/12 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block uppercase tracking-wide text-sm font-bold bg-white"
              href="./user-stats">
              check out your statistics
            </a>
          </div>
        </div>
        <Footer link="./add-workout" label="Log a new workout" />
      </main>
    </div>
  );
};

export default Home;
