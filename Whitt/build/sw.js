const VERSION = 3;

self.addEventListener('install', function(event){
    console.log("[SW] installing service worker version " + VERSION);
    event.waitUntil(
        caches.open('git472-chat').then(function(caches) {
           return caches.addAll([
              '/',
               '/index.html',
           ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    caches.match(event.request).then(function(respones){
      if (response){
          console.log("Intercepted with cache", ressponse);
          return respones;
      }

      return fetch(event.request);
    });
});