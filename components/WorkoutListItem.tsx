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

  const onSubmit = async (data: any) => {
    // TODO: refactor
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
        <div className="border-y pl-2 border-violet-200 text-md flex justify-between">
          <span className="block mt-4">
            {editModeOn ? (
              <input
                type="date"
                defaultValue={workoutData?.date}
                {...register("date")}
              />
            ) : (
              <span className="block font-semibold px-4 pb-2 text-lg">
                {workoutData?.date}
              </span>
            )}
            <span className="px-2 block mb-4">
              {workoutData?.parts.map((part, i) => {
                return (
                  <span key={`part-${part.discipline}`}>
                    {i % 2 === 1 && <span>&ndash;</span>}
                    <span
                      key={part.discipline}
                      className="uppercase px-2 tracking-wide">
                      {part.discipline}
                    </span>
                  </span>
                );
              })}
            </span>
          </span>
          <div className="flex">
            <button
              onClick={(e) => handleClick(e)}
              className="text-sm mx-4 text-violet-700 hover:font-semibold">
              see details
            </button>
          </div>
        </div>
        {isOpen && (
          <div>
            <table className="border-t pb-2 w-full table-auto  text-center">
              <thead className="uppercase text-xs text-slate-700 bg-slate-50">
                <tr>
                  <th className="p-2 bg-slate-100/50">discipline</th>
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
                              <span className="block py-3">{part.distanceInMeters / 1000} km</span>
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
              <tfoot className="border-t bg-gray-100">
                <tr>
                  <td colSpan={2} className=" px-10 py-2 text-left">
                    <span className="text-slate-600 text-sm italic flex align-center justify-between">
                      {editModeOn ? (
                        <textarea
                        className="overflow-scroll"
                          defaultValue={workoutData?.notes}
                          {...register("notes")}
                        />
                      ) : (
                        <WorkoutNotes
                          notes={workoutData?.notes || "default notes"}
                        />
                      )}
                    </span>
                  </td>
                  <td className="flex justify-end">
                    {editModeOn ? (
                      <button className="mx-auto m-4 hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded block uppercase tracking-wide text-xs font-bold bg-white">
                        save changes
                      </button>
                    ) : (
                      <div className="flex m-0 p-0">
                        <img
                          src="/edit_icon.svg"
                          className="cursor-pointer mx-3 h-6 w-6 my-auto"
                          onClick={updateWorkout}
                        />
                        <img
                          src="/delete_icon.svg"
                          className="cursor-pointer mx-3 h-6 w-6 my-3"
                          onClick={deleteWorkout}
                        />
                      </div>
                    )}
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
