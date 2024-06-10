import React, { useEffect } from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';
import Productcard from '../Buttons/Productcard';

import axios from '../axios';
import { fetchProducts } from '../redux/slices/products';

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const isProductsLoading = products.status === 'loading';
  const isProductsLoaded = products.status === 'loaded';

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
              {isProductsLoading ? (
                <span>Подождите!</span>
              ) : (
                products.items.map((e, index) => (
                  <Productcard
                    key={index}
                    text={e.fullname}
                    image={'img/cookies.jpg'}
                  />
                ))
              )}
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
