// Service worker minimalista: garante instalabilidade do PWA sem guardar
// conteúdo em cache por enquanto (evita ficar preso em versões antigas
// enquanto o app ainda está em fase de ajustes frequentes).
const CACHE_NAME = "synapse-v3";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
