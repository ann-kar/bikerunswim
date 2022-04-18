import { useFormContext } from "react-hook-form";
import { HiddenInput } from "./HiddenInput";

export const DistanceInput = ({ index }: { index: number }) => {
  const {
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  const handleChange = (e: string) => {
    const meters = Number(e) * 1000;
    setValue(`parts.${index}.distanceInMeters`, meters);
    trigger(`parts.${index}.distanceInMeters`);
  };
  return (
    <>
      <input
      data-testid="distanceInMeters"
        className="w-52 mb-4 standard-input input-focus text-2xl"
        id="distanceInMeters"
        type="number"
        step={"any"}
        onChange={(e: any) => {
          handleChange(e.target.value);
        }}
      />
      <HiddenInput registerAs={`parts.${index}.distanceInMeters`} />
      <small className="error">
        {errors.parts &&
          errors.parts[index]?.distanceInMeters?.message &&
          "every workout must be at least 1 meter far"}
      </small>
    </>
  );
};
