import { Signin } from './Signin';
import { Signup } from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
