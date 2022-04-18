export const Header = ({label}: {label: string}) => {
  return (
    <header data-testid="header"  className="w-full grow-0 align-center p-0 bg-blue-400">
      <div className="full-width text-md font-semibold p-4 md:p-6 md:text-xl uppercase text-white">
        {label}
      </div>
    </header>
  );
};
