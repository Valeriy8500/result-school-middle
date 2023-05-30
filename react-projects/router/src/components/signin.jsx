import React from 'react';
import Input from '../atomicComponents/customInput';
import { useAuth } from './authProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [value, setValue] = React.useState({
    name: '',
    password: ''
  });

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const onChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    auth.signin(value, () => {
      navigate(from, {
        replace: true
      });
    });
  };

  return (
    <div>
      <h3>Для работы приложения нужно зарегистрироваться:</h3>
      <form
        className='form'
        onSubmit={e => onSubmit(e, value)}
      >
        <Input
          value={value.name}
          onChange={onChange}
          name='name'
          disabled={false}
          type='text'
          className='input'
          placeholder=' имя'
          label='Введите имя'
          withAsterisk={true}
        />
        <Input
          value={value.password}
          onChange={onChange}
          name='password'
          disabled={false}
          type='password'
          className='input'
          placeholder=' password'
          label='Введите пароль'
          withAsterisk={true}
        />

        <button type="submit" className='button'>Войти</button>
      </form>
    </div>
  )
}

export default Login;