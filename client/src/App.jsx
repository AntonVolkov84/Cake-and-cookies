import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Wronglogin from './components/Wronglogin';
import Programmquit from './components/Programmquit'

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wronglogin" element={<Wronglogin />} />
      <Route path="/programmquit" element={<Programmquit />} />
    </Routes>
  );
}

export default App;
