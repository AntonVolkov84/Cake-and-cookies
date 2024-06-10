import React, { useEffect } from 'react';
import './Home.scss';
import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';
import Productcard from '../Buttons/Productcard';
function Home() {
  useEffect(() => {}, [])

  return (
    <>
      <main className="main_menu">
        <header className="header">
          <Timantanshort />
          <Triangle />
          <Login text={'Логин'} />
          <Registration />
        </header>
        <div className="productsection">
          <div className="productcard">
            <section className="products">
              <Productcard />
              <Productcard />
            </section>
            <button className="nextpage">Следующая страница</button>
          </div>
          <aside className="basket">
            <section className="basketin">
              <div className="basketmenu"></div>
              <div className="basketsum">Сумма</div>
              <button className="checkout">Оформить покупку</button>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Home;
