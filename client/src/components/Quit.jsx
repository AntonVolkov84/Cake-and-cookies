import { logout } from '../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Quit.scss';

function Quit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <main className="menuquit">
      <div className="gweight_timantanlong">
        <span className="gweight_timantanlong_span">Тимантан</span>
        <img
          className="gweight_timantanlong_cookies"
          src={currentProduct.productUrl}
          alt="cookies"
        />
      </div>
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
