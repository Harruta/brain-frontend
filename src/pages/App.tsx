import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./Signin";
import SharedContent from "../components/SharedContent";
import { Signup } from "./Signup";
import Dashboard from "./Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Landing from "../components/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/share/:sharelink" element={<SharedContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
