import Longbutton from '../Buttons/Longbutton';
import Login from '../Buttons/Login';
import { useNavigate } from 'react-router-dom';

import './Programmquit.scss';
import axios from '../axios';

function Programmquit() {
  const navigate = useNavigate();

  function getAllReports() {
    navigate('/quit');
    // const { data } = await axios.get('/report');
    // console.log(data);
    // return data;
  }

  return (
    <main className="main_menuprogrammquit">
      <div className="headerblock">
        <div className="timantan_middle">Тимантан</div>
      </div>
      <div className="programmquit_block">
        <button onClick={getAllReports} className="report">
          Сформировать отчет
        </button>
        <div className="total">
          <div className="totaltext">Итоговая сумма продаж:</div>
          <div className="totalsum">120.00</div>
        </div>
      </div>
      <Longbutton text={'Назад'} />
    </main>
  );
}

export default Programmquit;
