interface RadioInputProps {
  name: string;
  value: string;
  icon: string;
  register?: any;
}

export const RadioInput = ({ name, value, icon, register }: RadioInputProps) => {
  return (
    <div className="radio">
      <label htmlFor={value}>
        <input {...register(name)} id={value} type="radio" className="hidden" value={value} />
        <img className="sport-icon" src={`/${icon}`} />
      </label>
    </div>
  );
};
