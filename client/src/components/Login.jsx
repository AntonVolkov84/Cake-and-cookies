import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { selectIsAuth } from '../redux/slices/auth';
import { fetchAuth } from '../redux/slices/auth';

import './Login.scss';

function Login() {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'antvolkov84@gmail.com',
      password: '12345',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      alert('Не удалось авторизоваться');
    } else if ('token' in data.payload) {
      localStorage.setItem('token', data.payload.token);
    } else {
      alert('Не удалось авторизоваться');
    }
  };

  if (isAuth) {
    return navigate('/');
  }

  return (
    <>
      <section className="mainlogin">
        <div className="mainlogin_timantanlong">
          <span className="mainlogin_timantanlong_span">
            Пожалуйста, авторизируйтесь!
          </span>
          <img
            className="mainlogin_timantanlong_cookies"
            src="img/crol.png"
            alt="crol"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="blocklogin">
          <div className="blocklogin_container">
            <div className="blocklogin_text">Логин:</div>
            <input
              {...register('email', { required: 'Укажите Ваш эмаил' })}
              className="blocklogin_input"
              placeholder="Эмаил"
            ></input>
            <div className="blocklogin_text">Пароль:</div>
            <input
              {...register('password', { required: 'Укажите Ваш пароль' })}
              className="blocklogin_input"
              placeholder="Пароль"
            ></input>
          </div>
          <button type="submit" className="blocklogin_btn">
            Войти
          </button>
        </form>
        <Link to="/">
          <button className="exitshort">Назад</button>
        </Link>
      </section>
    </>
  );
}

export default Login;
