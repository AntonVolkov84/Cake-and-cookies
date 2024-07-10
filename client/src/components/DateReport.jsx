import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReport, cleanReport } from '../redux/slices/report';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useReactToPrint } from 'react-to-print';

import './DateReport.scss';

function Report() {
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: 'Отчет о продажах',
    onBeforePrint: () => console.log('Ожидаем печать документа'),
    onAfterPrint: () => {
      dispatch(cleanReport());
      navigate('/adminmenu');
    },
    removeAfterPrint: true,
  });

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

  function filterByDate(item) {
    const parse = new Date(Date.parse(item));
    console.log('item', item)
    console.log('parse', parse)
    return (
      parse.getFullYear() + ' ' + (parse.getMonth() + 1) + ' ' + parse.getDate()
    );
  }
  function normalTime(e) {
    const parse = new Date(Date.parse(e.createdAt));
    return (
      parse.getDate() + ' ' + (parse.getMonth() + 1) + ' ' + parse.getFullYear()
    );
  }
  
  return (
    <section className="datereport">
      <div className="datereport_timantan">
        Тимантан, отчет за дату {AddtimeForReport}
      </div>
      <div ref={contentToPrint} className="datereport_infofield">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="datereport_timeAndSalesman"
        >
          <input
            {...register('addingDate', { required: 'Дата не выбрана' })}
            type="date"
            className="datereport_input"
          ></input>
          <button type="submit" className="datereport_btn">
            Выбрать
          </button>
        </form>
        <div className="datereport_title">
          <span className="datereport_text">Дата</span>
          <span className="datereport_text">Название товара</span>
          <span className="datereport_text">Цена</span>
          <span className="datereport_text">Продано</span>
          <span className="datereport_text">Сумма</span>
          <span className="datereport_text">Общая</span>
        </div>
        {isReportLoaded === 'loaded' ? (
          report
            .filter((e) => filterByDate(e.createdAt) === AddtimeForReport)
            .map((e, index) => (
              <div key={index} className="datereport_info">
                <div className="datereport_text">{normalTime(e)}</div>
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
      </div>
      <div className="datereport_total">
        Сумма по отчету:{' '}
        {report
          .filter((e) => filterByDate(e.dateCreated) === AddtimeForReport)
          .reduce((acc, e) => {
            return (acc += e.totalPerProduct);
          }, 0)}
      </div>
      <Link to="/adminmenu">
        <button className="datereport_backbtn">Назад</button>
      </Link>
      <button
        onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}
        className="datereport_save"
      >
        Сохранить изменения и выйти
      </button>
    </section>
  );
}

export default Report;
