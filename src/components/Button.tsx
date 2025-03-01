import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
}

const variantClasses = {
    primary: "bg-blue-500 text-white p-4",
    secondary: "bg-purple-200 text-purple-600 p-4",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center space-x-2";

export function Button({ variant, text, startIcon, onClick, fullWidth }: ButtonProps) {
    return (
        <button 
            onClick={onClick} 
            className={`${variantClasses[variant]} ${defaultStyles} ${fullWidth ? 'w-full flex justify-center items-center' : ""}`}
        >
            {startIcon && <span>{startIcon}</span>}
            <span>{text}</span>
        </button>
    );
}
