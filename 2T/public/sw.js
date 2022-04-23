const VERSION = 3;

self.addEventListener('install',function(event) {
    console.log("[SW] installing service worker version " + VERSION);
    event.waitUntil(
        caches.open('gi472-chat').then(function(caches) {
            return caches.addAll([
                '/',
                '/2T',
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch',function(event){
    caches.match(event.request).then(function(response){
        if(response){
          console.log("Intercepted with cache", response);
          return response;
        }
        return fetch(event.request);
    });
});