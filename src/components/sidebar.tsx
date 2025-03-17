import { TwitterIcon } from "../icons/TwitteIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { useState } from "react";
import { Logo } from "../icons/Logo";

export interface SidebarProps {
  onFilterChange: (filter: string | null) => void;
}

export function Sidebar({ onFilterChange }: SidebarProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string | null) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };
  
  return (
    <div className="h-screen bg-white w-72 fixed left-0 top-0 shadow-lg flex flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center">
          <Logo className="w-8 h-8 text-blue-600 mr-2" />
          <span className="text-blue-600 text-2xl font-bold">Brainly</span>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 pt-4 px-2">
        <h3 className="text-gray-500 text-sm font-medium px-4 mb-2">CONTENT FILTERS</h3>
        
        <div className="space-y-1">
          <button 
            onClick={() => handleFilterClick(null)} 
            className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
              activeFilter === null ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
            }`}
          >
            <span className="font-medium">All Content</span>
          </button>
          
          <button 
            onClick={() => handleFilterClick("twitter")} 
            className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
              activeFilter === "twitter" ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
            }`}
          >
            <TwitterIcon className={activeFilter === "twitter" ? "text-blue-600" : ""} />
            <span className="ml-3 font-medium">Twitter</span>
          </button>
          
          <button 
            onClick={() => handleFilterClick("youtube")} 
            className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
              activeFilter === "youtube" ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
            }`}
          >
            <YoutubeIcon className={activeFilter === "youtube" ? "text-blue-600" : ""} />
            <span className="ml-3 font-medium">YouTube</span>
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t mt-auto">
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <a href="#" className="hover:text-blue-600">Help</a>
          <a href="#" className="hover:text-blue-600">Settings</a>
        </div>
      </div>
    </div>
  );
}