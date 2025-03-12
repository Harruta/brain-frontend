import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../Config";

const SharedContent = () => {
  const { sharelink } = useParams();
  const [content, setContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        if (!sharelink) {
          setError("Invalid share link");
          setLoading(false);
          return;
        }

        const response = await fetch(`${BACKEND_URL}/api/v1/brain/${sharelink}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Error: ${response.status}`);
        }

        const data = await response.json();
        if (!data.content) {
          throw new Error("No content received from server");
        }
        setContent(data.content);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "An error occurred while fetching content");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [sharelink]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Shared Content</h1>
      <div className="whitespace-pre-wrap font-mono bg-gray-100 p-4 rounded-lg">
        {Array.isArray(content) && content.length > 0 ? (
          JSON.stringify(content, null, 2)
        ) : (
          <div>No content found</div>
        )}
      </div>
    </div>
  );
};

export default SharedContent;
