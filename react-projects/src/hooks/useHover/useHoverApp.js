import React from 'react';
import { useHover } from './useHover';
import { style } from '../../constans';

function UseHoverApp() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref} style={style}>
      <h2>Задание 3</h2>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default UseHoverApp;