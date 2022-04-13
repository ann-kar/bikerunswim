
interface DistanceInputProps {
    register?:any;
    errors?:any;
}

export const DistanceInput = ({ register, errors }: DistanceInputProps) => {
  return (
    <>
      <input
        className="w-52 mb-4 standard-input input-focus text-2xl"
        id="distanceInMeters"
        type="number"
        defaultValue={0}
        step={"any"}
        {...register("distanceInMeters", {
          setValueAs: (v: string) => (Number(v) * 1000).toFixed(3)
        })}
      />
      <p className="error">
        {errors.distanceInMeters?.message &&
          "distance must be at least 1m long"}
      </p>
    </>
  );
};
