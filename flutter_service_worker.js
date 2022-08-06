'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dd5fbaff15cd52cc7ee02ac00a505522",
".git/config": "3e9026621e5b8948c77b1765098da00e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "93a6643592c48bbbe03e7047dde683c6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de9d7564f33ff208ca8255806f3a9843",
".git/logs/refs/heads/main": "df71ac41d75239b65f823b562832f2df",
".git/logs/refs/remotes/origin/main": "b794c5e0f6a1ee0adcc7cb1ac890d493",
".git/objects/05/b46996d7e1221ca597b598ee75e54ff9a56a1a": "69b6629699e1182b63c1fcb1c40a577d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/2dd0dd5e92f47aa458db2837f106cfb45e5123": "f20553424fefa6f940877cb2c2221693",
".git/objects/11/53dc3c26cff791a3a4cbbd838923ab0288ed95": "e29cdf4a57d97e7b871f48f5aabf2ceb",
".git/objects/11/f6c4da51cc6164e2b159d3595ad4dd18f06d79": "f47db28de486303b8cfb3b00fa6a2cd1",
".git/objects/23/a8cea39674d97d0e40acee566bde92babeffce": "8422d1f183799dcbabc8902cdce40db9",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/06bbc346e9e1f085b1be1b70012fe9e6033699": "d2195b4cac4cec6d51ab648a3948b1c2",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/2c3c27139cc58eb9cd9784c9be5571262ff407": "80996f3f1b1b6c79157b1a27d7f8912c",
".git/objects/39/548c564a17b62ee8830c65820a0201d6b0e137": "95cd03b298bdd58ee8ba97b9f18f421f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/49/2dc7f88a3d120a82b0ecd878f3b04c00aef27f": "7967aa0ea44bfb31f84cdc25ec4b7dbd",
".git/objects/4d/b97a79c32a9e4839527e633193a7d1880f6f49": "02c45b3fbbc5b46f2a4b43b0a6d6dac3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/57/f30dfc2d75faecd41bd26318f9db20a17bd93c": "849f081ec3f02f437f4f7b778e2672ca",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/56c4b3542dec221c2142abe08cbd7959f7c216": "7cc30800a8d5cda2973af9041f063b9d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9e2555fed7c6dcee38207b2685602a42f336dc": "06833cdeba005aba0352765697e70c3f",
".git/objects/94/ce44f3f6b3b46ff18681fedc9a3a887aac9e96": "4bbb322c5e8ce6773e95891b50314126",
".git/objects/94/e8a8c2881bec9af19f58296f824dd037cb8b7e": "6e9076d4e4affc5e4b52a9f528ec9e0e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c595c9ba4c79c63a7f5bcd46a03459f103cc80": "fa6dcc320b5c4ff25a9d02f62a6275e4",
".git/objects/cb/10553c9c8c4cc5a976db10b4a52228837a6f79": "f4354a280171ddc807070dd147e14816",
".git/objects/cb/59239e3b4cc1e59535d64c7ab1daf29e0f046d": "7ade5e5269f1435376d6c758d7762dd5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/033d4e53b46d2c98f00f3fb7357062493a4d8a": "8edc79e1670e29e16c7032c9c7120810",
".git/objects/d0/5578097a33312b226c6bb8f47addbc095ad3c1": "dc93855b6ae0883258d3a45874251fbf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/1394d3b9f89aefcfcb2d395eb73612e810127e": "3b958bd9d31b37b6f0661856436ad594",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/92bb78f1f66aa105e4ffb4ee8368bbe1f441cd": "e9d9eb6af68e3038138f0b0a8c82e44d",
".git/refs/heads/main": "f44c9b396756c63faa765fa5c6d8a8f1",
".git/refs/remotes/origin/main": "f44c9b396756c63faa765fa5c6d8a8f1",
"assets/AssetManifest.json": "0d2c3225f3b161674da931b36739f278",
"assets/assets/logo.png": "7f73256b190bee23648f312051a2e572",
"assets/assets/lottie/lf30_lbLg6b.json": "20179fb2944c431d48846c0549e95379",
"assets/assets/png_icon/astronuna.png": "9283403506f8d15d1adb5dff46a083f5",
"assets/assets/png_icon/coverSAF.png": "1fdf2eb08874884cff5346e0cb47ff9f",
"assets/assets/png_icon/nunaconecta.png": "8dcbeb2f94a46fb54569407c45b6186f",
"assets/assets/svg_icon/astronuna.svg": "79251e5d5f874913fc88e6435bf6c059",
"assets/assets/svg_icon/nunaconecta.svg": "99d4296fd25b955c11e5c20020c7c00f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a2f8e55546ab967d52960eeee928b90b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5061cf3d59efee7b815a1913991a1758",
"/": "5061cf3d59efee7b815a1913991a1758",
"main.dart.js": "d9f83fc161da1ad8a395cb270f461a30",
"manifest.json": "5245894042d8541d376894262830b514",
"splash/splash.js": "f6ee10f0a11f96089a97623ece9a1367",
"splash/style.css": "24e259f37dc0723df93e88d8a8407c17",
"version.json": "1068b75418fc47d4288cc8538a5d0022"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
