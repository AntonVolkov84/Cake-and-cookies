import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/products';

import './Writeoff.scss';

function Writeoff() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const isProductsLoading = products.status === 'loading';

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleClick(event) {
    navigate(`/addingwriteoff/${event.target.parentNode.id}`);
  }

  return (
    <>
      <main className="writeoff">
        <header className="writeoff_header">
          <div className="writeoff_timantan">Списание товара</div>
          <Link to="/adminmenu">
            <button className="trianglemain">
              <div className="triangle"></div>
            </button>
          </Link>
        </header>
        <div className="writeoff_productsection">
          <div className="writeoff_productcard">
            <section className="writeoff_products">
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
            <div className="writeoff_btn">
              <Link to="/adminmenu">
                <button className="writeoff_back">Назад</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Writeoff;
