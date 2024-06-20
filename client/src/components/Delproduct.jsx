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
      navigate('/adminmenu');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <main className="delproduct">
        <header className="delproduct_header">
          <div className="timantan">Тимантан</div>
          <Link to="/adminmenu">
            <button className="trianglemain">
              <div className="triangle"></div>
            </button>
          </Link>
        </header>
        <div className="delproduct_productsection">
          <section className="delproduct_products">
            <div className="gweight_info">
              <img
                className="gweight_card_img"
                src={currentProduct.productUrl}
                alt="cookies"
              ></img>
              <h2 className="gweight_card_text">{currentProduct.fullname}</h2>
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
        <button className="delproduct_back">Назад</button>
      </main>
    </>
  );
}

export default Delproduct;
