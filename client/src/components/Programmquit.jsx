import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Programmquit.scss';

function Programmquit() {
  const navigate = useNavigate();

  async function getAllReports() {
    navigate('/report');
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
      <Link to="/">
        <button>Назад</button>
      </Link>
    </main>
  );
}

export default Programmquit;
