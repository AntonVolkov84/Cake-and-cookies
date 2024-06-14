import ExitShort from '../Buttons/ExitShort';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuth } from '../redux/slices/auth';
import './Login.scss';
import { fetchAuth } from '../redux/slices/auth';

function Login() {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'antvolkov84@gmail.com',
      password: '12345',
    },
    mode: 'onChange',
  });

  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  if (isAuth) {
    return navigate('/');
  }

  return (
    <>
      <section className="main_menus">
        <div className="timantanlong">
          <span className="timantanlong_span">Тимантан</span>
          <img className="timantanlong_cookies" src="img/crol.png" alt="crol" />
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
        <ExitShort />
      </section>
    </>
  );
}

export default Login;
