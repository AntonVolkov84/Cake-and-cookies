import { fetchProducts } from '../redux/slices/products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './BeforChangingProduct.scss';

function BeforChangingProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const isProductsLoading = products.status === 'loading';

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleClick(event) {
    navigate(`/changingproduct/${event.target.parentNode.id}`);
  }

  return (
    <main className="beforchangingproduct">
      <div className="beforchangingproduct_timantan">
        Выберите товар, который нужно изменить
      </div>
      <div className="beforchangingproduct_productcard">
        <section className="beforchangingproduct_products">
          {isProductsLoading ? (
            <span className='beforchangingproduct_await'>Подождите!</span>
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
      <button
        onClick={() => navigate('/adminmenu')}
        className="beforchangingproduct_btn"
      >
        Назад
      </button>
    </main>
  );
}

export default BeforChangingProduct;
