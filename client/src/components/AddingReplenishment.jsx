import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from '../axios';

import './AddingReplenishment.scss';

function AddingReplenishment() {
  const [weight, setWeight] = useState('');
  const products = useSelector((state) => state.products.products.items);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentProduct = products.find((e) => e._id === id);

  async function onSubmit() {
    try {
      const data = await axios.post('/replenishment', {
        fullname: currentProduct.fullname,
        weight: weight,
        productId: id,
      });
      alert(data.data.message);
      clearWeight();
      navigate('/replenishment');
    } catch (error) {
      console.warn(error.message);
    }
  }
  function addingreplenishment(e) {
    setWeight(`${weight}` + `${e.target.value}`);
  }
  function clearWeight() {
    setWeight('');
  }

  return (
    <>
      <main className="addingreplenishment">
        <header className="addingreplenishment_header">
          <div className="addingreplenishment_timantan">Тимантан</div>
          <Link to="/adminmenu">
            <button className="trianglemain">
              <div className="triangle"></div>
            </button>
          </Link>
        </header>
        <div className="addingreplenishment_block">
          <div className="addingreplenishment_info">
            <img
              className="addingreplenishment_card_img"
              src={currentProduct.productUrl}
              alt="cookies"
            ></img>
            <h2 className="addingreplenishment_card_text">
              Название: {currentProduct.fullname}
            </h2>
            <h2 className="addingreplenishment_card_text">
              Цена: {currentProduct.price}
            </h2>
            <h2 className="addingreplenishment_card_text">
              Ингридиенты: {currentProduct.ingredients}
            </h2>
          </div>
          <div className="addingreplenishment_entry">
            <div className="addingreplenishment_menu">
              <span className="addingreplenishment_menu_text">
                Вес, кол-во:
              </span>
              <input
                value={weight}
                className="addingreplenishment_menu_input"
                placeholder="Введите вес или количество товара"
                type="text"
                min="0"
                max="999.999"
                step="0.001"
                required
              />
              <div className="addingreplenishmentdel">
                <button
                  onClick={clearWeight}
                  className="addingreplenishmentdel_btn"
                ></button>
              </div>
            </div>
            <div className="addingreplenishment_adding">
              <button
                onClick={addingreplenishment}
                value={1}
                className="addingreplenishment_adding_text"
              >
                1
              </button>
              <button
                value={2}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                2
              </button>
              <button
                value={3}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                3
              </button>
              <button
                value={4}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                4
              </button>
              <button
                value={5}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                5
              </button>
              <button
                value={6}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                6
              </button>
              <button
                value={7}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                7
              </button>
              <button
                value={8}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                8
              </button>
              <button
                value={9}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                9
              </button>
              <button
                value="."
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                .
              </button>
              <button
                value={0}
                onClick={addingreplenishment}
                className="addingreplenishment_adding_text"
              >
                0
              </button>
              <button
                onClick={onSubmit}
                className="addingreplenishment_adding_btn"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
        <button className="addingreplenishment_gweight">Получить вес</button>
        <Link to="/replenishment">
          <button className="addingreplenishment_back">Назад</button>
        </Link>
      </main>
    </>
  );
}

export default AddingReplenishment;
