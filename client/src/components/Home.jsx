import React, { useEffect } from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';
import Productcard from '../Buttons/Productcard';
import { fetchProducts } from '../redux/slices/products';
import { useNavigate } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  const isProductsLoading = products.status === 'loading';
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  function handleClick(event) {
    navigate(`/gweight/${event.target.parentNode.id}`);
  }

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
                  <div
                    id={e._id}
                    key={index}
                    className="card"
                    onClick={handleClick}
                  >
                    <img className="card_img" src={e.productUrl}></img>
                    <h2 className="card_text">{e.fullname}</h2>
                  </div>
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
