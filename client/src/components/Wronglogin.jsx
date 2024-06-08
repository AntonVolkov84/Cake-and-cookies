import ExitShort from '../Buttons/ExitShort';
import TimantanLong from '../Buttons/TimantanLong';

import './Wronglogin.scss';

function Wronglogin() {
  return (
    <>
      <main className="main_wrongmenu">
        <TimantanLong />
        <div className="wrongblocklogin">
          <div className="wrongblocklogin_container">
            <span className="wrongblocklogin_text">
              Неверный логин или пароль
            </span>
            <button className="wrongblocklogin_btn">Попробовать еще</button>
          </div>
        </div>
        <ExitShort />
      </main>
    </>
  );
}

export default Wronglogin;
