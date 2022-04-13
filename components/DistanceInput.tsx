
interface DistanceInputProps {
    register?:any;
    errors?:any;
}

export const DistanceInput = ({ register, errors }: DistanceInputProps) => {
  return (
    <>
      <input
        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight  input-focus"
        id="distanceInMeters"
        type="number"
        defaultValue={2.25}
        step={0.01}
        {...register("distanceInMeters", {
          setValueAs: (v: string) => Number(v) * 1000,
        })}
      />
      <p className="text-red-500 text-xs italic">
        {errors.distanceInMeters?.message &&
          "distance must be greater than zero"}
      </p>
    </>
  );
};
