import { useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { StatItem } from "../components/StatItem";
import { DoughnutChart } from "../components/stats/DoughnutChart";
import { IStatsResponse } from "../interfaces/IStats";
import { MockApi } from "../mocks/mockApi";
import { mockStats } from "../mocks/mockStats";

const UserStatsPage = () => {
  const [stats, setStats] = useState<IStatsResponse>();

  useEffect(() => {
    const res = MockApi.getStats("1");
    res.then((res) => setStats(res));
  }, []);

  return (
    <main className="flex h-[100vh] flex-col">
      <Header label="check your statistics" />
      {stats && (
        <div className="px-4 py-8 grow flex-wrap">
            <h2 className="mr-10 pr-10 leading-7 text-lg text-violet-900">
              The discipline you practice most often is&nbsp;
              <span className="font-bold text-violet-500">running</span>
            </h2>
            <div className="my-6 mx-auto flex flex-wrap justify-center">
              <DoughnutChart
                labels={["running", "biking", "swimming"]}
                values={[
                  stats.running.totalWorkouts.workoutsCount,
                  stats.cycling.totalWorkouts.workoutsCount,
                  stats.swimming.totalWorkouts.workoutsCount,
                ]}
              />
              <small className="block w-full text-violet-900 tracking-wide text-center uppercase text-sm font-semibold">
                Total workouts per discipline
              </small>

          </div>

          {/* <StatItem stats={stats.cycling} discipline="biking" />
        <StatItem stats={stats.swimming} discipline="swimming" />
        <StatItem stats={stats.running} discipline="running" /> */}
        </div>
      )}
      <Footer link="./" label="home" />
    </main>
  );
};

export default UserStatsPage;
