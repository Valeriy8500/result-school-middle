import React from 'react';
import { useAuth } from '../../context/authProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';

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
    <>
      {
        location.state.from === "/signin"
          ? null : <h3 className="title">Для работы приложения нужно зарегистрироваться:</h3>
      }
      <form
        className='form'
        onSubmit={e => onSubmit(e, value)}
      >
        <TextInput
          value={value.name}
          onChange={onChange}
          name='name'
          disabled={false}
          type='text'
          className='input'
          placeholder='имя'
          label='Введите имя'
          withAsterisk={true}
          required
        />
        <TextInput
          value={value.password}
          onChange={onChange}
          name='password'
          disabled={false}
          type='password'
          className='input'
          placeholder='пароль'
          label='Введите пароль'
          withAsterisk={true}
          required
        />

        <Button type="submit" className='submit-btn'>Войти</Button>
      </form>
    </>
  )
}

export default Login;