const staticCacheName = 'static-site-v2';
const dynamicCacheName = 'dynamic-site-v2';

const ASSETS = [
  '/',
  '/index.html',
  '/src/index.css',
  '/registrationSw.js',
  '/src/app.jsx',
  '/src/main.jsx'
];

// установка Service Worker
self.addEventListener('install', async (e) => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
});

// активация Service Worker
self.addEventListener('activate', async (e) => {
  const cacheKeysArr = await caches.keys();
  await Promise.all(cacheKeysArr.filter(key => key !== staticCacheName && key !== dynamicCacheName).map(key => caches.delete(key)));
});

// fetch event (кэширование)
self.addEventListener('fetch', (e) => {
  e.respondWith(cacheFirst(e.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  try {
    return cached ?? await fetch(request).then(res => {
      return networkFirst(request);
    });
  } catch (e) {
    return networkFirst(request);
  }
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    return cached ?? await caches.match('/src/components/notFound/notFound.jsx');
  }
}