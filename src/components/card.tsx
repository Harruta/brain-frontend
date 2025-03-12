import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { useEffect } from "react";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
    contentId: string;
    onDelete: (contentId: string) => void;
}

export function Card({ title, link, type, contentId, onDelete }: CardProps) {
    useEffect(() => {
        if (type === "twitter") {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, [type]);

    return (
        <div className="p-4 bg-white rounded-md border-gray-200 border w-fit self-start">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div className="text-gray-500 hover:text-red-500 cursor-pointer">
                        <DeleteIcon contentId={contentId} onDelete={onDelete} />
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && (
                    <iframe
                        className="w-full aspect-video rounded-md"
                        src={link.replace("watch", "embed").replace("?v=", "/")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
            </div>

            <div className="pt-4">
                {type === "twitter" && (
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                )}
            </div>
        </div>
    );
}
