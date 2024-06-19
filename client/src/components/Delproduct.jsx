import Timantanshort from '../Buttons/Timantanshort';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Delproduct.scss';

function Delproduct() {
  const products = useSelector((state) => state.products.products.items);
  const { id } = useParams();
  const currentProduct = products.find((e) => e._id === id);

  return (
    <>
      <main className="delproduct">
        <header className="delproduct_header">
          <Timantanshort />
          <Link to="/adminmenu">
            <button className="trianglemain">
              <div className="triangle"></div>
            </button>
          </Link>
        </header>
        <div className="delproduct_productsection">
          <section className="delproduct_products"></section>
          <aside className="delproduct_basket">
            <section className="delproduct_basketin">
              <button className="delproduct_basketbtn">Удалить товар</button>
            </section>
          </aside>
        </div>
        <button className="delproduct_back">Назад</button>
      </main>
    </>
  );
}

export default Delproduct;
