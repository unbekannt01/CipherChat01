// CipherChat service worker
// Strategy: network-first for the app shell, falling back to cache when
// offline. We deliberately do NOT cache the socket.io/websocket traffic -
// only same-origin GET requests for the shell (HTML/JSON/icons), so chat
// messages always stay live and are never served stale from cache.

const CACHE_NAME = "cipherchat-shell-v1";
const APP_SHELL = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .catch((err) => console.error("Shell cache failed:", err))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((keys) =>
                Promise.all(
                    keys
                        .filter((key) => key !== CACHE_NAME)
                        .map((key) => caches.delete(key))
                )
            )
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const req = event.request;

    // Only handle same-origin GET requests - never intercept the
    // socket.io/websocket connection or cross-origin avatar requests.
    if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        fetch(req)
            .then((response) => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
                return response;
            })
            .catch(() => caches.match(req))
    );
});