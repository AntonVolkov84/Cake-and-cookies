import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { fetchPatchRemaining, fetchRemaining } from '../redux/slices/remaining';

import './Addingwriteoff.scss';

function Addingwriteoff() {
  const [weight, setWeight] = useState('');
  const [text, setText] = useState('');
  const products = useSelector((state) => state.products.products.items);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProduct = products.find((e) => e._id === id);
  const remaining = useSelector((state) => state.remaining.remaining.items);
  const filteredRemaining = remaining.filter((e) => e.productId === id);
  useEffect(() => {
    dispatch(fetchRemaining());
  }, []);

  async function onSubmit() {
    try {
      const data = await axios.post('/writeoff', {
        fullname: currentProduct.fullname,
        weight: weight,
        productId: id,
        text: text,
      });
      alert(data.data.message);
      addingRemaining();
      navigate('/writeoff');
    } catch (error) {
      alert(error.response.data[0].msg);
      console.warn(error);
    }
  }
  function addingRemaining() {
    dispatch(
      fetchPatchRemaining({
        fullname: currentProduct.fullname,
        weight: Number(filteredRemaining[0].weight) - Number(weight),
        productId: id,
      })
    );
  }
  function addingwriteoff(e) {
    setWeight(`${weight}` + `${e.target.value}`);
  }
  function clearWeight() {
    setWeight('');
  }
  function handleText(event) {
    setText(event.target.value);
  }

  return (
    <>
      <main className="addingwriteoff">
        <header className="addingwriteoff_header">
          <div className="addingwriteoff_timantan">Списание товара</div>
          <Link to="/adminmenu">
            <button className="trianglemain">
              <div className="triangle"></div>
            </button>
          </Link>
        </header>
        <div className="addingwriteoff_block">
          <div className="addingwriteoff_info">
            <img
              className="addingwriteoff_card_img"
              src={currentProduct.productUrl}
              alt="cookies"
            ></img>
            <h2 className="addingwriteoff_card_text">
              Название: {currentProduct.fullname}
            </h2>
            <h2 className="addingwriteoff_card_text">
              Цена: {currentProduct.price}
            </h2>
            <h2 className="addingwriteoff_card_text">
              Ингридиенты: {currentProduct.ingredients}
            </h2>
          </div>
          <div className="addingwriteoff_entry">
            <div className="addingwriteoff_menu">
              <span className="addingwriteoff_menu_text">Вес, кол-во:</span>
              <input
                value={weight}
                className="addingwriteoff_menu_input"
                placeholder="Введите вес или количество товара"
                type="text"
                min="0"
                max="999.999"
                step="0.001"
                required
              />
              <div className="addingwriteoff_del">
                <button
                  onClick={clearWeight}
                  className="addingwriteoff_del_btn"
                ></button>
              </div>
            </div>
            <div className="addingwriteoff_adding">
              <button
                onClick={addingwriteoff}
                value={1}
                className="addingwriteoff_adding_text"
              >
                1
              </button>
              <button
                value={2}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                2
              </button>
              <button
                value={3}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                3
              </button>
              <button
                value={4}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                4
              </button>
              <button
                value={5}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                5
              </button>
              <button
                value={6}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                6
              </button>
              <button
                value={7}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                7
              </button>
              <button
                value={8}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                8
              </button>
              <button
                value={9}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                9
              </button>
              <button
                value="."
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                .
              </button>
              <button
                value={0}
                onClick={addingwriteoff}
                className="addingwriteoff_adding_text"
              >
                0
              </button>
              <button onClick={onSubmit} className="addingwriteoff_adding_btn">
                Ok
              </button>
            </div>
          </div>
        </div>
        <textarea
          placeholder="Введите основания для списания товара"
          onChange={handleText}
          className="addingwriteoff_textinput"
        ></textarea>
        <Link to="/writeoff">
          <button className="addingwriteoff_back">Назад</button>
        </Link>
      </main>
    </>
  );
}
export default Addingwriteoff;
