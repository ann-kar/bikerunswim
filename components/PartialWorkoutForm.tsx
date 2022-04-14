import { useFormContext } from "react-hook-form";
import { DistanceInput } from "./atoms/DistanceInput";
import { DurationInput } from "./atoms/DurationInput";
import { HiddenInput } from "./atoms/HiddenInput";
import { InputCnt } from "./InputCnt";
import { Label } from "./atoms/Label";

interface PartialWorkoutFormProps {
  discipline?: string;
  index: number;
}

export const PartialWorkoutForm = ({
  discipline,
  index,
}: PartialWorkoutFormProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h2 className="w-full text-center mt-4 mb-6 uppercase font-semibold text-lg">
        {discipline}
      </h2>
      <HiddenInput value={discipline} regName={`parts.${index}.discipline`} />
      <InputCnt>
        <Label htmlFor={`distanceInMeters`} label="DISTANCE IN KM" />
        <DistanceInput index={index} />
        <small className="error">
          {errors.parts && errors.parts[index]?.distanceInMeters?.message}
        </small>
      </InputCnt>
      <InputCnt>
        <Label htmlFor={`durationInSeconds`} label="DURATION (hh:mm:ss)" />
        <DurationInput index={index} />
        <small>
          {errors.parts &&
            errors.parts[index]?.durationInSeconds.message &&
            "a workout must be at least 1 minute long"}
        </small>
      </InputCnt>
    </>
  );
};
