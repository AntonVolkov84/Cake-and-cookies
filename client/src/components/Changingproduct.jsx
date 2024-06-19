import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from '../axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import './Changingproduct.scss';

function Changingproduct() {
  const products = useSelector((state) => state.products.products.items);
  const { id } = useParams();
  const currentProduct = products.find((e) => e._id === id);
  const navigate = useNavigate();

  const [val, setVal] = useState({
    fullname: currentProduct.fullname,
    price: currentProduct.price,
    ingredients: currentProduct.ingredients,
    productUrl: currentProduct.productUrl,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await axios.patch(`/products/${id}`, val);
      if (data.status === 200) {
        alert(data.data.message);
        navigate('/adminmenu');
      }
    } catch (error) {
      alert(error.response.data[0].msg);
    }
  };

  return (
    <main className="changingproduct">
      <div className="changingproduct_header">
        <div className="timantan">
          <span className="timantan_text">Тимантан</span>
        </div>
        <Link to="/adminmenu">
          <button className="trianglemain">
            <div className="triangle"></div>
          </button>
        </Link>
        <Link to="/registration">
          <button className="changingproduct_registration">
            <span className="registration_text">Регистрация</span>
          </button>
        </Link>
      </div>
      <form onSubmit={onSubmit} className="changingproduct_card">
        <div className="changingproduct_cardboard">
          <div className="changingproduct_cardboardtext">Название товара:</div>
          <input
            type="text"
            value={val.fullname}
            onChange={(e) =>
              setVal((val) => ({ ...val, fullname: e.target.value }))
            }
            className="changingproduct_cardboardentry"
          ></input>
        </div>
        <div className="changingproduct_cardboard">
          <div className="changingproduct_cardboardtext">Цена товара:</div>
          <input
            value={val.price}
            onChange={(e) =>
              setVal((val) => ({ ...val, price: e.target.value }))
            }
            type="text"
            className="changingproduct_cardboardentry"
          ></input>
        </div>
        <div className="changingproduct_cardboard">
          <div className="changingproduct_cardboardtext">Ингридиенты:</div>
          <input
            value={val.ingredients}
            onChange={(e) =>
              setVal((val) => ({ ...val, ingredients: e.target.value }))
            }
            type="textfield"
            className="changingproduct_cardboardentry"
          ></input>
        </div>
        <div className="changingproduct_cardboard">
          <div className="changingproduct_cardboardtext">Фото или аватарка</div>
          <div className="changingproduct_cardboardentry">
            <div className="changingproduct_entrytext">{val.productUrl}</div>
            <label className="changingproduct_forentryfile">
              Выбрать другой файл
              <input
                onChange={(e) =>
                  setVal((val) => ({ ...val, productUrl: e.target.value }))
                }
                type="file"
                className="changingproduct_entryfile"
              ></input>
            </label>
          </div>
        </div>
        <div className="changingproduct_footer">
          <button type="submit" className="changingproduct_footer_add">
            Изменить товар
          </button>
          <Link to="/beforchangingproduct">
            <button className="changingproduct_footer_back">Назад</button>
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Changingproduct;
