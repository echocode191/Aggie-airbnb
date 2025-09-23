const CACHE_NAME = 'aggie-airbnb-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/logo.png',
  '/logo192.png',
  '/logo512.png',
  '/manifest.json',
  '/assets/image1.png',
  '/assets/image2.png',
  '/assets/image3.png',
  '/assets/image4.png',
  '/assets/image5.png',
  '/assets/image9.png',
  '/assets/image10.png',
  '/assets/image11.png',
  '/assets/image12.png',
  '/assets/image13.png',
  '/assets/image14.png',
  '/assets/image15.png',
  '/assets/image16.png',
  '/assets/image17.png',
  '/assets/image18.png',
  '/assets/image19.png',
  '/assets/image20.png'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Not in cache - fetch from network
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response as it's a stream
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});