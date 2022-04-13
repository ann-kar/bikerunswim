interface CheckboxInputProps {
  name: string;
  value: string;
  icon: string;
  onChange: any;
  register?: any;
}

export const CheckboxInput = ({
  value,
  icon,
  onChange,
}: CheckboxInputProps) => {
  return (
    <div className="radio">
      <input
        id={value}
        type="checkbox"
        className="opacity-0 absolute h-8 w-8"
        onChange={(e: any) => onChange(e)}
        value={value}
      />
      <label
        htmlFor={value}
        className="block border-gray-100 border-[1px] rounded-lg hover:shadow-lg active:bg-blue-50 duration-200 m-4 mt-1 h-20 w-20"
      >
        <img className="h-20 w-20 p-2" src={`/${icon}`} />
      </label>
    </div>
  );
};
