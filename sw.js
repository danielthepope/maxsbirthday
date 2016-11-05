this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/maxsbirthday/',
        '/maxsbirthday/index.html',
        '/maxsbirthday/omgmog.jpg',
        '/maxsbirthday/omgmog48.png'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
