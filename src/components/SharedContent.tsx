import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../Config';
import { useEffect, useState } from 'react';

const SharedContent = () => {
  const { sharelink } = useParams<{ sharelink: string }>();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching shared content from an API
    const fetchContent = async () => {
      try {
        // Replace with actual API request
        const response = await fetch(`${BACKEND_URL}/api/v1/share/${sharelink}`);
        if (!response.ok) {
          throw new Error('Content not found');
        }
        const data = await response.text();
        setContent(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [sharelink]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Shared Content</h1>
      <p>{content}</p>
    </div>
  );
};

export default SharedContent;
