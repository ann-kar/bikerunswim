export const Header = ({label}: {label: string}) => {
  return (
    <header className="align-center p-0 bg-blue-400">
      <div className="full-width text-md font-semibold p-4 uppercase text-white">
        {label}
      </div>
    </header>
  );
};
