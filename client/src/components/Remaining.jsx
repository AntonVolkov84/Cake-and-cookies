import { useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { fetchRemaining } from '../redux/slices/remaining';
import { selectIsAdmin } from '../redux/slices/auth';

import './Remaining.scss';

function Remaining() {
  const remaining = useSelector((state) => state.remaining.remaining.items);
  const isAdmin = useSelector(selectIsAdmin);
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
      isAdmin ? navigate('/adminmenu') : navigate('/');
    },
    removeAfterPrint: true,
  });

  useEffect(() => {
    dispatch(fetchRemaining());
  }, []);
  function handleBack() {
    isAdmin ? navigate('/adminmenu') : navigate('/');
  }
  return (
    <section className="remaining">
      <div className="remaining_timantan">Остатки товаров</div>
      <div ref={contentToPrint} className="remaining_infofield">
        <div className="remaining_texthead">Отчет о остатке товаров</div>
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
      <div className="remaining_footer">
        <button onClick={handleBack} className="remaining_back">
          Назад
        </button>
        <button
          onClick={() => {
            handlePrint(null, () => contentToPrint.current);
          }}
          className="remaining_save"
        >
          Сохранить изменения и выйти
        </button>
      </div>
    </section>
  );
}

export default Remaining;
