import React from 'react';
import { useWindowScroll } from './useWindowScroll';
import { style } from '../../constans';

function UseWindowScrollApp() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div style={style}>
      <h2>Задание 5</h2>
      <p style={{ marginTop: '0' }}>Scroll position x: {scroll.x}, y: {scroll.y}</p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}

export default UseWindowScrollApp;