import { TwitterIcon } from "../icons/TwitteIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./sidebaritem";
import { Logo } from "../icons/Logo";

export function Sidebar() {
    return (
        <div className="h-screen bg-white w-72 fixed left-0 top-0 pl-6 pt-6">
            <div className="flex items-center text-2xl font-bold pl-2 space-x-2">
                <Logo />
                <span className="ml-[-4px]">Brainly</span>
            </div>
            <div className="pt-6">
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
            </div>
        </div>
    );
}
