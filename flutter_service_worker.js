'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "053476db3e77c181887eed62aab7c3af",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Rajdhani-Light.ttf": "d81f6a473fc85da9e69f0737619596f0",
"assets/assets/images/background.jpg": "74b32cccbc9601dbae6187f7ef87d9eb",
"assets/FontManifest.json": "0b1e7cd7d0ae079c50932a8c9fe5c619",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "08953c8a21a2e323ce521afa8045ddc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "92acaac4edce9810ac1c45deeba5b2b2",
"/": "92acaac4edce9810ac1c45deeba5b2b2",
"main.dart.js": "488b62992c771129aa67bef5c2426bd9",
"manifest.json": "1e015b9b05e42bfbd2ae90f449fbe71f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
