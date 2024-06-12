import TimantanLong from '../Buttons/TimantanLong';
import Longbutton from '../Buttons/Longbutton';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Gweight.scss';

function Gweight() {
  const products = useSelector((state) => state.products);
  const productId = useParams();
  const currentProduct = products.products.items.find(
    (e) => e._id === productId.id.slice(1)
  );
  return (
    <main className="gweight">
      <div className="gweight_timantanlong">
        <span className="gweight_timantanlong_span">Тимантан</span>
        <img
          className="gweight_timantanlong_cookies"
          src={currentProduct.productUrl}
          alt="cookies"
        />
      </div>
      <div className="gweight_block">
        <div className="gweight_info">
          <img
            className="gweight_card_img"
            src={currentProduct.productUrl}
            alt="cookies"
          ></img>
          <h2 className="gweight_card_text">{currentProduct.fullname}</h2>
        </div>
        <div className="gweight_entry">
          <div className="gweight_menu">
            <span className="gweight_menu_text">Цена:</span>
            <div className="gweight_menu_text">120.00</div>
            <span className="gweight_menu_text">Вес, кол-во:</span>
            <input
              className="gweight_menu_input"
              placeholder="Введите вес или количество товара"
              type="number"
              min="0"
              max="999.999"
              step="0.001"
              required
            />
          </div>
          <button className="gweight_get">Получить вес</button>
          <div className="gweight_adding">
            <button className="gweight_handleadd">Ручной ввод данных</button>
            <button className="gweight_add">Добавить в корзину</button>
          </div>
        </div>
        <Longbutton text={'Отмена'} />
      </div>
    </main>
  );
}

export default Gweight;
