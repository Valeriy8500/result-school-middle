import React from 'react';
import { useViewportSize } from './useViewportSize';
import { style } from '../../constans';

function AppForUseViewportSize() {
  const { height, width } = useViewportSize();

  return (
    <div style={style}>
      <h2>Задание 4</h2>
      Width: {width}, height: {height}
    </div>
  );
}

export default AppForUseViewportSize;