import React from 'react';

export function useWindowScroll() {
  const [scroll, setScroll] = React.useState({ x: 0, y: 0 });

  const saveNewValue = () => {
    const positionY = window.scrollY;
    const positionX = window.scrollX;

    setScroll({ x: positionX, y: positionY });
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', saveNewValue);

      return () => window.removeEventListener('scroll', saveNewValue);
    }
  }, []);

  const scrollTo = ({ y }) => {
    window.scrollTo(scroll.x, y);
  }

  return [
    scroll,
    scrollTo
  ]
}