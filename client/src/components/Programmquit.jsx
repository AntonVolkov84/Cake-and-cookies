import Longbutton from '../Buttons/Longbutton';
import Login from '../Buttons/Login';

import './Programmquit.scss';
import axios from '../axios';

async function getAllReports() {
  const { data } = await axios.get('/report');
  console.log(data);
  return data;
}

function Programmquit() {
  return (
    <main className="main_menuprogrammquit">
      <div className="headerblock">
        <div className="timantan_middle">Тимантан</div>
        <Login text={'Выйти'} />
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
