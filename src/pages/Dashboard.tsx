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

// Define the content type based on your data structure
interface Content {
  _id: string;
  type: string;
  link: string;
  title: string;
  // ...other fields if needed
}

const Dashboard: React.FC = () => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string | null>(null);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modelOpen]);

  // Debug: log full contents and current filter
  console.log("All contents:", contents);
  console.log("Current filter:", filter);

  // Filter the contents based on type (if a filter is set)
  const filteredContents: Content[] = filter
    ? contents.filter((content: Content) =>
        content.type.toLowerCase() === filter.toLowerCase()
      )
    : contents;

  console.log("Filtered contents:", filteredContents);

  return (
    <div className="flex">
      {/* Sidebar is fixed; it sends filter changes to Dashboard */}
      <Sidebar onFilterChange={setFilter} />

      <div className="p-4 ml-72 min-h-screen w-[calc(100vw-18rem)] bg-gray-100 border-2">
        <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => setModelOpen(true)}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          />
          <Button
            onClick={async () => {
              try {
                const response = await axios.post<{ hash: string }>(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  { share: true },
                  {
                    headers: { "Authorization": localStorage.getItem("token") || "" }
                  }
                );
                const shareUrl = `http://127.0.0.1:5173/share/${response.data.hash}`;
                alert(shareUrl);
              } catch (error) {
                console.error("Error sharing content:", error);
              }
            }}
            variant="secondary"
            text="Share"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          {filteredContents.length > 0 ? (
            filteredContents.map((content: Content) => (
              <Card
                key={content._id}
                type={content.type}
                link={content.link}
                title={content.title}
              />
            ))
          ) : (
            <p className="text-gray-500">No content available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
