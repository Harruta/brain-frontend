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

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const {contents, refresh} = useContent(); 

  useEffect(() => {
    refresh();
  },[modelOpen]);


  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2"> 
        <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />

        <div className="flex justify-end gap-4">
          <Button onClick={() => setModelOpen(true)} variant="primary" text="Add content" startIcon={<PlusIcon />} />
          <Button onClick={async ()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
              share: true,
            },{
              headers: {
                "Authorization": localStorage.getItem("token")
              }
            });
            const shareUrl = `http://127.0.0.1:5173/share/${response.data.hash}`;
            alert(shareUrl);
          }}
          variant="secondary" text="Share" startIcon={<ShareIcon />} />
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }, index) => (
            <Card key={index} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
