import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/products';

import './Replenishment.scss';

function Replenishment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const isProductsLoading = products.status === 'loading';

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleClick(event) {
    navigate(`/addingreplenishment/${event.target.parentNode.id}`);
  }

  return (
    <>
      <main className="replenishment">
        <header className="replenishment_header">
          <div className="replenishment_timantan">Приход товара</div>
          <Link to="/adminmenu">
            <button className="trianglemain">
              <div className="triangle"></div>
            </button>
          </Link>
        </header>
        <div className="replenishment_productsection">
          <div className="replenishment_productcard">
            <section className="replenishment_products">
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
            <div className="replenishment_btn">
              <Link to="/adminmenu">
                <button className="replenishment_back">Назад</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Replenishment;
