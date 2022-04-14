import { useFormContext } from "react-hook-form";

export const HiddenInput = ({
  value,
  regName,
}: {
  value: any;
  regName: string;
}) => {
  const { register } = useFormContext();

  return <input type="hidden" value={value} {...register(regName)} />;
};
