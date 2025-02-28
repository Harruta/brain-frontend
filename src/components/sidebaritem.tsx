import { ReactElement } from "react";

export function SidebarItem({ text, icon}: {
    text: string;
    icon: ReactElement;
}) {
    return (
        <div className="flex items-center gap-4 p-4">
            {icon}
            {text}
        </div>
    );
}