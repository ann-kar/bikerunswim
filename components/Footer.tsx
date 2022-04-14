interface FooterProps {
    label: string;
    link: string;
}

export const Footer = ({label, link}: FooterProps) => {
    return (
        <a className="text-white text-center block w-full fixed bottom-0 left-0 p-5 bg-blue-500 uppercase text-sm" href={link}>{label}</a>
    )
}