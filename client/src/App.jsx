import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Wronglogin from './components/Wronglogin';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wronglogin" element={<Wronglogin />} />
    </Routes>
  );
}

export default App;
