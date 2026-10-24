// PIE Tracker Service Worker
// Version: v1.0.0
// Handles offline caching and detects new PIE Tracker versions.
// All apps share one GitHub Pages origin (and one Cache Storage),
// so every cache this app owns starts with this prefix.
const CACHE_PREFIX = "pie-cache-";
const CACHE_NAME = CACHE_PREFIX + "v1.0.1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

// ============================================================
// INSTALL
// ============================================================
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS);
      })
      // Activate the new service worker immediately.
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// ============================================================
// ACTIVATE
// ============================================================
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Only delete OLD caches that belong to PIE.
              // Never touch caches of the other apps on this origin.
              return cacheName.startsWith(CACHE_PREFIX) &&
                     cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      })
      // Take control of currently open PIE pages.
      .then(() => {
        return self.clients.claim();
      })
  );
});

// ============================================================
// UPDATE BUTTON SUPPORT
// ============================================================
//
// The "Update" button inside PIE sends this message to the
// waiting service worker.
//
// ============================================================
self.addEventListener("message", (event) => {
  if (
    event.data &&
    event.data.type === "SKIP_WAITING"
  ) {
    self.skipWaiting();
  }
});

// ============================================================
// HELPERS
// ============================================================
// Look up a request ONLY in PIE's own cache.
// (caches.match() would search every cache on the shared origin.)
function ownCacheMatch(request) {
  return caches.open(CACHE_NAME)
    .then((cache) => {
      return cache.match(request, { ignoreSearch: true });
    });
}
// Always resolve with a real Response (never undefined), so the
// page can never go blank when the network fails.
function offlineFallback(cachedResponse, isShell) {
  if (cachedResponse) {
    return cachedResponse;
  }
  const failure = () => {
    return new Response(
      "Offline and nothing cached yet. Please reload.",
      {
        status: 503,
        headers: { "Content-Type": "text/plain" }
      }
    );
  };
  if (!isShell) {
    return failure();
  }
  return ownCacheMatch("./index.html")
    .then((shell) => {
      return shell || failure();
    });
}

// ============================================================
// FETCH
// ============================================================
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // ----------------------------------------------------------
  // Do NOT intercept Google services.
  // Google Drive, Google Sheets and Google Sign-In must always
  // communicate directly with Google's servers.
  // ----------------------------------------------------------
  if (
    url.hostname.endsWith("googleapis.com") ||
    url.hostname.endsWith("google.com")
  ) {
    return;
  }

  // Only handle GET requests.
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    ownCacheMatch(event.request)
      .then((cachedResponse) => {

        // ----------------------------------------------------
        // PIE APP SHELL
        // ----------------------------------------------------
        //
        // For index.html and the PIE root:
        //
        //     Network first
        //          ↓
        //     Update cache
        //          ↓
        //     If offline → use cached version
        //
        // This allows PIE to detect newly published versions.
        // ----------------------------------------------------
        const isAppShell =
          url.pathname.endsWith("/index.html") ||
          url.pathname.endsWith("/") ||
          url.pathname.endsWith("/pie");

        if (isAppShell) {
          return fetch(event.request)
            .then((networkResponse) => {
              if (
                networkResponse &&
                networkResponse.status === 200
              ) {
                const responseClone =
                  networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(
                      event.request,
                      responseClone
                    );
                  });
              }
              return networkResponse;
            })
            // If there is no network, use cached PIE.
            .catch(() => {
              return offlineFallback(cachedResponse, true);
            });
        }

        // ----------------------------------------------------
        // OTHER PIE RESOURCES
        // ----------------------------------------------------
        //
        // Cache first for other resources.
        // If they aren't cached, get them from the network.
        //
        // ----------------------------------------------------
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {
            if (
              networkResponse &&
              networkResponse.status === 200
            ) {
              const responseClone =
                networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(
                    event.request,
                    responseClone
                  );
                });
            }
            return networkResponse;
          })
          .catch(() => {
            return offlineFallback(null, false);
          });
      })
  );
});
