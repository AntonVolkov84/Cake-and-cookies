import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';
import Productcard from '../Buttons/Productcard';

import './Checkdelproduct.scss';

function Checkdelproduct() {
  return (
    <>
      <main className="checkdelproduct">
        <header className="checkdelproduct_header">
          <Timantanshort />
          <Triangle />
          <Login text={'Логин'} />
          <Registration />
        </header>
        <div className="checkdelproduct_productsection">
          <div className="checkdelproduct_productcard">
            <section className="checkdelproduct_products">
              <Productcard />
              <Productcard />
            </section>
            <div className="checkdelproduct_btn">
              <button className="checkdelproduct_nextpage">Назад</button>
              <button className="checkdelproduct_nextpage">
                Следующая страница
              </button>
            </div>
          </div>
          <aside className="checkdelproduct_basket">
            <section className="checkdelproduct_basketin">
              Удаление товара!!!
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Checkdelproduct;
