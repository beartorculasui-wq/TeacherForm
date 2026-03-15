self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("TeacherStudentForm-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
