import { logout } from '../redux/slices/auth';
import TimantanLong from '../Buttons/TimantanLong';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Quit.scss';

function Quit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <main className="menuquit">
      <TimantanLong />
      <div className="menuquit_block">
        <div className="menuquit_text">Итоговая сумма продаж:</div>
        <div className="menuquit_total">120.00</div>
      </div>
      <button
        onClick={() => {
          dispatch(logout());
          localStorage.removeItem('token', '');
          navigate('/');
        }}
        className="longbutton"
      >
        Выйти
      </button>
      ;
    </main>
  );
}

export default Quit;
