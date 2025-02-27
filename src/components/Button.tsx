import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon: ReactElement;
}
const variantClasses ={
    "primary": "bg-blue-500 text-white p-4",
    "secondary": "bg-purple-200 text-purple-600 p-4",
}

const defaultStles = "px-4 py-2 rounded-md font-light flex"

export function Button(
    {variant, text, startIcon}: ButtonProps) {
        return <button className={variantClasses[variant]+" "+
            defaultStles
        }>
            {startIcon}
            {text}
        </button>
    }
