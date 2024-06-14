import { useSelector } from 'react-redux';
import './Bucket.scss';
import { cleanBucket } from '../redux/slices/busket';
import { useDispatch } from 'react-redux';
import { delProduct } from '../redux/slices/busket';
import { useNavigate } from 'react-router-dom';

function Bucket() {
  const navigate = useNavigate();
  const { busket } = useSelector((state) => state.busket);
  const dispatch = useDispatch();

  function delProductFromBucket(event) {
    dispatch(delProduct(event.target.parentNode.id));
  }

  function cleanBasket() {
    dispatch(cleanBucket());
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
        <div className="bucket_roll">
          <button className="bucket_rollup"></button>
          <button className="bucket_rolldown"></button>
        </div>
      </div>
      <div className="bucket_total">
        Итого:{' '}
        {busket.items.reduce((acc, e) => {
          return acc + e.total;
        }, 0)}
      </div>
      <button className="bucket_checkout">Оформить покупку</button>
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
