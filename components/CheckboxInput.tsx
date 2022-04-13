interface CheckboxInputProps {
    name: string;
    value: string;
    icon: string;
    onChange: any;
    register?: any;
  }

  export const CheckboxInput = ({ value, icon, onChange }: CheckboxInputProps) => {
    return (
      <div className="radio">
        <label htmlFor={value} className="checkbox-input">
          <input id={value} type="checkbox" onChange={(e:any) => onChange(e)} className="" value={value} />
          <img className="sport-icon" src={`/${icon}`} />
        </label>
      </div>
    );
  };
