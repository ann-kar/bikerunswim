interface CheckboxInputProps {
  icon: string;
  onChange: any;
  value: string;
}

export const CheckboxInput = ({
  icon,
  value,
  onChange,
}: CheckboxInputProps) => {
  return (
    <div className="radio">
      <input
        id={value}
        type="checkbox"
        className="opacity-0 absolute h-8 w-8"
        onChange={onChange}
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
