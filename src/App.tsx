import { Button } from "./components/Button";
import { Card } from "./components/card";
import { PlusIcon } from "./icons/Pluesicon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon/>} />
      <Button variant="secondary" text="share" startIcon={<ShareIcon/>} />
      <div className="flex">
        <Card type="twitter" link="https://x.com/codebyharu/status/1895156519546822742"
         title="First tweet"/>
        <Card type="youtube" link="https://www.youtube.com/watch?v=JGwWNGJdvx8"
        title="First vid"/>
      </div>
    </div>
  );
}

export default App;
