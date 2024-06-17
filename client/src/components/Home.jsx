import React, { useEffect } from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import Timantanshort from '../Buttons/Timantanshort';
import { fetchProducts } from '../redux/slices/products';
import { useNavigate } from 'react-router-dom';
import { selectIsAuth, selectIsAdmin } from '../redux/slices/auth';
import axios from '../axios';
import { cleanBucket } from '../redux/slices/busket';

function Home() {
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const { busket } = useSelector((state) => state.busket);
  const isProductsLoading = products.status === 'loading';
  const dateParse = Date.parse(new Date()) + 10800000;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  function handleClick(event) {
    navigate(`/gweight/${event.target.parentNode.id}`);
  }

  async function handleCheckout() {
    const time = new Date();
    const idReport = time.getTime();
    try {
      await busket.items.forEach((e) => {
        axios.post('/report', {
          idReport: idReport,
          dateCreated: dateParse,
          fullname: e.fullname,
          price: e.price,
          weight: e.weight,
          totalPerProduct: e.total,
          total: busket.items.reduce((acc, e) => {
            return acc + e.total;
          }, 0),
        });
      });
    } catch (error) {
      console.warn(error);
    }

    dispatch(cleanBucket());
    navigate('/');
  }

  return (
    <>
      {isAuth ? (
        <main className="main_menu">
          <header className="header">
            <Timantanshort />
            {isAdmin ? (
              <button
                onClick={() => navigate('/adminmenu')}
                className="trianglemain"
              >
                <div className="triangle"></div>
              </button>
            ) : (
              <></>
            )}
            {isAdmin ? (
              <button
                onClick={() => navigate('/registration')}
                className="registration"
              >
                <span className="registration_text">Регистрация</span>
              </button>
            ) : (
              <></>
            )}
            {isAuth ? (
              <button
                onClick={() => navigate('/programmquit')}
                className="toreport"
              >
                Отчет
              </button>
            ) : (
              <button onClick={() => navigate('/login')} className="login">
                Логин
              </button>
            )}
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
                  <button onClick={handleCheckout} className="checkout">
                    Оформить покупку
                  </button>
                </div>
              </section>
            </aside>
          </div>
        </main>
      ) : (
        <main className="main_menu">
          <header className="header">
            <Timantanshort />
            <button onClick={() => navigate('/login')} className="login">
              Логин
            </button>
          </header>
          <div className="productcard">
            <section className="products">
              {isProductsLoading ? (
                <span>Подождите!</span>
              ) : (
                products.items.map((e, index) => (
                  <div id={e._id} key={index} className="card">
                    <img className="card_img" src={e.productUrl}></img>
                    <h2 className="card_text">{e.fullname}</h2>
                  </div>
                ))
              )}
            </section>
          </div>
        </main>
      )}
    </>
  );
}

export default Home;
