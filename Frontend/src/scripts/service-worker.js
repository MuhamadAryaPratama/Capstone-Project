const CACHE_NAME = 'nusantarasa-lite-cache-v1';
const urlsToCache = [
  '/',
  '/templates/index.html',
  '/styles/responsive.css',
  '/styles/style.css',
  '/views/app.js',
  '/routes/router.js',
  '/routes/url_parser.js',
  '/components/aboutUs.js',
  '/components/acehMenu.js',
  '/components/baliMenu.js',
  '/components/bangkaBelitungMenu.js',
  '/components/bantenMenu.js',
  '/components/bengkuluMenu.js',
  '/components/contentList.js',
  '/components/footerBar.js',
  '/components/gorontaloMenu.js',
  '/components/headerBar.js',
  '/components/hero.js',
  '/components/jakartaMenu.js',
  '/components/jambiMenu.js',
  '/components/jawaBaratMenu.js',
  '/components/jawaTengahMenu.js',
  '/components/jawaTimurMenu.js',
  '/components/kalimantanBaratMenu.js',
  '/components/kalimantanSelatanMenu.js',
  '/components/kalimantanTengahMenu.js',
  '/components/kalimantanTimurMenu.js',
  '/components/kalimantanUtaraMenu.js',
  '/components/kepulauanRiauMenu.js',
  '/components/kulinerTerpopuler.js',
  '/components/lampungMenu.js',
  '/components/malukuMenu.js',
  '/components/malukuUtaraMenu.js',
  '/components/ntbMenu.js',
  '/components/nttMenu.js',
  '/components/riauMenu.js',
  '/components/sulawesiBaratMenu.js',
  '/components/sulawesiSelatanMenu.js',
  '/components/sulawesiTengahMenu.js',
  '/components/sulawesiTenggaraMenu.js',
  '/components/sulawesiUtaraMenu.js',
  '/components/sumateraBaratMenu.js',
  '/components/sumateraSelatanMenu.js',
  '/components/sumateraUtaraMenu.js',
  '/components/yogyakartaMenu.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Not found in cache - fetch and cache
        return fetch(event.request)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          // Delete outdated caches
          return cacheName.startsWith('nusantarasa-lite-cache-') && cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
