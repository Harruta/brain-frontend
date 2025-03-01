import { ReactElement } from "react";

export function SidebarItem({ text, icon}: {
    text: string;
    icon: ReactElement;
}) {
    return (
        <div className="flex items-center gap-4 p-4 text-gray-500 cursor-pointer
        hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
            <div className="pr-2">
              {icon}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}