import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Adminmenu.scss';

function Adminmenu() {
  const navigate = useNavigate();
  return (
    <main className="adminmenu">
      <div className="adminmenu_header">
        <div className="adminmenu_timantan">Меню администратора</div>
      </div>
      <div className="adminmenu_card">
        <Link className="adminmenu_btn" to="/productadding">
          <button className="adminmenu_btn">Добавить новый товар</button>
        </Link>
        <Link className="adminmenu_btn" to="/beforchangingproduct">
          <button className="adminmenu_btn">Изменить товар</button>
        </Link>
        <Link className="adminmenu_btn" to="/checkdelproduct">
          <button className="adminmenu_btn">Удалить товар</button>
        </Link>
        <Link className="adminmenu_btn" to="/datereport">
          <button className="adminmenu_btn">Просмотр отчета о продажах</button>
        </Link>
        <Link className="adminmenu_btn" to="/registration">
          <button className="adminmenu_btn">Регистрация нового продавца</button>
        </Link>
        <Link className="adminmenu_btn" to="/replenishment">
          <button className="adminmenu_btn">Приход товара</button>
        </Link>
        <Link className="adminmenu_btn" to="/replenreport">
          <button className="adminmenu_btn">
            Просмотр отчета о приходе товаров
          </button>
        </Link>
      </div>
      <button onClick={() => navigate('/')} className="adminmenu_footer">
        Назад
      </button>
    </main>
  );
}

export default Adminmenu;
