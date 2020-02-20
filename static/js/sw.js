self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('solus-store').then(function (cache) {
            return cache.addAll([
                '/about',
                "/",
                "/products",
                "/team",
                "/partners",
                '/index.html',
                '/css/style.css',
                '/img/1.webp',
                '/img/2.webp',
                '/img/3.webp',
                '/img/4.webp',
                '/img/5.webp',
                '/img/6.webp',
                '/img/7.webp'


            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
