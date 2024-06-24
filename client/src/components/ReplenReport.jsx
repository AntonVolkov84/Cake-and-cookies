import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchReplenishment } from '../redux/slices/replenishment';
import { useReactToPrint } from 'react-to-print';
import './ReplenReport.scss';

function ReplenReport() {
  useEffect(() => {
    dispatch(fetchReplenishment());
  }, []);
  const replenishment = useSelector(
    (state) => state.replenishment.replenishment.items
  );
  const isReplenishmentLoaded = useSelector(
    (state) => state.replenishment.replenishment.status
  );
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: 'Отчет о продажах',
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
  const time = new Date();
  const timeForReport =
    time.getDate() + ' ' + (time.getMonth() + 1) + ' ' + time.getFullYear();

  function saveAndQuit() {
    // dispatch(cleanReport());
    // navigate('/quit');
  }

  function filterByDate(item) {
    const parse = new Date(Date.parse(item.createdAt));
    return (
      parse.getDate() + ' ' + (parse.getMonth() + 1) + ' ' + parse.getFullYear()
    );
  }

  return (
    <section className="replenreport">
      <div className="replenreport_timantan">Cохранените отчет, пожалуйста</div>
      <div ref={contentToPrint} className="replenreport_infofield">
        <div className="replenreport_timeAndSalesman">
          <div className="replenreport_date">{'Дата ' + time}</div>
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
      <button
        onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}
        className="replenreport_save"
      >
        Сохранить изменения и выйти
      </button>
    </section>
  );
}

export default ReplenReport;
