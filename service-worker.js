"use strict";

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
	"/request-to-ride.html",
	"/ride.html",
	"/ride-confirmed.html",
	"/src/css/components/header.css.css",
	"/src/css/components/aside.css",
	"/src/css/components/footer.css",
	"/src/css/home/header",
	"/src/css/home/home.css",
	"/src/css/home/main.css",
	"/src/css/home/style-home.css",
	"/src/css/request/main.css",
	"/src/css/request/request.css",
	"/src/css/request/style-request.css",
	"/src/css/ride/main.css",
	"/src/css/ride/ride.css",
	"/src/css/ride/style-ride.css",
	"/src/css/ride-confirmed/card-details.css",
	"/src/css/ride-confirmed/modal.css",
	"/src/css/ride-confirmed/style-ride-confirmed.css",
	"/src/css/utils/color.css",
	"/src/css/utils/container.css",
	"/src/css/reset.css",
	"/src/css/style.css",
	"/src/fonts/stylesheet.css",
	"/src/fonts/subset-Poppins-Light.eot",
	"/src/fonts/subset-Poppins-Light.svg",
	"/src/fonts/subset-Poppins-Light.ttf",
	"/src/fonts/subset-Poppins-Light.woff",
	"/src/fonts/subset-Poppins-Light.woff2",
	"/src/fonts/subset-Poppins-Light-SemiBold.eot",
	"/src/fonts/subset-Poppins-Light-SemiBold.svg",
	"/src/fonts/subset-Poppins-Light-SemiBold.ttf",
	"/src/fonts/subset-Poppins-Light-SemiBold.woff",
	"/src/fonts/subset-Poppins-Light-SemiBold.woff2",
	"/src/fonts/stylesheet.css",
	"/src/icons/192-192.jpeg",
	"/src/icons/512-512.png",
	"/src/js/components/btnMobile.js",
	"/src/js/components/modal.js",
	"/src/js/script.js",
	"/src/svg/drive-profile.svg",
	"/src/svg/home.svg",
	"/src/svg/list-ride.svg",
	"/src/svg/star.svg",
	"/src/svg/student-profile.svg",
];

//--------------------------------------------------------------------------------//

self.addEventListener("install", evt =>  {
  console.log("[App]Instalação");
  caches.keys().then(keyList => {
    return Promise.all(
      keyList.map(key => {
        if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
          console.log("[App] Removendo cache antigo", key);
          return caches.delete(key);
        }
      })
    );
  });

  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[App] Pré-caching dos arquivos " + cache);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

//--------------------------------------------------------------------------------//

self.addEventListener("activate", evt => {
  console.log("[App] Activate");
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("[App] Removendo cache antigo", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

//--------------------------------------------------------------------------------//
