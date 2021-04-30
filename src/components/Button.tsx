export const Button = ({
    name,
    type,
    onClick = null,
}: {
    name: string;
    type?: string;
    onClick?: any;
}) => {
    let hoverBG: string;
    let bg: string;
    switch (type) {
        case 'primary':
            hoverBG = 'bg-blueGray-200';
            bg = 'bg-blueGray-300';
            break;
        default:
            hoverBG = 'bg-blueGray-200';
            bg = 'transparent';
            break;
    }
    return (
        <button
            className={`${bg} transition-colors duration-200 px-5 py-2 rounded-md mx-4 font-medium text-base hover:${hoverBG} focus:outline-none`}
            onClick={onClick}
        >
            {name}
        </button>
    );
};
