import ProductInBucket from '../Buttons/ProductInBucket';
import './Bucket.scss';

function Bucket() {
  return (
    <main className="bucket">
      <div className="bucket_header">Корзина</div>
      <div className="bucket_menu">
        <div className="bucket_info">
          <ProductInBucket />
          <ProductInBucket />
        </div>
        <div className="bucket_roll">
          <button className="bucket_rollup"></button>
          <button className="bucket_rolldown"></button>
        </div>
      </div>
      <div className="bucket_total">Итого: 152.00</div>
      <button className="bucket_checkout">Оформить покупку</button>
      <div className="bucket_footer">
        <button className="bucket_back">Назад</button>
        <button className="bucket_del">Сброс</button>
      </div>
    </main>
  );
}

export default Bucket;
