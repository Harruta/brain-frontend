import { Button } from "../components/Button";
import { useState } from "react";
import { CreateContentModel } from "../components/CreateContentModel";
import { Card } from "../components/card";
import { PlusIcon } from "../icons/Pluesicon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/sidebar";

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 broder-2">
      <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />

      <div className="flex justify-end gap-4">
      <Button onClick={() => setModelOpen(true)} variant="primary" text="Add content" startIcon={<PlusIcon />} />
       <Button variant="secondary" text="share" startIcon={<ShareIcon/>} />
      </div>
      <div className="flex">
        <Card type="twitter" link="https://x.com/codebyharu/status/1895156519546822742"
         title="First tweet"/>
        <Card type="youtube" link="https://www.youtube.com/watch?v=JGwWNGJdvx8"
        title="First vid"/>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
