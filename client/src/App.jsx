import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Report from './components/Report';
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
import Delproduct from './components/Delproduct';
import Registration from './components/Registration';
import { useEffect } from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/wronglogin" element={<Wronglogin />} />
      <Route path="/programmquit" element={<Programmquit />} />
      <Route path="/quit" element={<Quit />} />
      <Route path="/gweight/:id" element={<Gweight />} />
      <Route path="/handleweight/:id" element={<Handleweight />} />
      <Route path="/bucket" element={<Bucket />} />
      <Route path="/adminmenu" element={<Adminmenu />} />
      <Route path="/productadding" element={<Productadding />} />
      <Route path="/changingproduct" element={<Changingproduct />} />
      <Route path="/checkdelproduct" element={<Checkdelproduct />} />
      <Route path="/delproduct" element={<Delproduct />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default App;
