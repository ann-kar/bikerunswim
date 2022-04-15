interface FooterProps {
    label: string;
    link: string;
}

export const Footer = ({label, link}: FooterProps) => {
    return (
        <a className="text-white text-center w-full  md:p-6 md:text-xl font-semibold tracking-wide grow-0 p-5 bg-blue-400 uppercase text-sm" href={link}>{label}</a>
    )
}