import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={`px-4 py-2 border rounded m-2 ${className}`}
                {...props} 
            />
        );
    }
);