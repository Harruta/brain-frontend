import { useState } from "react";
import { BACKEND_URL } from "../Config";
//button so powerfull it wipes out everyting
interface DeleteIconProps {
    contentId: string;
    onDelete: (contentId: string) => void;
}

export function DeleteIcon({ contentId, onDelete }: DeleteIconProps) {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        if (loading) return; // Prevent multiple clicks
        setLoading(true);

        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        if (!token) {
            alert("Unauthorized: No token found. Please log in.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/api/v1/content`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token, // Include token in request
                },
                body: JSON.stringify({ contentId }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                onDelete(contentId); // Update UI
            } else {
                alert(data.message || "Failed to delete content");
            }
        } catch (error) {
            alert("Error deleting content");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleDelete} disabled={loading} className="text-gray-500 hover:text-red-500 transition">
            {loading ? (
                <span className="animate-spin">⏳</span>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            )}
        </button>
    );
}
