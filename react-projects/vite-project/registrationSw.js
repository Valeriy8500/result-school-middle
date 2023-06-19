if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((res) => console.log('Service Worker registration: ', res))
    .catch((err) => console.log('Service Worker NOT registered: ', err))
}