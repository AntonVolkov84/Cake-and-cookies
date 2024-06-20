import { Link } from 'react-router-dom';

import './Wronglogin.scss';

function Wronglogin() {
  return (
    <>
      <main className="main_wrongmenu">
        <div className="gweight_timantanlong">
          <span className="gweight_timantanlong_span">Тимантан</span>
          <img
            className="gweight_timantanlong_cookies"
            src="http://localhost:3333/uploads/cookies.jpg"
            alt="cookies"
          />
        </div>
        <div className="wrongblocklogin">
          <div className="wrongblocklogin_container">
            <span className="wrongblocklogin_text">
              Неверный логин или пароль
            </span>
            <Link to="/login">
              <button className="wrongblocklogin_btn">Попробовать еще</button>
            </Link>
          </div>
        </div>
        <Link to="/">
          <button className="wrongblocklogin_back">Назад</button>
        </Link>
      </main>
    </>
  );
}

export default Wronglogin;
