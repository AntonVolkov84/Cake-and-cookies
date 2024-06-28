import { useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { fetchRemaining } from '../redux/slices/remaining';

import './Remaining.scss';

function Remaining() {
  const remaining = useSelector((state) => state.remaining.remaining.items);
  const isRemainingLoaded = useSelector(
    (state) => state.remaining.remaining.status
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  useEffect(() => {
    dispatch(fetchRemaining());
  }, []);

  return (
    <section className="remaining">
      <div className="remaining_timantan">Отчет о приходе товара</div>
      <div ref={contentToPrint} className="remaining_infofield">
        <div className="remaining_texthead">Отчет о приходе товаров</div>
        {isRemainingLoaded === 'loaded' ? (
          remaining.map((e, index) => (
            <div key={index} className="remaining_info">
              <div className="remaining_text">{e.fullname}</div>
              <div className="remaining_text">{e.productId}</div>
              <div className="remaining_text">{e.weight}</div>
            </div>
          ))
        ) : (
          <div className="remaining_wait">Подождите пожалуйста</div>
        )}
      </div>
      <Link to="/adminmenu">
        <button className="remaining_back">Назад</button>
      </Link>
      <button
        onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}
        className="remaining_save"
      >
        Сохранить изменения и выйти
      </button>
    </section>
  );
}

export default Remaining;
