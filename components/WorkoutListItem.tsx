import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { IWorkout } from "../interfaces/IWorkout";
import { MockApi } from "../mocks/mockApi";
import { WorkoutNotes } from "./WorkoutNotes";

export const WorkoutListItem = ({ workout }: { workout: IWorkout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [workoutData, setWorkoutData] = useState<IWorkout>();
  const [editModeOn, setEditModeOn] = useState(false);
  const [shouldDelete, setShouldDelete] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => { // TODO: refactor
    setEditModeOn(false);
    console.log(data);
    const tempWorkoutData = workoutData;
    if (tempWorkoutData) {
      tempWorkoutData.notes = data.notes;
      tempWorkoutData.date = data.date;
      tempWorkoutData.parts[0].distanceInMeters =
        Number(data.parts[0].distanceInMeters) * 1000;
      tempWorkoutData.parts[1].distanceInMeters =
        Number(data.parts[1].distanceInMeters) * 1000;
    }
    setWorkoutData(tempWorkoutData);
  };

  useEffect(() => {
    setWorkoutData(workout);
  });

  const deleteWorkout = () => {
    if (workout.workoutId) {
      MockApi.deleteWorkout(workout.workoutId);
      setShouldDelete(true);
    }
  };

  const updateWorkout = () => {
    editModeOn ? setEditModeOn(false) : setEditModeOn(true);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const stringifyTime = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const toHours = (seconds: number) => {
    const hrs = stringifyTime(Math.floor(seconds / 3600));
    const mins = stringifyTime(Math.floor((seconds % 3600) / 60));
    const secs = stringifyTime(seconds % 60);
    return `${hrs} : ${mins} : ${secs}`;
  };

  if (shouldDelete) {
    return null;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden"></input>
        <div className="bg-blue-50/70 border-t border-slate-300/40 p-3 text-sm font-semibold py-4 flex justify-between">
          <span>
            {editModeOn ? (
              <input
                type="date"
                defaultValue={workoutData?.date}
                {...register("date")}
              />
            ) : (
              <span className="px-2">{workoutData?.date}</span>
            )}
            <span>
              {workoutData?.parts.map((part, i) => {
                return (
                  <span key={`part-${part.discipline}`}>
                    {i % 2 === 1 && <span>&ndash;</span>}
                    <span
                      key={part.discipline}
                      className="uppercase text-sm px-2 tracking-wide"
                    >
                      {part.discipline}
                    </span>
                  </span>
                );
              })}
            </span>
          </span>
          <span className="flex">
            <button
              onClick={(e) => handleClick(e)}
              className="text-sm hover:font-semibold"
            >
              details
            </button>
            <span onClick={updateWorkout} className="cursor-pointer">
              <img src="/edit_icon.svg" className="ml-2 h-5 w-5" />
            </span>
            <span onClick={deleteWorkout} className="cursor-pointer">
              <img src="/delete_icon.svg" className="ml-2 h-5 w-5" />
            </span>
          </span>
        </div>
        {isOpen && (
          <div>
            <table className="border-t  pb-2 w-full table-auto  text-center">
              <thead className="uppercase text-xs text-slate-700 bg-slate-50">
                <tr>
                  <th className="p-1 bg-slate-100/50">discipline</th>
                  <th className="bg-slate-100/50">distance</th>
                  <th className="bg-slate-100/50">duration</th>
                  <th colSpan={2} className="bg-slate-100/50">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {workoutData &&
                  workoutData.parts.map((part, i) => {
                    return (
                      <>
                        <tr className="border-t" key={`row-${part.discipline}`}>
                          <td className="p-2 w-1/3 text-xs font-semibold">
                            {part.discipline.toUpperCase()}
                          </td>
                          <td className="p-2 w-1/3">
                            {editModeOn ? (
                              <input
                                id="distanceInMeters"
                                type="number"
                                step="any"
                                className="w-28 leading-tight standard-input input-focus text-lg"
                                defaultValue={part.distanceInMeters / 1000}
                                {...register(`parts.${i}.distanceInMeters`, {
                                  setValueAs: (v: string) =>
                                    Number(Number(v).toFixed(3)),
                                })}
                              />
                            ) : (
                              <span>{part.distanceInMeters / 1000} km</span>
                            )}
                          </td>
                          <td className="p-2 w-1/3">
                            {toHours(part.durationInSeconds)}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
              <tfoot className="border-t bg-stone-100/50">
                <tr>
                  <td colSpan={3} className="px-10 py-2 text-left">
                    <span className="text-slate-600 text-sm italic flex align-center justify-between">
                      {editModeOn ? (
                        <textarea
                          defaultValue={workoutData?.notes}
                          {...register("notes")}
                        />
                      ) : (
                        <WorkoutNotes
                          notes={workoutData?.notes || "default notes"}
                        />
                      )}
                      {editModeOn && (
                        <button className="mx-auto m-4 hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded block uppercase tracking-wide text-xs font-bold bg-white">
                          save changes
                        </button>
                      )}
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </form>
    </>
  );
};
