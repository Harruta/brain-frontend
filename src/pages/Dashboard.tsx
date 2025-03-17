import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { CreateContentModel } from "../components/CreateContentModel";
import { Card } from "../components/card";
import { PlusIcon } from "../icons/Pluesicon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../Config";

interface Content {
  _id: string;
  type: string;
  link: string;
  title: string;
}

const Dashboard: React.FC = () => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string | null>(null);
  const { contents, refresh } = useContent();
  const [showCopyNotification, setShowCopyNotification] = useState<boolean>(false);

  useEffect(() => {
    refresh();
  }, [modelOpen]);

  // Filter contents based on the selected filter
  const filteredContents: Content[] = filter
    ? contents.filter((content: Content) =>
        content.type.toLowerCase() === filter.toLowerCase()
      )
    : contents;

  // Handle sharing functionality
  const handleShare = async () => {
    try {
      const response = await axios.post<{ hash: string }>(
        `${BACKEND_URL}/api/v1/brain/share`,
        { share: true },
        {
          headers: { "Authorization": localStorage.getItem("token") || "" }
        }
      );
      
      const shareUrl = `http://127.0.0.1:5173/share/${response.data.hash}`;
      
      // Copy to clipboard
      await navigator.clipboard.writeText(shareUrl);
      
      // Show notification
      setShowCopyNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar is fixed; it sends filter changes to Dashboard */}
      <Sidebar onFilterChange={setFilter} />

      <div className="p-4 ml-72 min-h-screen w-[calc(100vw-18rem)] bg-gray-100">
        <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Content</h1>
          
          <div className="flex gap-4">
            <Button
              onClick={() => setModelOpen(true)}
              variant="primary"
              text="Add content"
              startIcon={<PlusIcon />}
            />
            <Button
              onClick={handleShare}
              variant="secondary"
              text="Share"
              startIcon={<ShareIcon />}
            />
          </div>
        </div>
        
        {/* Copy notification */}
        {showCopyNotification && (
          <div className="fixed top-6 right-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center shadow-md z-50 transition-opacity duration-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Share link copied to clipboard!</span>
          </div>
        )}

        <div className="flex gap-4 flex-wrap">
          {filteredContents.length > 0 ? (
            filteredContents.map((content: Content) => (
              <Card
                key={content._id}
                type={content.type as "twitter" | "youtube"}
                link={content.link}
                title={content.title}
                contentId={content._id}
                onDelete={(id) => {
                  // Implement delete functionality
                  console.log(`Delete content with ID: ${id}`);
                  refresh();
                }}
              />
            ))
          ) : (
            <div className="w-full text-center py-10">
              <p className="text-gray-500 mb-4">No content available.</p>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;