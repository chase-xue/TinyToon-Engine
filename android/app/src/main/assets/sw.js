const CACHE_NAME = 'tinytoon-v1';
const ASSETS = [
  './',
  './index.html',
  './three.min.js',
  './manifest.webmanifest',
  './assets/buster_idle.png',
  './assets/buster_run_f1.png',
  './assets/buster_run_f2.png',
  './assets/buster_run_f3.png',
  './assets/buster_run_f4.png',
  './assets/buster_jump.png',
  './assets/buster_slide.png',
  './assets/buster_crouch.png',
  './assets/buster_skid.png',
  './assets/buster_hurt.png',
  './assets/buster_victory.png',
  './assets/buster_dizzy.png',
  './assets/plucky_idle.png',
  './assets/plucky_run1.png',
  './assets/plucky_run2.png',
  './assets/plucky_run3.png',
  './assets/plucky_run4.png',
  './assets/plucky_flap.png',
  './assets/plucky_glide.png',
  './assets/dizzy_idle.png',
  './assets/dizzy_run.png',
  './assets/dizzy_tornado.png',
  './assets/dizzy_stunned.png',
  './assets/furrball_idle.png',
  './assets/furrball_walk1.png',
  './assets/furrball_walk2.png',
  './assets/furrball_walk3.png',
  './assets/furrball_walk4.png',
  './assets/furrball_climb.png',
  './assets/furrball_jump.png',
  './assets/enemy_rat_walk1.png',
  './assets/enemy_rat_walk2.png',
  './assets/enemy_bull_walk1.png',
  './assets/enemy_bull_walk2.png',
  './assets/enemy_bee.png',
  './assets/game_screen.jpg',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
