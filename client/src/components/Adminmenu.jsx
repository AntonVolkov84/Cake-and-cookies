import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';

import './Adminmenu.scss';

function Adminmenu() {
  return (
    <main className="adminmenu">
      <div className="adminmenu_header">
        <Timantanshort />
        <Triangle />
        <Login text={'Логин'} />
        <Registration />
      </div>
      <div className="adminmenu_card">
        <button className="adminmenu_btn">Добавить новый товар</button>
        <button className="adminmenu_btn">Изменить товар</button>
        <button className="adminmenu_btn">Удалить товар</button>
        <button className="adminmenu_btn">Просмотр отчета о продажах</button>
        <button className="adminmenu_btn"></button>
        <button className="adminmenu_btn"></button>
        <button className="adminmenu_btn"></button>
        <button className="adminmenu_btn"></button>
      </div>
      <button className="adminmenu_footer">Назад</button>
    </main>
  );
}

export default Adminmenu;
