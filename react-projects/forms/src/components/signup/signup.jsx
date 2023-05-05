import React from 'react';
import Input from '../../atomicComponents/customInput';

const Signup = () => {
  return (
    <div>
      <h2>Форма 2</h2>
      <form>
        <Input disabled={false} type='email' />
        <Input disabled={false} type='password' />
        <Input disabled={false} type='password' />
        <Input disabled={false} type='password' />
        <Input disabled={false} type='password' />
        <Input disabled={false} type='password' />
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}

export default Signup;