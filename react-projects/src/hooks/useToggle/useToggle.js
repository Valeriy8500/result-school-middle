import React from 'react';

export function useToggle(array) {
  const [value, setValue] = React.useState(null);
  const refCount = React.useRef(array.length)

  const toggle = (toggleParam) => {
    if (!array && !toggleParam) {
      if (value === null) {
        setValue(true);
      } else {
        setValue(prev => !prev);
      }
    }

    if (toggleParam && !array) {
      setValue(toggleParam);
    }

    if (array.length > 0) {
      if (refCount.current <= 0) {
        refCount.current = array.length;
      }
      const elToDisplay = array.length - refCount.current
      setValue(array[elToDisplay]);
      refCount.current = refCount.current - 1
    }
  };

  return [
    value,
    toggle
  ]
}