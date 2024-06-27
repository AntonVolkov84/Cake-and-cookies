import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from '../axios';

import './Delproduct.scss';

function Delproduct() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products.items);
  const { id } = useParams();
  const currentProduct = products.find((e) => e._id === id);

  async function hendleDelProduct() {
    try {
      const data = await axios.delete(`/products/${id}`);
      alert(data.data.message);
      await axios.delete(`/remaining/${id}`);
      navigate('/adminmenu');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <main className="delproduct">
        <header className="delproduct_header">
          <div className="delproduct_timantan">Тимантан</div>
          <Link to="/adminmenu">
            <button className="trianglemain">
              <div className="triangle"></div>
            </button>
          </Link>
        </header>
        <div className="delproduct_productsection">
          <section className="delproduct_products">
            <div className="delproduct_info">
              <img
                className="delproduct_card_img"
                src={currentProduct.productUrl}
                alt="cookies"
              ></img>
              <div className="delproduct_name">
                <h2 className="delproduct_card_text">
                  Название: {currentProduct.fullname}
                </h2>
                <h2 className="delproduct_card_text">
                  Цена: {currentProduct.price}
                </h2>
              </div>
              <h2 className="delproduct_ingredients">
                Ингридиенты: {currentProduct.ingredients}
              </h2>
            </div>
          </section>
          <aside className="delproduct_basket">
            <section className="delproduct_basketin">
              <button
                onClick={hendleDelProduct}
                className="delproduct_basketbtn"
              >
                Удалить товар
              </button>
            </section>
          </aside>
        </div>
        <Link to="/adminmenu">
          <button className="delproduct_back">Назад</button>
        </Link>
      </main>
    </>
  );
}

export default Delproduct;
