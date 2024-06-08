import Longbutton from '../Buttons/Longbutton';
import TimantanLong from '../Buttons/TimantanLong';

import './Quit.scss';

function Quit() {
  return (
    <main className="menuquit">
      <TimantanLong />
      <div className="menuquit_block">
        <div className="menuquit_text">Итоговая сумма продаж:</div>
        <div className="menuquit_total">120.00</div>
      </div>
      <Longbutton text={'Выйти'} />
    </main>
  );
}

export default Quit;
