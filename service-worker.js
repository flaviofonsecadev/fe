self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('versiculos-cache')
      .then(cache => cache.addAll([
        '/', // raiz da sua aplicação
        '/index.html',
        '/style.css',
        '/script.js'
        // adicione mais arquivos que você queira que sejam cacheados
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open('versiculos-cache')
              .then(cache => cache.put(event.request, responseToCache));

            return response;
          });
      })
  );
});
