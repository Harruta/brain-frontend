import { TwitterIcon } from "../icons/TwitteIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

export interface SidebarProps {
  onFilterChange: (filter: string | null) => void;
}

export function Sidebar({ onFilterChange }: SidebarProps) {
  return (
    <div className="h-screen bg-white w-72 fixed left-0 top-0 pl-6 pt-6">
      <div className="flex items-center text-2xl font-bold pl-2 space-x-2">
        <span className="ml-[-4px]">Brainly</span>
      </div>
      <div className="pt-6">
        {/* "All" resets the filter */}
        <button 
          onClick={() => onFilterChange(null)} 
          className="block p-2 text-lg hover:bg-gray-100"
        >
          All
        </button>
        <button 
          onClick={() => onFilterChange("twitter")} 
          className="block p-2 text-lg flex items-center hover:bg-gray-100"
        >
          <TwitterIcon />
          <span className="ml-2">Twitter</span>
        </button>
        <button 
          onClick={() => onFilterChange("youtube")} 
          className="block p-2 text-lg flex items-center hover:bg-gray-100"
        >
          <YoutubeIcon />
          <span className="ml-2">YouTube</span>
        </button>
      </div>
    </div>
  );
}
