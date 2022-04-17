import { useFormContext } from "react-hook-form";
import { DistanceInput } from "./atoms/DistanceInput";
import { DurationInput } from "./atoms/DurationInput";
import { HiddenInput } from "./atoms/HiddenInput";
import { InputCnt } from "./InputCnt";
import { Label } from "./atoms/Label";
import { useEffect, useState } from "react";

interface PartialWorkoutFormProps {
  discipline?: string;
  index: number;
}

export const PartialWorkoutForm = ({
  discipline,
  index,
}: PartialWorkoutFormProps) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setValue(`parts.${index}.discipline`, discipline);
  }, []);

  //@ts-ignore
  const handleInput = ({ target: { value } }) => setPhone(value);

  return (
    <>
      <h2 className="w-full text-center mt-4 mb-6 uppercase font-semibold text-lg">
        {discipline}
      </h2>
      <HiddenInput registerAs={`parts.${index}.discipline`} />
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
      </InputCnt>
    </>
  );
};
