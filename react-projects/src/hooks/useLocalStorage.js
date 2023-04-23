import React from 'react';

const key = 'token';

function getValueStorage(initTokenValue) {
  const saveValue = JSON.parse(localStorage.getItem(key));

  if (saveValue) {
    return saveValue;
  }

  return initTokenValue;
}

export function useLocalStorage(initTokenValue) {
  const [token, setToken] = React.useState(() => getValueStorage(initTokenValue));

  const setItem = (newTokenValue) => {
    localStorage.setItem(key, JSON.stringify(newTokenValue));
    setToken(newTokenValue);
  };

  const removeItem = () => {
    localStorage.setItem(key, JSON.stringify(' '));
    setToken('');
  };

  return [
    token,
    {
      setItem,
      removeItem
    }
  ]
}