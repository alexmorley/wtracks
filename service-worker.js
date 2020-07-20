importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {

  workbox.routing.registerRoute(
    new RegExp('/wtracks/.*'),
    // Use cache but update in the background.
    new workbox.strategies.NetworkFirst({
      cacheName: 'wtracks:local',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('.*'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'wtracks:ext',
    })
  );


} else {
  console.log("Workbox didn't load 😬");
}
