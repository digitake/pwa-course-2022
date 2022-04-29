const VERSION = 4;
self.addEventListener('install' ,function(event){

    console.log("[SW] installing service worker version" + VERSION);
    event.waitUntil(
        caches.open('Universe',function(cache){
            return cache.addAll([
                '/',
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    caches.match(event.request).then(function(response){
        if(response){
            console.log("intercepted with cache",response);
            return response;
        }
        return fetch(event.request);
    });
});