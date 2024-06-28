import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchReplenishment } from '../redux/slices/replenishment';
import { useReactToPrint } from 'react-to-print';
import './ReplenReport.scss';

function ReplenReport() {
  useEffect(() => {
    dispatch(fetchReplenishment());
  }, []);
  const time = new Date();
  const [timeForReport, setTimeForReport] = useState(
    time.getDate() + ' ' + (time.getMonth() + 1) + ' ' + time.getFullYear()
  );
  const replenishment = useSelector(
    (state) => state.replenishment.replenishment.items
  );
  const isReplenishmentLoaded = useSelector(
    (state) => state.replenishment.replenishment.status
  );
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: 'Отчет о приходе товара',
    onBeforePrint: () => {
      console.log('Ожидаем печать документа');
    },
    onAfterPrint: () => {
      navigate('/adminmenu');
    },
    removeAfterPrint: true,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      addingDate: '',
    },
    mode: 'onChange',
  });

  function onSubmit(values) {
    const time = new Date(Date.parse(values.addingDate));
    setTimeForReport(
      time.getDate() + ' ' + (time.getMonth() + 1) + ' ' + time.getFullYear()
    );
  }

  function filterByDate(item) {
    const parse = new Date(Date.parse(item.createdAt));
    return (
      parse.getDate() + ' ' + (parse.getMonth() + 1) + ' ' + parse.getFullYear()
    );
  }

  return (
    <section className="replenreport">
      <div className="replenreport_timantan">Отчет о приходе товара</div>
      <div ref={contentToPrint} className="replenreport_infofield">
        <div className="replenreport_texthead">Отчет о приходе товаров</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="replenreport_timeAndSalesman"
        >
          <input
            {...register('addingDate', { required: 'Дата не выбрана' })}
            type="date"
            className="replenreport_input"
          ></input>
          <button type="submit" className="replenreport_btn">
            Выбрать
          </button>
        </form>
        <div className="replenreport_timeAndSalesman">
          <div className="replenreport_date">{'Дата ' + timeForReport}</div>
        </div>
        {isReplenishmentLoaded === 'loaded' ? (
          replenishment
            .filter((e) => filterByDate(e) === timeForReport)
            .map((e, index) => (
              <div key={index} className="replenreport_info">
                <div className="replenreport_text">{e.fullname}</div>
                <div className="replenreport_text">{e.productId}</div>
                <div className="replenreport_text">{e.weight}</div>
              </div>
            ))
        ) : (
          <div className="replenreport_wait">Подождите пожалуйста</div>
        )}
      </div>
      <div className="replenreport_footer">
        <Link to="/adminmenu">
          <button className="replenreport_back">Назад</button>
        </Link>
        <button
          onClick={() => {
            handlePrint(null, () => contentToPrint.current);
          }}
          className="replenreport_save"
        >
          Сохранить изменения и выйти
        </button>
      </div>
    </section>
  );
}

export default ReplenReport;
