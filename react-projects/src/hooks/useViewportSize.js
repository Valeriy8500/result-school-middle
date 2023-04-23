import React from 'react';

const viewportWidth = window.visualViewport.width;
const viewportHeight = window.visualViewport.height;

export function useViewportSize() {
  const [width, setWidth] = React.useState(viewportWidth);
  const [height, setHeight] = React.useState(viewportHeight);

  const saveNewSizes = () => {
    setWidth(window.visualViewport.width);
    setHeight(window.visualViewport.height);
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', saveNewSizes);

      return () => window.removeEventListener('resize', saveNewSizes);
    }
  }, []);

  return {
    height,
    width
  }
}

