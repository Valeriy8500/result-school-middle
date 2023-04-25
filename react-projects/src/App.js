import React from 'react';
import UseFetchApp from './hooks/useFetch/useFetchApp';
import UseLocalStorageApp from './hooks/useLocalStorage/useLocalStorageApp';
import UseHoverApp from './hooks/useHover/useHoverApp';
import UseViewportSizeApp from './hooks/useViewportSize/useViewportSizeApp';
import UseWindowScrollApp from './hooks/useWindowScroll/useWindowScrollApp';
import UseToggleApp from './hooks/useToggle/useToggleApp';

export function App() {
  return (
    <>
      <UseFetchApp />
      <UseLocalStorageApp />
      <UseHoverApp />
      <UseViewportSizeApp />
      <UseWindowScrollApp />
      <UseToggleApp />
    </>
  )
}
