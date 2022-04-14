import { useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { StatItem } from "../components/StatItem";
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
       <div className="w-full grow flex-wrap justify-center">
        <StatItem stats={stats.cycling} discipline="biking" />
        <StatItem stats={stats.swimming} discipline="swimming" />
        <StatItem stats={stats.running} discipline="running" />
      </div>
    )}
      <Footer link="./" label="home" />
    </main>
  );
};

export default UserStatsPage;
