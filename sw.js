const CACHE_NAME = 'jokes-app-v1.2';
const assets = [
  './',
  './index.html',
  './manifest.json',
  '1000047724-removebg-preview.png'
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch resources
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
