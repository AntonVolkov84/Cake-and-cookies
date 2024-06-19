import { useSelector } from 'react-redux';
import { cleanBucket } from '../redux/slices/busket';
import { useDispatch } from 'react-redux';
import { delProduct } from '../redux/slices/busket';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

import './Bucket.scss';

function Bucket() {
  const navigate = useNavigate();
  const { busket } = useSelector((state) => state.busket);
  const dispatch = useDispatch();
  const dateParse = Date.parse(new Date()) + 10800000;

  function delProductFromBucket(event) {
    dispatch(delProduct(event.target.parentNode.id));
  }

  function cleanBasket() {
    dispatch(cleanBucket());
  }

  async function handleCheckout() {
    const time = new Date();
    const idReport = time.getTime();
    try {
      await busket.items.forEach((e) => {
        axios.post('/report', {
          idReport: idReport,
          dateCreated: dateParse,
          fullname: e.fullname,
          price: e.price,
          weight: e.weight,
          totalPerProduct: e.total,
          total: busket.items.reduce((acc, e) => {
            return acc + e.total;
          }, 0),
        });
      });
    } catch (error) {
      console.warn(error);
    }

    dispatch(cleanBucket());
    navigate('/');
  }

  return (
    <main className="bucket">
      <div className="bucket_header">Корзина</div>
      <div className="bucket_menu">
        <div className="bucket_info">
          {busket.items.map((e, index) => (
            <div key={index} className="bucket_productinbucket" id={e.id}>
              <div className="bucket_productinbucket_names">{e.fullname}</div>
              <button
                onClick={delProductFromBucket}
                className="bucket_productinbucket_btn"
              ></button>
              <div className="bucket_productinbucket_prices">{e.price}</div>
              <div className="bucket_productinbucket_prices">{e.weight}</div>
              <div className="bucket_productinbucket_prices">{e.total}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bucket_total">
        Итого:{' '}
        {busket.items.reduce((acc, e) => {
          return acc + e.total;
        }, 0)}
      </div>
      <button onClick={handleCheckout} className="bucket_checkout">
        Оформить покупку
      </button>
      <div className="bucket_footer">
        <button onClick={() => navigate('/')} className="bucket_back">
          Назад
        </button>
        <button onClick={cleanBasket} className="bucket_del">
          Сброс
        </button>
      </div>
    </main>
  );
}

export default Bucket;
