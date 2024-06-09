import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Wronglogin from './components/Wronglogin';
import Programmquit from './components/Programmquit';
import Quit from './components/Quit';
import Gweight from './components/Gweight';
import Handleweight from './components/Handleweight';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wronglogin" element={<Wronglogin />} />
      <Route path="/programmquit" element={<Programmquit />} />
      <Route path="/quit" element={<Quit />} />
      <Route path="/gweight" element={<Gweight />} />
      <Route path="/handleweight" element={<Handleweight />} />
    </Routes>
  );
}

export default App;
