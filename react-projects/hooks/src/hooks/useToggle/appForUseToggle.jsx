import React from 'react';
import { useToggle } from './useToggle';
import { style, btnStyle } from '../../constans';

function AppForUseToggle() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal', 'black']);

  return (
    <div style={style}>
      <h2>Задание 6</h2>
      <button onClick={() => toggle()} style={btnStyle}>
        {typeof value === 'boolean' ? value.toString() : value}
      </button>
    </div>
  );
}

export default AppForUseToggle;