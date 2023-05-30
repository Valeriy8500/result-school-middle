import React from 'react';
import AppForUseFetch from './hooks/useFetch/appForUseFetch';
import AppForUseLocalStorage from './hooks/useLocalStorage/appForUseLocalStorage';
import AppForUseHover from './hooks/useHover/appForUseHover';
import AppForUseViewportSize from './hooks/useViewportSize/appForUseViewportSize';
import AppForUseWindowScroll from './hooks/useWindowScroll/appForUseWindowScroll';
import AppForUseToggle from './hooks/useToggle/appForUseToggle';

export function App() {
  return (
    <>
      <AppForUseFetch />
      <AppForUseLocalStorage />
      <AppForUseHover />
      <AppForUseViewportSize />
      <AppForUseWindowScroll />
      <AppForUseToggle />
    </>
  )
}
