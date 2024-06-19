import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/products';

import './Checkdelproduct.scss';

function Checkdelproduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const isProductsLoading = products.status === 'loading';

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleClick(event) {
    navigate(`/delproduct/${event.target.parentNode.id}`);
  }

  return (
    <>
      <main className="checkdelproduct">
        <header className="checkdelproduct_header">
          <div className="checkdelproduct_timantan">
            <span className="checkdelproduct_timantan_text">
              Удаление товара!!!
            </span>
          </div>
          <Link to="/adminmenu">
            <button className="trianglemain">
              <div className="triangle"></div>
            </button>
          </Link>
          <Link to="/registration">
            <button className="checkdelproduct_registration">
              <span className="registration_text">Регистрация</span>
            </button>
          </Link>
        </header>
        <div className="checkdelproduct_productsection">
          <div className="checkdelproduct_productcard">
            <section className="checkdelproduct_products">
              {isProductsLoading ? (
                <h1>Подождите</h1>
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
            <div className="checkdelproduct_btn">
              <Link to="/adminmenu">
                <button className="checkdelproduct_back">Назад</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Checkdelproduct;
