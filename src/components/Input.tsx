import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, { placeholder?: string }>(
    ({ placeholder }, ref) => {
        return (
            <div>
                <input
                    placeholder={placeholder}
                    type="text"
                    className="px-4 py-2 border rounded m-2"
                    ref={ref || undefined} 
                />
            </div>
        );
    }
);
