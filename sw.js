self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  return self.clients.claim();
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("index.html")
  );
});
