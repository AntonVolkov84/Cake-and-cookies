import React from 'react';
import './Home.scss';
import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';
function Home() {
  return (
    <>
      <main className="main_menu">
        <header className="header">
          <Timantanshort />
          <Triangle />
          <Login />
          <Registration />
        </header>
        <div className="productsection">
          <div className="productcard">
            <section className="products">
              <div>rrr</div>
              <div>ttt</div>
              <div>fff</div>
              <div>ggg</div>
              <div>fff</div>
              <div>ggg</div>
              <div>dffd</div>
              <div>dfdfd</div>
              <div>ddd</div>
              <div>ddd</div>
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
