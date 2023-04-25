import React from 'react';

export function useHover() {
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.addEventListener('mouseover', () => {
      setHovered(true);
    });

    ref.current.addEventListener('mouseout', () => {
      setHovered(false);
    });
  }, []);

  return {
    hovered,
    ref
  }
}