const VERSION = 3;

self.addEventListener('install',function(event){
    console.log("[SW] installing service worker version " + VERSION);
    event.waitUntil(
        caches.open('catdy-chat').then(function(caches) {
          return caches.addAll([
            '/',
            '/index.html',
          ]);
        })
    );
});

self.addEventListener('fetch', function(event){
   caches.match(event.request).then(function(response){
    if(response){
        console.log("Intercepted request",event.request.url,"from cache");
        return response;
    }
    return fetch(event.request);
   });
});