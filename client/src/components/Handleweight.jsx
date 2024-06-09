import TimantanLong from '../Buttons/TimantanLong';
import Longbutton from '../Buttons/Longbutton';

import './Handleweight.scss';

function Handleweight() {
  return (
    <main className="handleweight">
      <TimantanLong />
      <div className="handleweight_block">
        <div className="handleweight_info">
          <img
            className="handleweight_card_img"
            src="img/cookies.jpg"
            alt="cookies"
          ></img>
          <h2 className="handleweight_card_text">#1 Печенье с корицей</h2>
        </div>
        <div className="handleweight_entry">
          <div className="handleweight_menu">
            <span className="handleweight_menu_text">Вес, кол-во:</span>
            <input
              className="handleweight_menu_input"
              placeholder="Введите вес или количество товара"
              type="number"
              min="0"
              max="999.999"
              step="0.001"
              required
            />
            <div className="handleweightdel">
              <button className="handleweightdel_btn"></button>
            </div>
          </div>
          <div className="handleweight_adding">
            <button className="handleweight_adding_text">1</button>
            <button className="handleweight_adding_text">2</button>
            <button className="handleweight_adding_text">3</button>
            <button className="handleweight_adding_text">4</button>
            <button className="handleweight_adding_text">5</button>
            <button className="handleweight_adding_text">6</button>
            <button className="handleweight_adding_text">7</button>
            <button className="handleweight_adding_text">8</button>
            <button className="handleweight_adding_text">9</button>
            <button className="handleweight_adding_text">.</button>
            <button className="handleweight_adding_text">0</button>
            <button className="handleweight_adding_btn">Ok</button>
          </div>
        </div>
        <Longbutton text={'Назад'} />
      </div>
    </main>
  );
}

export default Handleweight;
