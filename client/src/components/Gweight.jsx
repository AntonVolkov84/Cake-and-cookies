import TimantanLong from '../Buttons/TimantanLong';
import Longbutton from '../Buttons/Longbutton';

import './Gweight.scss';

function Gweight() {
  return (
    <main className="gweight">
      <TimantanLong />
      <div className="gweight_block">
        <div className="gweight_info"></div>
        <div className="gweight_entry">
          <div className="gweight_menu">
            <span className="gweight_menu_text">Цена:</span>
            <div className="gweight_menu_text">120.00</div>
            <span className="gweight_menu_text">Вес, кол-во:</span>
            <input
              placeholder="Введите вес или количество товара"
              type="text"
            />
          </div>
          <button className="gweight_get"></button>
          <button className="gweight_add"></button>
        </div>
        <Longbutton text={'Отмена'} />
      </div>
    </main>
  );
}

export default Gweight;
