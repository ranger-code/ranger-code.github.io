const cacheName = 'cache-v2';
const res = [
    '/',
    'index.html',
    'assets/css/styles.css',
    'assets/css/bootstrap.min.css',
    'assets/files/All Stories.zip',
    'icons/apple-icon-180.png',
    'icons/icon-1 (1).jpg',
    'icons/icon-1 (2).jpg',
    'icons/icon-1 (3).jpg',
    'icons/icon-1 (4).jpg',
    'icons/icon-1 (5).jpg',
    'icons/icon-1 (6).jpg',
    'icons/icon-1 (7).jpg',
    'icons/icon-1 (8).jpg',
    'icons/icon-1 (9).jpg',
    'icons/icon-1 (10).jpg',
    'icons/icon-1 (11).jpg',
    'icons/icon-1 (12).jpg',
    'icons/icon-1 (13).jpg',
    'icons/icon-1 (14).jpg',
    'icons/icon-1 (15).jpg',
    'icons/icon-1 (16).jpg',
    'icons/icon-1 (17).jpg',
    'icons/icon-1 (18).jpg',
    'icons/icon-1 (19).jpg',
    'icons/icon-1 (20).jpg',
    'icons/icon-1 (21).jpg',
    'icons/icon-1 (22).jpg',
    'icons/icon-1 (23).jpg',
    'icons/icon-1 (24).jpg',
    'icons/icon-1 (25).jpg',
    'icons/icon-1 (26).jpg',
    'icons/manifest-icon-192.png',
    'icons/manifest-icon-512.png',
    'assets/images/logo.png',
    'assets/js/bootstrap.bundle.min.js',
    'manifest.json',
    'assets/stories/cursed-treasure-one.html',
    'assets/stories/cursed-treasure-two.html',
    'assets/stories/css/styles.css',
    'assets/stories/music-reading.mp3'
];

self.addEventListener('install', (e) => {
    console.log('Installing');
    e.waitUntil (
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(res);
        })
    );
});

self.addEventListener('activate', (e) => {
    console.log('Activated');
    e.waitUntil (
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== cacheName)
            .map(key => caches.delete(key))
            )
        })
    );
});
self.addEventListener('fetch', (e) => {
    console.log('Fetching');
    e.respondWith(caches.match(e.request)
    .then(response =>{
        return response || fetch(e.request);
    })
    );
});