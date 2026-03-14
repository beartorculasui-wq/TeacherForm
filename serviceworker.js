self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("Teacher Student Form-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});