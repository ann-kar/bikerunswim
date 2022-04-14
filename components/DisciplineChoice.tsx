import { Discipline } from "../interfaces/IWorkout";
import { CheckboxInput } from "./CheckboxInput";
import { Label } from "./Label";

export const DisciplineChoice = ({ disciplines, setDisciplines }: any) => {
  const handleDisciplineChoice = (value: any) => {
    setDisciplines((prevDisciplines: Discipline[]) => {
      if (prevDisciplines.includes(value)) {
        return prevDisciplines.filter((el) => el !== value);
      } else {
        return [...prevDisciplines, value];
      }
    });
  };

  return (
    <>
      <Label label={"sports practiced"} htmlFor="" />
      <div className="radio-group">
        <CheckboxInput
          name="discipline"
          value="biking"
          icon="biking.svg"
          onChange={(e: any) => handleDisciplineChoice(e.target.value)}
        />
        <CheckboxInput
          name="discipline"
          value="running"
          icon="running.svg"
          onChange={(e: any) => handleDisciplineChoice(e.target.value)}
        />
        <CheckboxInput
          name="discipline"
          value="swimming"
          icon="swimming.svg"
          onChange={(e: any) => handleDisciplineChoice(e.target.value)}
        />
      </div>
    </>
  );
};
