

export const Label = ({htmlFor, label}:{htmlFor: string, label: string}) => {
    return (
        <label
        className="block mb-2 mt-6 standard-label"
        htmlFor={htmlFor} >
        {label}
      </label>
    )
}