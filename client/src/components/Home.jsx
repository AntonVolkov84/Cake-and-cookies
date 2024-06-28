import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectIsAuth, selectIsAdmin } from '../redux/slices/auth';
import { fetchProducts } from '../redux/slices/products';
import { fetchRemaining, fetchPatchRemaining } from '../redux/slices/remaining';
import { cleanBucket } from '../redux/slices/busket';
import axios from '../axios';

import './Home.scss';

function Home() {
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const { busket } = useSelector((state) => state.busket);
  const isProductsLoading = products.status === 'loading';
  const dateParse = Date.parse(new Date()) + 10800000;
  const remaining = useSelector((state) => state.remaining.remaining.items);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchRemaining());
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
    busket.items.forEach((e) => {
      addToRemaining(e);
    });
    dispatch(cleanBucket());
    navigate('/');
  }

  function addToRemaining(e) {
    const filteredRemaining = remaining.filter((el) => el.productId === e.id);
    dispatch(
      fetchPatchRemaining({
        fullname: e.fullname,
        productId: e.id,
        weight: Number(filteredRemaining[0].weight - Number(e.weight)),
      })
    );
  }

  return (
    <>
      {isAuth ? (
        <main className="main_menu">
          <header className="header">
            <div className="timantan">
              <span className="timantan_text">Тимантан</span>
            </div>
            {isAdmin ? (
              <Link to="/adminmenu">
                <button className="trianglemain">
                  <div className="triangle"></div>
                </button>
              </Link>
            ) : (
              <Link to="/remaining">
                <button className="remaining_btn">Остатки</button>
              </Link>
            )}
            {isAdmin ? (
              <Link to="/registration">
                <button className="registration">Регистрация</button>
              </Link>
            ) : (
              <></>
            )}
            {isAuth ? (
              <Link to="/programmquit">
                <button className="toreport">Отчет</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="login">Логин</button>
              </Link>
            )}
          </header>
          <div className="productsection">
            <div className="productcard">
              <section className="products">
                {isProductsLoading ? (
                  <span className="homeawait">Подождите!</span>
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
            <div className="timantan">
              <span className="timantan_text">Тимантан</span>
            </div>
            <button onClick={() => navigate('/login')} className="login">
              Логин
            </button>
          </header>
          <div className="notloginproductcard">
            <section className="notloginproducts">
              {isProductsLoading ? (
                <span className="homeawait">Подождите!</span>
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
