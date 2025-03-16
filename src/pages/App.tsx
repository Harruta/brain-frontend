import { Signin } from './Signin';
import SharedContent from '../components/SharedContent';
import { Signup } from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:sharelink" element={<SharedContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
