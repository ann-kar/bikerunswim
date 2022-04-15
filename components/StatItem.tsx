import { IStatsResponse } from "../interfaces/IStats";

export const StatItem = ({ discipline, stats }: {discipline: string; stats: any}) => {
  return (
    <div className="w-full grow max-w-md mx-auto flex-wrap justify-center">
      <div className="border rounded-xl border-violet-100 py-3 flex mt-8 align-center bg-violet-100/50">
        <img src={`/${discipline}.svg`} className="m-8 w-16 h-16" />
        <div>
          <h2 className="mx-4 my-8 text-right text-lg text-violet-900">
            Total distance you covered {discipline}:&nbsp;
            <span className="font-bold text-violet-500">
              {stats.totalWorkouts.distance / 1000}&nbsp;km
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};
