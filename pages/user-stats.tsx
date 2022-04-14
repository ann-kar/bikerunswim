import { useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IStatsResponse } from "../interfaces/IStats";
import { MockApi } from "../mocks/mockApi";

const UserStatsPage = () => {
  const [stats, setStats] = useState<IStatsResponse>();

  useEffect(() => {
    const res = MockApi.getStats("1");
    res.then((res) => setStats(res));
  });

  return (
    <main className="flex h-[100vh] flex-col">
      <Header label="check your statistics" />
      <div className="w-full grow flex-wrap">statistics</div>
      <Footer link="./" label="home" />
    </main>
  );
};

export default UserStatsPage;
