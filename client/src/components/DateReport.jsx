import { useEffect } from 'react';
import './DateReport.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchReport, cleanReport } from '../redux/slices/report';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Report() {
  const [timeForReport, setTimeForReport] = useState(new Date());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const report = useSelector((state) => state.report.report.items);
  const isReportLoaded = useSelector((state) => state.report.report.status);
  const AddtimeForReport =
    timeForReport.getFullYear() +
    ' ' +
    (timeForReport.getMonth() + 1) +
    ' ' +
    timeForReport.getDate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      addingDate: '',
    },
    mode: 'onChange',
  });

  function onSubmit(values) {
    setTimeForReport(new Date(Date.parse(values.addingDate)));
  }

  useEffect(() => {
    dispatch(fetchReport());
  }, []);

  function saveAndQuit() {
    dispatch(cleanReport());
    navigate('/');
  }

  function filterByDate(item) {
    const parse = new Date(Date.parse(item));
    return (
      parse.getFullYear() + ' ' + (parse.getMonth() + 1) + ' ' + parse.getDate()
    );
  }

  return (
    <section className="datereport">
      <div className="datereport_timantan">Тимантан, отчет за дату</div>
      <div className="datereport_infofield">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="datereport_timeAndSalesman"
        >
          <input
            {...register('addingDate', { required: 'Дата не выбрана' })}
            type="date"
            className="datereport_salesman"
          ></input>
          <button type="submit" className="datereport_date">
            Выбрать
          </button>
        </form>
        {isReportLoaded === 'loaded' ? (
          report
            .filter((e) => filterByDate(e.dateCreated) === AddtimeForReport)
            .map((e) => (
              <div className="datereport_info">
                <div className="datereport_text">{e.dateCreated}</div>
                <div className="datereport_text">{e.fullname}</div>
                <div className="datereport_text">{e.price}</div>
                <div className="datereport_text">{e.weight}</div>
                <div className="datereport_text">{e.totalPerProduct}</div>
                <div className="datereport_text">{e.total}</div>
              </div>
            ))
        ) : (
          <div className="datereport_wait">Выберите дату, пожалуйста!</div>
        )}
        <div className="datereport_total">
          Сумма по отчету:{' '}
          {report
            .filter((e) => filterByDate(e.dateCreated) === AddtimeForReport)
            .reduce((acc, e) => {
              return (acc += e.totalPerProduct);
            }, 0)}
        </div>
      </div>
      <button onClick={saveAndQuit} className="datereport_save">
        Сохранить изменения и выйти
      </button>
    </section>
  );
}

export default Report;
