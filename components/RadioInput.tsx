interface RadioInputProps {
  name: string;
  value: string;
  icon: string;
}

export const RadioInput = ({ name, value, icon }: RadioInputProps) => {
  return (
    <div className="radio">
      <label>
        <input type="radio" className="hidden" name={name} value={value} />
        <img className="sport-icon" src={`/${icon}`} />
      </label>
    </div>
  );
};
