import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Wronglogin from './components/Wronglogin';
import Programmquit from './components/Programmquit';
import Quit from './components/Quit';
import Gweight from './components/Gweight';
import Handleweight from './components/Handleweight';
import Bucket from './components/Bucket';
import Adminmenu from './components/Adminmenu';
import Productadding from './components/Productadding';
import Changingproduct from './components/Changingproduct';
import Checkdelproduct from './components/Checkdelproduct';

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
      <Route path="/bucket" element={<Bucket />} />
      <Route path="/adminmenu" element={<Adminmenu />} />
      <Route path="/productadding" element={<Productadding />} />
      <Route path="/changingproduct" element={<Changingproduct />} />
      <Route path="/checkdelproduct" element={<Checkdelproduct />} />
    </Routes>
  );
}

export default App;
