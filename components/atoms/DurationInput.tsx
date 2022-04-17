import InputMask from "react-input-mask";
import { useFormContext } from "react-hook-form";
import { toSeconds } from "../../helpers/timeConverters";
import { HiddenInput } from "./HiddenInput";

let formatChars = {
  "0": "[0]",
  "5": "[0-5]",
  "9": "[0-9]",
};

export const DurationInput = ({ index }: { index: number }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleChange = (e: string) => {
    const inSeconds = toSeconds(e);
    setValue(`parts.${index}.durationInSeconds`, inSeconds);
  };

  return (
    <>
      <InputMask
        className="standard-input text-xl"
        onChange={(e: any) => {
          handleChange(e.target.value);
        }}
        mask="09:59:59"
        //@ts-ignore
        formatChars={formatChars}
      />
      <HiddenInput registerAs={`parts.${index}.durationInSeconds`}/>
      <small className="error">
        {(errors.parts &&
          errors.parts[index]?.durationInSeconds?.message &&
          "every workout must be at least 1 minute long") ||
          ""}
      </small>
    </>
  );
};
