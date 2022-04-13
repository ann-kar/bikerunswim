import { useState } from "react";
import { IWorkout } from "../interfaces/IWorkout";

export const WorkoutListItem = ({ workout }: { workout: IWorkout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
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

  return (
    <>
      <div className="bg-blue-100/90 border-t border-blue-900/20 p-3 flex justify-between">
        <span>
          <span className="px-2">{workout.date}</span>
          <span>
            {workout.parts.map((part, i) => {
              return (
                <>
                  {i % 2 === 1 && <span>&ndash;</span>}
                  <span className="uppercase text-sm px-2 tracking-wide">
                    {part.discipline}
                  </span>
                </>
              );
            })}
          </span>
        </span>
        <button onClick={handleClick} className="text-sm hover:font-semibold">
          details
        </button>
      </div>
      {isOpen && (
        <div>
          <table className="border-t  pb-2 table-auto w-full text-center">
            <thead className="uppercase text-xs text-slate-700 bg-slate-50">
              <th className="p-1 bg-slate-100/50">discipline</th>
              <th className="bg-slate-100/50">distance</th>
              <th className="bg-slate-100/50">duration</th>
            </thead>
            <tbody className=" ">
              {workout.parts.map((part) => {
                return (
                  <tr className="border-t">
                    <td className="p-2 text-xs font-semibold">
                      {part.discipline.toUpperCase()}
                    </td>
                    <td className="p-2">{part.distanceInMeters / 1000} km</td>
                    <td className="p-2">{toHours(part.durationInSeconds)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
