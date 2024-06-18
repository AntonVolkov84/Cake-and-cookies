import Timantanshort from '../Buttons/Timantanshort';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Productadding.scss';
import axios from '../axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddProducts } from '../redux/slices/products';

function Productadding() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullname: '',
      price: '',
      ingredients: '',
      productUrl: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAddProducts(values));
    if (data.payload.product._id) {
      alert('Продукт добавлен');
      navigate('/');
    } else {
      alert('Неудачная попытка добавить товар');
    }
  };

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImageUrl(`http://localhost:3333${data.url}`);
    } catch (error) {
      console.warn(error);
      alert('Ошибка при загрузке файла');
    }
  };

  return (
    <main className="productadding">
      <div className="productadding_header">
        <Timantanshort />
        <Link to="/adminmenu">
          <button className="trianglemain">
            <div className="triangle"></div>
          </button>
        </Link>
        <Link to="/registration">
          <button className="registration">
            <span className="registration_text">Регистрация</span>
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="productadding_card">
        <div className="productadding_cardboard">
          <div className="productadding_cardboardtext">Название товара:</div>
          <input
            {...register('fullname', { required: 'Укажите название товара' })}
            type="text"
            className="productadding_cardboardentry"
          ></input>
        </div>
        <div className="productadding_cardboard">
          <div className="productadding_cardboardtext">Цена товара:</div>
          <input
            {...register('price', { required: 'Укажите цену товара' })}
            type="text"
            className="productadding_cardboardentry"
          ></input>
        </div>
        <div className="productadding_cardboard">
          <div className="productadding_cardboardtext">Ингридиенты:</div>
          <input
            {...register('ingredients', {
              required: 'Укажите ингридиенты товара',
            })}
            type="textfield"
            className="productadding_cardboardentry"
          ></input>
        </div>
        <div className="productadding_cardboard">
          <div className="productadding_cardboardtext">Фото или аватарка</div>
          <div className="productadding_cardboardentry">
            <div>
              <input
                value={imageUrl}
                {...register('productUrl', {
                  required: 'Укажите путь к аватарке',
                })}
                className="productadding_entrytext"
              ></input>
            </div>
            <label className="productadding_forentryfile">
              Вставить файл
              <input
                onChange={handleChangeFile}
                type="file"
                className="productadding_entryfile"
              ></input>
            </label>
          </div>
        </div>

        <div className="productadding_footer">
          <button type="submit" className="productadding_footer_add">
            Добавить новый товар
          </button>
          <button className="productadding_footer_back">Назад</button>
        </div>
      </form>
    </main>
  );
}

export default Productadding;
