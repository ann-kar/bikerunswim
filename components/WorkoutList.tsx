import { IWorkout } from "../interfaces/IWorkout";
import { WorkoutListItem } from "./WorkoutListItem";

export const WorkoutList = ({ workouts }: { workouts: IWorkout[] }) => {
  return (
    <div className="w-full grow flex-wrap">
      {workouts &&
        workouts.map((workout) => {
          return <WorkoutListItem key={workout.workoutId} workout={workout} />;
        })}
    </div>
  );
};
