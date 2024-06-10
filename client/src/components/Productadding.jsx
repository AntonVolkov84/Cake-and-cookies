import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';

import './Productadding.scss';

function Productadding() {
  return (
    <main className="productadding">
      <div className="productadding_header">
        <Timantanshort />
        <Triangle />
        <Login text={'Логин'} />
        <Registration />
      </div>
      <div className="productadding_card">
        <div className="productadding_cardboard">
          <div className="productadding_cardboardtext">Название товара:</div>
          <input type="text" className="productadding_cardboardentry"></input>
        </div>
        <div className="productadding_cardboard">
          <div className="productadding_cardboardtext">Цена товара:</div>
          <input type="text" className="productadding_cardboardentry"></input>
        </div>
        <div className="productadding_cardboard">
          <div className="productadding_cardboardtext">Ингридиенты:</div>
          <input type="textfield" className="productadding_cardboardentry"></input>
        </div>
        <div className="productadding_cardboard">
          <div className="productadding_cardboardtext">Фото или аватарка</div>
          <div className="productadding_cardboardentry">
            <div className="productadding_entrytext">C:\\file.........</div>
            <label className="productadding_forentryfile">
              Вставить файл
              <input type="file" className="productadding_entryfile"></input>
            </label>
          </div>
        </div>
      </div>
      <div className="productadding_footer">
        <button className="productadding_footer_add">
          Добавить новый товар
        </button>
        <button className="productadding_footer_back">Назад</button>
      </div>
    </main>
  );
}

export default Productadding;
