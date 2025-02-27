import { Button } from "./components/Button";
import { PlusIcon } from "./icons/Pluesicon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon/>} />
      <Button variant="secondary" text="share" startIcon={<ShareIcon/>} />
    </div>
  );
}

export default App;
