self.addEventListener ('install', e => {
  e.waitUntil (
    caches.open ('tabelline-cache').then (cache => {
      return cache.addAll ([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/corretto.mp3',
        '/sbagliato.mp3',
        '/icon-192.png',
        '/icon-512.png',
      ]);
    })
  );
});

self.addEventListener ('fetch', e => {
  e.respondWith (
    caches.match (e.request).then (response => {
      return response || fetch (e.request);
    })
  );
});
