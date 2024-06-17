import { useEffect } from 'react';
import './Report.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchReport, cleanReport } from '../redux/slices/report';
import { useNavigate } from 'react-router-dom';

function Report() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const salesman = useSelector((state) => state.auth.data.fullname);
  const time = new Date();
  const report = useSelector((state) => state.report.report.items);
  const isReportLoaded = useSelector((state) => state.report.report.status);

  useEffect(() => {
    dispatch(fetchReport());
  }, []);

  function saveAndQuit() {
    dispatch(cleanReport());
    navigate('/quit');
  }

  return (
    <section className="reportblock">
      <div className="reportblock_timantan">Тимантан, сохранение отчета</div>
      <div className="reportblock_infofield">
        <div className="reportblock_timeAndSalesman">
          <div className="reportblock_salesman">Продавец: {salesman}</div>
          <div className="reportblock_date">{'Дата ' + time}</div>
        </div>
        {isReportLoaded === 'loaded' ? (
          report.map((e) => (
            <div className="reportblock_info">
              <div className="reportblock_text">{e.dateCreated}</div>
              <div className="reportblock_text">{e.fullname}</div>
              <div className="reportblock_text">{e.price}</div>
              <div className="reportblock_text">{e.weight}</div>
              <div className="reportblock_text">{e.totalPerProduct}</div>
              <div className="reportblock_text">{e.total}</div>
            </div>
          ))
        ) : (
          <div className="reportblock_wait">Подождите пожалуйста</div>
        )}
      </div>
      <div className="reportblock_total"></div>
      <button onClick={saveAndQuit} className="reportblock_save">
        Сохранить изменения и выйти
      </button>
    </section>
  );
}

export default Report;
