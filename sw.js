// Offline-first: Cache assets on service worker install.
self.addEventListener('install', event => {
  const urlsToCache = [
    '/',
    'css/styles.css',
    'data/restaurants.json',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'index.html',
    'restaurant.html'
  ];

  const cacheName = 'restaurant-reviews-static-v1';

  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(urlsToCache))
  );
});

// Offline-first: Respond to requests with cached assets.
self.addEventListener('fetch', event => event.respondWith(
  caches.match(event.request)
    .then(response => response || fetch(event.request))
));
