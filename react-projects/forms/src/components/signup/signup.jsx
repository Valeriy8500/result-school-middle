import React from 'react';
import Input from '../../atomicComponents/customInput';
import RadioButtons from '../../atomicComponents/radioButtons';
import './signup.css';

const Signup = ({ onSubmit }) => {
  const [value, setValue] = React.useState({
    name: '',
    nickname: '',
    email: '',
    gender: '',
    password: '',
    repeatPassword: ''
  });

  const onChange = (e) => {
    if (e.target.name !== 'gender') {
      setValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    } else {
      setValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.id === 'male' ? 'Мужской' : 'Женский'
      }));
    }
  };

  return (
    <div>
      <h2 className='title'>Форма 2</h2>
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
          placeholder=' name'
          label='Your name'
          description='Описание'
          error=''
          variant=''
          withAsterisk={true}
        />
        <Input
          value={value.nickname}
          onChange={onChange}
          name='nickname'
          disabled={false}
          type='text'
          className='input'
          placeholder=' @ email'
          label='Your nickname'
          description='Описание'
          error=''
          variant=''
          withAsterisk={true}
        />
        <Input
          value={value.email}
          onChange={onChange}
          name='email'
          disabled={false}
          type='email'
          className='input'
          placeholder=' email'
          label='Your email'
          description='Описание'
          error=''
          variant=''
          withAsterisk={true}
        />
        <RadioButtons
          onChange={onChange}
          name='gender'
          disabled={false}
          type='radio'
          label='Your gender'
          description='Описание'
          withAsterisk={true}
        />
        <Input
          onChange={onChange}
          value={value.password}
          name='password'
          disabled={false}
          type='password'
          className='input'
          placeholder=' password'
          label='Your password'
          description='Описание'
          error=''
          variant=''
          withAsterisk={true}
        />
        <Input
          value={value.repeatPassword}
          onChange={onChange}
          name='repeatPassword'
          disabled={false}
          type='password'
          className='input'
          placeholder=' repeat password'
          label='Repeat your password'
          description='Описание'
          error=''
          variant=''
          withAsterisk={true}
        />

        <button type="submit" className='button'>Войти</button>
      </form>
    </div>
  )
}

export default Signup;