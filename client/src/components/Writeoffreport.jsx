import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchWriteoff } from '../redux/slices/writeoff';
import { useReactToPrint } from 'react-to-print';
import './Writeoffreport.scss';

function Writeoffreport() {
  useEffect(() => {
    dispatch(fetchWriteoff());
  }, []);
  const time = new Date();
  const [timeForReport, setTimeForReport] = useState(
    time.getDate() + ' ' + (time.getMonth() + 1) + ' ' + time.getFullYear()
  );
  const writeoff = useSelector((state) => state.writeoff.writeoff.items);
  const isWriteoffLoaded = useSelector(
    (state) => state.writeoff.writeoff.status
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
    <section className="writeoffreport">
      <div className="writeoffreport_timantan">Отчет о приходе товара</div>
      <div ref={contentToPrint} className="writeoffreport_infofield">
        <div className="writeoffreport_texthead">Отчет о приходе товаров</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="writeoffreport_timeAndSalesman"
        >
          <input
            {...register('addingDate', { required: 'Дата не выбрана' })}
            type="date"
            className="writeoffreport_input"
          ></input>
          <button type="submit" className="writeoffreport_btn">
            Выбрать
          </button>
        </form>
        <div className="writeoffreport_timeAndSalesman">
          <div className="writeoffreport_date">{'Дата ' + timeForReport}</div>
        </div>
        {isWriteoffLoaded === 'loaded' ? (
          writeoff
            .filter((e) => filterByDate(e) === timeForReport)
            .map((e, index) => (
              <div key={index} className="writeoffreport_info">
                <div className="writeoffreport_text">{e.fullname}</div>
                <div className="writeoffreport_text">{e.productId}</div>
                <div className="writeoffreport_text">{e.weight}</div>
                <div className="writeoffreport_text">{e.text}</div>
              </div>
            ))
        ) : (
          <div className="writeoffreport_wait">Подождите пожалуйста</div>
        )}
      </div>
      <button
        onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}
        className="writeoffreport_save"
      >
        Сохранить изменения и выйти
      </button>
    </section>
  );
}

export default Writeoffreport;
