import { useFormContext } from "react-hook-form";

export const HiddenInput = ({ registerAs }: { registerAs: string }) => {
  const { register } = useFormContext();
  return <input className="hidden" {...register(registerAs)} />;
};
