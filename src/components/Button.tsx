import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-purple-200 text-purple-600 hover:bg-purple-300",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center justify-center space-x-2 transition duration-200";

export function Button({ variant, text, startIcon, onClick, fullWidth, loading }: ButtonProps) {
    return (
        <button 
            onClick={!loading ? onClick : undefined} // Prevent clicks when loading
            className={`${variantClasses[variant]} ${defaultStyles} 
                ${fullWidth ? 'w-full' : ''} 
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
        >
            {loading ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            ) : (
                <>
                    {startIcon && <span>{startIcon}</span>}
                    <span>{text}</span>
                </>
            )}
        </button>
    );
}
