import { Button } from "../components/Button";
import { useState } from "react";
import { CreateContentModel } from "../components/CreateContentModel";
import { Card } from "../components/card";
import { PlusIcon } from "../icons/Pluesicon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/sidebar";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const contents = useContent(); 

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2"> {/* Fixed className typo */}
        <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />

        <div className="flex justify-end gap-4">
          <Button onClick={() => setModelOpen(true)} variant="primary" text="Add content" startIcon={<PlusIcon />} />
          <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
        </div>

        <div className="flex">
          {contents.map(({ type, link, title }, index) => (
            <Card key={index} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
