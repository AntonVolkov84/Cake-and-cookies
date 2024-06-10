import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';

import './Changingproduct.scss';

function Changingproduct() {
  return (
    <main className="changingproduct">
      <div className="changingproduct_header">
        <Timantanshort />
        <Triangle />
        <Login text={'Логин'} />
        <Registration />
      </div>
      <div className="changingproduct_card">
        <div className="changingproduct_cardboard">
          <div className="changingproduct_cardboardtext">Название товара:</div>
          <input type="text" className="changingproduct_cardboardentry"></input>
        </div>
        <div className="changingproduct_cardboard">
          <div className="changingproduct_cardboardtext">Цена товара:</div>
          <input type="text" className="changingproduct_cardboardentry"></input>
        </div>
        <div className="changingproduct_cardboard">
          <div className="changingproduct_cardboardtext">Ингридиенты:</div>
          <input
            type="textfield"
            className="changingproduct_cardboardentry"
          ></input>
        </div>
        <div className="changingproduct_cardboard">
          <div className="changingproduct_cardboardtext">Фото или аватарка</div>
          <div className="changingproduct_cardboardentry">
            <div className="changingproduct_entrytext">C:\\file.........</div>
            <label className="changingproduct_forentryfile">
              Выбрать другой файл
              <input type="file" className="changingproduct_entryfile"></input>
            </label>
          </div>
        </div>
      </div>
      <div className="changingproduct_footer">
        <button className="changingproduct_footer_add">Изменить товар</button>
        <button className="changingproduct_footer_back">Назад</button>
      </div>
    </main>
  );
}

export default Changingproduct;
