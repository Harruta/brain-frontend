import { ShareIcon } from "../icons/ShareIcon";

export function Card() {
    return <div>
       <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border">
       <div className="flex justify-between">
            <div className="flex items-center text-md">
                <div className="text-gray-500 pr-2">
                    <ShareIcon />
                </div>
                Project Ideas
            </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon />
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
                </div>
            
        </div>
       </div>
    </div>
}