import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { style } from '../../constans';

function UseLocalStorageApp() {
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  return (
    <div style={style}>
      <h2>Задание 2</h2>
      <p style={{ marginTop: '0' }}>Твой токен: {token}</p>
      <div style={style}>
        <button
          onClick={() => setItem('new-token')}
          style={{ marginBottom: '5px' }}>
          Задать токен
        </button>
        <button onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );
}

export default UseLocalStorageApp;
