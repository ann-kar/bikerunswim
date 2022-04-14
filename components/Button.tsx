interface ButtonProps {
  isDisabled?: boolean;
  label: string;
}

export const Button = ({ isDisabled, label }: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className="block mx-auto w-6/12 mb-8 py-2 px-3 text-sm uppercase tracking-wide font-bold bg-white text-blue-500 border border-blue-400 rounded hover:text-white hover:bg-blue-500 btn-disabled">
      {label}
    </button>
  );
};
