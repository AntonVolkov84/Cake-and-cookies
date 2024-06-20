import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReport, addTotalSum } from '../redux/slices/report';
import { useEffect } from 'react';

import './Programmquit.scss';

function Programmquit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const time = new Date();
  const report = useSelector((state) => state.report.report.items);
  const isReportLoaded = useSelector((state) => state.report.report.status);
  const timeForReport =
    time.getDate() + ' ' + (time.getMonth() + 1) + ' ' + time.getFullYear();
  const filteredReport = report.filter(
    (e) => filterByDate(e.dateCreated) === timeForReport
  );

  function filterByDate(item) {
    const parse = new Date(Date.parse(item));
    return (
      parse.getDate() + ' ' + (parse.getMonth() + 1) + ' ' + parse.getFullYear()
    );
  }
  const totalSum = filteredReport.reduce((acc, e) => {
    return (acc += e.totalPerProduct);
  }, 0);

  dispatch(addTotalSum(totalSum));

  useEffect(() => {
    dispatch(fetchReport());
  }, []);

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
          {isReportLoaded ? (
            <div className="totalsum">
              {filteredReport.reduce((acc, e) => {
                return (acc += e.totalPerProduct);
              }, 0)}
            </div>
          ) : (
            <div className="totalsum">Подождите!!!</div>
          )}
        </div>
      </div>
      <Link to="/">
        <button className="programmquit_back">Назад</button>
      </Link>
    </main>
  );
}

export default Programmquit;
