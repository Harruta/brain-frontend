import { TwitterIcon } from "../icons/TwitteIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./sidebaritem";

export function Sidebar() {
    return <div className="h-screen bg-white w-72 fixed left-0 top-0">
        <div className="pt-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon/>} />
        </div>
    </div>
}