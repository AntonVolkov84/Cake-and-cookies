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
import DateReport from './components/DateReport';
import BeforChangingProduct from './components/BeforChangingProduct';
import Replenishment from './components/Replenishment';
import AddingReplenishment from './components/AddingReplenishment';
import ReplenReport from './components/ReplenReport';
import Writeoff from './components/Writeoff';
import Writeoffreport from './components/Writeoffreport';
import Addingwriteoff from './components/Addingwriteoff';
import Remaining from './components/Remaining';

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
      <Route path="/changingproduct/:id" element={<Changingproduct />} />
      <Route path="/checkdelproduct" element={<Checkdelproduct />} />
      <Route path="/delproduct/:id" element={<Delproduct />} />
      <Route
        path="/addingreplenishment/:id"
        element={<AddingReplenishment />}
      />
      <Route path="/report" element={<Report />} />
      <Route path="/datereport" element={<DateReport />} />
      <Route path="/beforchangingproduct" element={<BeforChangingProduct />} />
      <Route path="/replenishment" element={<Replenishment />} />
      <Route path="/replenreport" element={<ReplenReport />} />
      <Route path="/writeoff" element={<Writeoff />} />
      <Route path="/writeoffreport" element={<Writeoffreport />} />
      <Route path="/addingwriteoff/:id" element={<Addingwriteoff />} />
      <Route path="/remaining" element={<Remaining />} />
    </Routes>
  );
}

export default App;
