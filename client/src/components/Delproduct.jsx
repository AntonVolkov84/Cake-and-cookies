import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';
import Productcard from '../Buttons/Productcard';

import './Delproduct.scss';

function Delproduct() {
  return (
    <>
      <main className="delproduct">
        <header className="delproduct_header">
          <Timantanshort />
          <Triangle />
          <Login text={'Логин'} />
          <Registration />
        </header>
        <div className="delproduct_productsection">
          <section className="delproduct_products">
              <Productcard />
          </section>
          <aside className="delproduct_basket">
            <section className="delproduct_basketin">
              <button className="delproduct_basketbtn">Удалить товар</button>
            </section>
          </aside>
        </div>
        <button className="delproduct_nextpage">Назад</button>
      </main>
    </>
  );
}

export default Delproduct;
