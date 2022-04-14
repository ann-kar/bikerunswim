export const StatItem = ({ discipline, stats }: any) => {
  return (
    <div className="w-full grow flex-wrap justify-center">
      <img src={`/${discipline}.svg`} className="m-8 w-20 h-20" />
      <h2 className="text-xl m-8">
        The longest distance in a single workout:
        <span className="font-bold ml-2">{stats.topWorkout.distance/1000} km</span>
      </h2>
      <h2 className="text-xl m-8">
        The highest speed:
        <span className="font-bold ml-2">{stats.topWorkout.speed} km/h</span>
      </h2>
    </div>
  );
};
