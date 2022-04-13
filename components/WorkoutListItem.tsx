import { IWorkout } from "../interfaces/IWorkout";

export const WorkoutListItem = ({ workout }: { workout: IWorkout }) => {

  return (
    <div className="border-2 border-blue-200 p-2 flex justify-between">
      <span className="px-2">{workout.date}</span>
      <span>
        {workout.parts.map((part) => {
          return <span className="px-1">{part.discipline}</span>;
        })}
      </span>
      <button className="text-sm hover:font-semibold">details</button>
    </div>
  );
};
