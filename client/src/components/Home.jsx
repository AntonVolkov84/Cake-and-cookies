import React, { useEffect } from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';
import { fetchProducts } from '../redux/slices/products';
import { useNavigate } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const { busket } = useSelector((state) => state.busket);

  const isProductsLoading = products.status === 'loading';

  console.log(busket);

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
              <div onClick={() => navigate('/bucket')} className="basketmenu">
                {busket.items.map((e, index) => (
                  <div key={index} className="basketmenu_line">
                    <div className="basketmenu_name">{e.fullname}</div>
                    <div className="basketmenu_name">{e.total}</div>
                  </div>
                ))}
              </div>
              <div className="basketin_btn">
                <div className="basketsum">
                  Итого:{' '}
                  {busket.items.reduce((acc, e) => {
                    return acc + e.total;
                  }, 0)}
                </div>
                <button className="checkout">Оформить покупку</button>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Home;
