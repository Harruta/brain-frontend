import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useState, useEffect } from "react";

export function useContent() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/content`,{
                    headers: {
                        Authorization: localStorage.getItem("token"
                    },
                });
                setContents(response.data.content);
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        };

        fetchData();
    }, []);

    return contents;
}
