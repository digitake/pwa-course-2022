const VERSION = 1;

self.addEventListener('install', function(event){
    console.log("[SW] Installing service worker version " + VERSION)
    event.waitUntil(
        caches.open('colorfulChat').then(function(cache){
            return cache.addAll([
                '/',
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    caches.match(event.request).then(function(response){
        if(response){
            console.log("Intercepted with cache", response);
            return response;
        }

        return fetch(event.request);
    })
});