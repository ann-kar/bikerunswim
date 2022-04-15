import { useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { DoughnutChart } from "../components/stats/DoughnutChart";
import { IStatsResponse } from "../interfaces/IStats";
import { MockApi } from "../mocks/mockApi";

const UserStatsPage = () => {
  const [stats, setStats] = useState<IStatsResponse>();
  const [favorite, setFavorite] = useState<string>();

  useEffect(() => {
    const res = MockApi.getStats("1");
    res.then((res) => setStats(res));
  }, []);

  useEffect(() => {
    if (stats) {
      if (
        stats.running.totalWorkouts.workoutsCount >
          stats.cycling.totalWorkouts.workoutsCount &&
        stats.running.totalWorkouts.workoutsCount >
          stats.swimming.totalWorkouts.workoutsCount
      ) {
        setFavorite("running");
      } else if (
        stats.cycling.totalWorkouts.workoutsCount >
        stats.swimming.totalWorkouts.workoutsCount
      ) {
        setFavorite("cycling");
      } else {
        setFavorite("swimming");
      }
    }
  }, [stats]);

  return (
    <main className="flex h-[100vh] flex-col">
      <Header label="check your statistics" />
      {stats && (
        <div className="px-4 py-8 grow flex-wrap">
          <h2 className="ml-10 pb-10 text-right leading-7 text-lg text-violet-900">
            You have completed
            <span className="font-bold text-violet-500">
              &nbsp;
              {stats.running.totalWorkouts.workoutsCount +
                stats.cycling.totalWorkouts.workoutsCount +
                stats.swimming.totalWorkouts.workoutsCount}
              &nbsp;
            </span>
            workouts
          </h2>
          <h2 className="mr-10 pr-10 leading-7 text-lg text-violet-900">
            The discipline you practiced most often is&nbsp;
            <span className="font-bold text-violet-500">{favorite}</span>
          </h2>
          <div className="mt-6 mx-auto flex flex-wrap justify-center">
            <DoughnutChart
              labels={["running", "cycling", "swimming"]}
              values={[
                stats.running.totalWorkouts.workoutsCount,
                stats.cycling.totalWorkouts.workoutsCount,
                stats.swimming.totalWorkouts.workoutsCount,
              ]}
            />
            <small className="block w-full text-violet-900 tracking-wide text-center uppercase text-md font-semibold">
              Total workouts per discipline
            </small>
          </div>
        </div>
      )}
      <Footer link="./" label="home" />
    </main>
  );
};

export default UserStatsPage;
