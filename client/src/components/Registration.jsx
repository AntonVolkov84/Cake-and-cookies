import ExitShort from '../Buttons/ExitShort';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Registration.scss';
import { fetchRegistration } from '../redux/slices/registration';
import { selectIsAdmin } from '../redux/slices/auth';

function Registration() {
  const isAdmin = useSelector(selectIsAdmin);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      isAdmin: 'false',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (values) => {
    console.log(values);
    dispatch(fetchRegistration(values));
  };

  if (!isAdmin) {
    return navigate('/');
  }

  return (
    <main className="registrationblock">
      <section className="registrationblock_main_menus">
        <div className="registrationblock_timantanlong">
          <span className="registrationblock_timantanlong_span">Тимантан</span>
          <img
            className="registrationblock_timantanlong_cookies"
            src="img/crol.png"
            alt="crol"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="registrationblock_blocklogin"
        >
          <div className="registrationblock_blocklogin_container">
            <div className="registrationblock_blocklogin_text">Эмаил:</div>
            <input
              {...register('email', { required: 'Укажите Ваш эмаил' })}
              className="registrationblock_blocklogin_input"
              placeholder="Эмаил"
            ></input>
            <div className="registrationblock_blocklogin_text">ФИО:</div>
            <input
              {...register('fullname', { required: 'Укажите Ваши данные' })}
              className="registrationblock_blocklogin_input"
              placeholder="ФИО"
            ></input>
            <div className="registrationblock_blocklogin_text">Админ:</div>
            <select
              {...register('isAdmin', { required: 'Является ли админом' })}
              className="registrationblock_blocklogin_input"
              placeholder="Админ"
            >
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
            <div className="registrationblock_blocklogin_text">Пароль:</div>
            <input
              {...register('password', { required: 'Укажите Ваш пароль' })}
              className="registrationblock_blocklogin_input"
              placeholder="Пароль"
            ></input>
          </div>
          <button type="submit" className="registrationblock_blocklogin_btn">
            Войти
          </button>
        </form>
        <ExitShort />
      </section>
    </main>
  );
}

export default Registration;
