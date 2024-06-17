import Timantanshort from '../Buttons/Timantanshort';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Adminmenu.scss';

function Adminmenu() {
  const navigate = useNavigate();
  return (
    <main className="adminmenu">
      <div className="adminmenu_header">
        <Timantanshort />
        <button className="trianglemain">
          <div className="triangle"></div>
        </button>
        <Link to="/registration">
          <button
            // onClick={() => navigate('/registration')}
            className="adminmenu_registration"
          >
            <span className="registration_text">Регистрация</span>
          </button>
        </Link>
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
        <Link className="adminmenu_btn" to="/changingproduct">
          <button className="adminmenu_btn">Изменить товар</button>
        </Link>
        <Link className="adminmenu_btn" to="/checkdelproduct">
          <button className="adminmenu_btn">Удалить товар</button>
        </Link>
        <Link className="adminmenu_btn" to="/datereport">
          <button className="adminmenu_btn">Просмотр отчета о продажах</button>
        </Link>
        <button className="adminmenu_btn"></button>
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
