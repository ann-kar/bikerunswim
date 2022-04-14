import { useFormContext } from "react-hook-form";

export const DistanceInput = ({index}:{index: number}) => {

  const { register, formState: {errors} } = useFormContext();

  return (
    <>
      <input
        className="w-52 mb-4 standard-input input-focus text-2xl"
        id="distanceInMeters"
        type="number"
        defaultValue={0}
        step={"any"}
        {...register(`parts.${index}.distanceInMeters`, {
          setValueAs: (v: string) => Number((Number(v) * 1000).toFixed(3)),
        })}
      />
    </>
  );
};
