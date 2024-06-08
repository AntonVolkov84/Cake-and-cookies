import ExitShort from '../Buttons/ExitShort';
import TimantanLong from '../Buttons/TimantanLong';

import './Login.scss';

function Login() {
  return (
    <>
      <section className="main_menus">
        <TimantanLong />
        <div className="blocklogin">
          <div className="blocklogin_container">
            <div className="blocklogin_text">Логин:</div>
            <input className="blocklogin_input" placeholder="Логин"></input>
            <div className="blocklogin_text">Пароль:</div>
            <input className="blocklogin_input" placeholder="Пароль"></input>
          </div>
        </div>
        <ExitShort />
      </section>
    </>
  );
}

export default Login;
