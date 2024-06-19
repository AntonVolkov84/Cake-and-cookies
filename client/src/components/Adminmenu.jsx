import Timantanshort from '../Buttons/Timantanshort';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Adminmenu.scss';

function Adminmenu() {
  const navigate = useNavigate();
  return (
    <main className="adminmenu">
      <div className="adminmenu_header">
        <div className="adminmenu_timantan">
          <span className="adminmenu_timantan_text">Тимантан</span>
        </div>
        <button className="adminmenu_trianglemain">
          <div className="adminmenu_triangle"></div>
        </button>
      </div>
      <div className="adminmenu_card">
        <Link className="adminmenu_btn" to="/productadding">
          <button
            onClick={() => navigate('/productadding')}
            className="adminmenu_btn"
          >
            Добавить новый товар
          </button>
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
        <button className="adminmenu_btn"></button>
        <button className="adminmenu_btn"></button>
        <button className="adminmenu_btn"></button>
      </div>
      <button onClick={() => navigate('/')} className="adminmenu_footer">
        Назад
      </button>
    </main>
  );
}

export default Adminmenu;
