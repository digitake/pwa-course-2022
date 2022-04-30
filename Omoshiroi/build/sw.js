const VERSION = 3;

self.addEventListener('install', function(event) {
    console.log("[SW] installing service worker version " + VERSION);
    event.waitUntil(
        caches.open('gi472-chat').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    caches.match(event.request).then(response => {
        if(response) {
            console.log("Intercepted with cache", response);
            return response;
        }

        return fetch(event.request);
    });
});