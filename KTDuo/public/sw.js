const VERSION =1;

self.addEventListener('install', function(event) {
    console.log("[SW] installing Version : "+ VERSION);
    event.waitUntil(
        caches.open('KT-Webchat').then(function(cache){
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
            return response;
        }

        return fetch(event.request);
    });
});