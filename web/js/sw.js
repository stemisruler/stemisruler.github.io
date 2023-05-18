// Define the files to cache
const CACHE_NAME = "my-web-app-cache";
const urlsToCache = [
  "index.html",
  "js/quotes.js",
  "css/index.css",
  "css/header-footer.css",
  "images/a_be.png",
  "images/a_re.png",
  "images/a_happy.png",
];

// Open the cache and add the files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});
