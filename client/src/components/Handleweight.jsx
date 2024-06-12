import { useParams } from 'react-router-dom';
import Longbutton from '../Buttons/Longbutton';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { innerWeight } from '../redux/slices/weight';
import { useDispatch } from 'react-redux';

import './Handleweight.scss';

function Handleweight() {
  const [weight, setWeight] = useState('');
  const products = useSelector((state) => state.products.products.items);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProduct = products.find((e) => e._id === id);

  function handleWeight(e) {
    setWeight(`${weight}` + `${e.target.value}`);
  }
  function clearInput() {
    setWeight('');
  }
  function addHandleWeight() {
    dispatch(innerWeight(parseFloat(weight)));
    navigate(`/gweight/${id}`);
    setWeight('');
  }
  return (
    <main className="handleweight">
      <div className="handleweight_timantanlong">
        <span className="handleweight_timantanlong_span">Тимантан</span>
        <img
          className="handleweight_timantanlong_cookies"
          src={currentProduct.productUrl}
          alt="crol"
        />
      </div>
      <div className="handleweight_block">
        <div className="handleweight_info">
          <img
            className="handleweight_card_img"
            src={currentProduct.productUrl}
            alt="cookies"
          ></img>
          <h2 className="handleweight_card_text">{currentProduct.fullname}</h2>
        </div>
        <div className="handleweight_entry">
          <div className="handleweight_menu">
            <span className="handleweight_menu_text">Вес, кол-во:</span>
            <input
              value={weight}
              className="handleweight_menu_input"
              placeholder="Введите вес или количество товара"
              type="text"
              min="0"
              max="999.999"
              step="0.001"
              required
            />
            <div className="handleweightdel">
              <button
                onClick={clearInput}
                className="handleweightdel_btn"
              ></button>
            </div>
          </div>
          <div className="handleweight_adding">
            <button
              onClick={handleWeight}
              value={1}
              className="handleweight_adding_text"
            >
              1
            </button>
            <button
              value={2}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              2
            </button>
            <button
              value={3}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              3
            </button>
            <button
              value={4}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              4
            </button>
            <button
              value={5}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              5
            </button>
            <button
              value={6}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              6
            </button>
            <button
              value={7}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              7
            </button>
            <button
              value={8}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              8
            </button>
            <button
              value={9}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              9
            </button>
            <button
              value="."
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              .
            </button>
            <button
              value={0}
              onClick={handleWeight}
              className="handleweight_adding_text"
            >
              0
            </button>
            <button
              onClick={addHandleWeight}
              className="handleweight_adding_btn"
            >
              Ok
            </button>
          </div>
        </div>
        <Longbutton text={'Назад'} />
      </div>
    </main>
  );
}

export default Handleweight;
