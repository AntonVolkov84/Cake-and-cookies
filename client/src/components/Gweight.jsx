import { cleanWeight } from '../redux/slices/weight';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Gweight.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { innerAction } from '../redux/slices/busket';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/products';

function Gweight() {
  const products = useSelector((state) => state.products.products.items);
  const isAddingWeight = useSelector((state) => state.weight.weight.items);
  const { id } = useParams();
  const [weight, setWeight] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentProduct = products.find((e) => e._id === id);
  useEffect(() => {
    setWeight(isAddingWeight[isAddingWeight.length - 1]);
  }, [isAddingWeight]);

  function inputChange(event) {
    setWeight(event.target.value);
  }
  function addToBusket() {
    if (weight === undefined) {
      return alert('Вы не выбрали вес или количество товара');
    }
    dispatch(
      innerAction({
        fullname: currentProduct.fullname,
        price: currentProduct.price,
        weight: weight,
        total: currentProduct.price * weight,
      })
    );
    dispatch(cleanWeight());
    setWeight('');
    navigate('/');
  }

  return (
    <main className="gweight">
      <div className="gweight_timantanlong">
        <span className="gweight_timantanlong_span">Тимантан</span>
        <img
          className="gweight_timantanlong_cookies"
          src={currentProduct.productUrl}
          alt="cookies"
        />
      </div>
      <div className="gweight_block">
        <div className="gweight_info">
          <img
            className="gweight_card_img"
            src={currentProduct.productUrl}
            alt="cookies"
          ></img>
          <h2 className="gweight_card_text">{currentProduct.fullname}</h2>
        </div>
        <div className="gweight_entry">
          <div className="gweight_menu">
            <span className="gweight_menu_text">Цена:</span>
            <div className="gweight_menu_text">{currentProduct.price}</div>
            <span className="gweight_menu_text">Вес, кол-во:</span>
            <input
              value={weight}
              className="gweight_menu_input"
              placeholder="Введите вес или количество товара"
              type="number"
              min="0"
              max="999.999"
              step="0.001"
              required
              onChange={inputChange}
            />
          </div>
          <button className="gweight_get">Получить вес</button>
          <div className="gweight_adding">
            <button
              onClick={() => navigate(`/handleweight/${id}`)}
              className="gweight_handleadd"
            >
              Ручной ввод данных
            </button>
            <button onClick={addToBusket} className="gweight_add">
              Добавить в корзину
            </button>
          </div>
        </div>
        <button onClick={() => navigate('/')} className="longbutton">
          Отмена
        </button>
      </div>
    </main>
  );
}

export default Gweight;
