'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa876288711c4198cfcda790b58d7e95",
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
".git/index": "c1c473b98ed2fcee17f533401f0041a2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3772f5a469b917b75660558261c28c9e",
".git/logs/refs/heads/main": "fc36117eb07f7b79571ace5482cfe1fc",
".git/logs/refs/remotes/origin/main": "41558cf33e16414aee4e4ab93a7ba054",
".git/objects/05/04b75a9fd5ff31aa8631d770f74fe05349f9b0": "71e65ef46b1064703b5829f74248f52a",
".git/objects/05/b46996d7e1221ca597b598ee75e54ff9a56a1a": "69b6629699e1182b63c1fcb1c40a577d",
".git/objects/0b/e4e2ce82d878c77bc11c0c50ce6baf2d8a486b": "6a026692925f52e74d46e910fc538676",
".git/objects/0c/15138f7da84390469e04a9d0a095fc919be24d": "1af1258cf0d62f9379f825a3202e173b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/2dd0dd5e92f47aa458db2837f106cfb45e5123": "f20553424fefa6f940877cb2c2221693",
".git/objects/11/53dc3c26cff791a3a4cbbd838923ab0288ed95": "e29cdf4a57d97e7b871f48f5aabf2ceb",
".git/objects/11/f6c4da51cc6164e2b159d3595ad4dd18f06d79": "f47db28de486303b8cfb3b00fa6a2cd1",
".git/objects/13/c8a66ee92671e5675a988f68dc521e96d12a75": "2e9a3fa56b710bf5f7e72b51b10eb9a7",
".git/objects/21/49584c8334af5be897fdad02dabd3159700e5d": "c3c50565e3ba4928dc1ad40411100362",
".git/objects/23/a8cea39674d97d0e40acee566bde92babeffce": "8422d1f183799dcbabc8902cdce40db9",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/8189698c85d6c57baeff401a8d59a8c7714439": "036b11ceedc080302f09028dccb67818",
".git/objects/25/90f8740631507294cde5653846604605277905": "8808f5d6dd088982fb017456944d6e9b",
".git/objects/26/06bbc346e9e1f085b1be1b70012fe9e6033699": "d2195b4cac4cec6d51ab648a3948b1c2",
".git/objects/26/d55f89f0d5e79be5b4e6802dfd8c81399f1209": "6b7c2a4d6811caaf04a639032dfd4ebc",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/2c3c27139cc58eb9cd9784c9be5571262ff407": "80996f3f1b1b6c79157b1a27d7f8912c",
".git/objects/38/119526103484303c09c5335e5844f2a725fe95": "ac5357fa63bab59b85e16ace22eb7b2e",
".git/objects/39/548c564a17b62ee8830c65820a0201d6b0e137": "95cd03b298bdd58ee8ba97b9f18f421f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/a1bb0b7fe9e1ad85ac7cab2f51af75b316c943": "a497ec8341dabf5151e3181e28d1765f",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/49/2dc7f88a3d120a82b0ecd878f3b04c00aef27f": "7967aa0ea44bfb31f84cdc25ec4b7dbd",
".git/objects/49/802ed66329246d5ba9bdb68993f29c37714848": "17893b832ccdaf7f605c0ed5229aa2f7",
".git/objects/4d/b97a79c32a9e4839527e633193a7d1880f6f49": "02c45b3fbbc5b46f2a4b43b0a6d6dac3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/55/d4c5f1f8244e7a9c9a0cad894ea2a490566071": "7f8332e40ca2936e8286d342a1926d77",
".git/objects/57/f30dfc2d75faecd41bd26318f9db20a17bd93c": "849f081ec3f02f437f4f7b778e2672ca",
".git/objects/5d/6106775a3aa7c487c62fd792d0395fd5414cdd": "b5a7b4a75e905b8113a0059216bb4ee6",
".git/objects/61/b8d43a874abfac47c8e666eb3190d827788dd7": "229fcc14213047b12b2d3c6be61a3881",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/0fbd66af7a67df3b41a548ffcc688f348068cf": "46f3a83f76494d77ea45c9ea8ec76359",
".git/objects/79/56c4b3542dec221c2142abe08cbd7959f7c216": "7cc30800a8d5cda2973af9041f063b9d",
".git/objects/7b/88e2df6d28c1f64b01c3561d2e71d869e57fb9": "ed6cb55681743b1eaa38b4806b5d82d1",
".git/objects/7e/5b5aec6f3d3bf8d118f0bab331ea87ee0f8504": "a9b2426fe0706db81d61eee7e87cd78c",
".git/objects/7f/785530b896e09bb26b0794cf05e8ad2638db97": "202c6e97119b726d56ba24452c42c330",
".git/objects/7f/bca978f377f45948499b9d7c6f0693e4ac809a": "5c8b5dced6010538797b4a8baf134bff",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2b5d329a0829ded02283aea8151ff3a3fd0bd3": "49186786bce71e4951901b4b246d7bff",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/03e9f6f8609646f42ce78cf6435acc069fbffb": "4bb0e0edd631ce7042034158863b7cb3",
".git/objects/8d/9e2555fed7c6dcee38207b2685602a42f336dc": "06833cdeba005aba0352765697e70c3f",
".git/objects/90/92828095c9af82d7ec08e6a3ff589f3735cd16": "bcca9b3d3d38090a715a3174d08ea53c",
".git/objects/91/6f07ec1a49f29f169266a1063bab2cc941393f": "87b148a2e76be705ede171ae0154d2b3",
".git/objects/94/ce44f3f6b3b46ff18681fedc9a3a887aac9e96": "4bbb322c5e8ce6773e95891b50314126",
".git/objects/94/e8a8c2881bec9af19f58296f824dd037cb8b7e": "6e9076d4e4affc5e4b52a9f528ec9e0e",
".git/objects/99/e3a0bc551dfe75363d9d9a4fdce2d4e364683f": "b6f4f101cac895bdc3b8f41b533287a7",
".git/objects/9a/f17a8cb460dcd18f54042707e730cfddb284bc": "09aefa2478af2d75b5b946f79bf02ac4",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/7d96018aae93b495f7800a6b7bf9eef18ed738": "544ab9ef3a18318472dcbce84dc24143",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c595c9ba4c79c63a7f5bcd46a03459f103cc80": "fa6dcc320b5c4ff25a9d02f62a6275e4",
".git/objects/c6/5b089de77aa137b9cdfbe91157a64534c13452": "84d06e4234a68708dc295c014e54998e",
".git/objects/cb/10553c9c8c4cc5a976db10b4a52228837a6f79": "f4354a280171ddc807070dd147e14816",
".git/objects/cb/59239e3b4cc1e59535d64c7ab1daf29e0f046d": "7ade5e5269f1435376d6c758d7762dd5",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/033d4e53b46d2c98f00f3fb7357062493a4d8a": "8edc79e1670e29e16c7032c9c7120810",
".git/objects/d0/5578097a33312b226c6bb8f47addbc095ad3c1": "dc93855b6ae0883258d3a45874251fbf",
".git/objects/d1/3336396c6220f3fd1e0140ffc1249f049eae67": "ddb812d2a53a3dd2547e3833edacad66",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/59f5df6212f40cea9a01cbf0abf9ddb148428b": "451ae27441a98d80c96b3296d375fbe4",
".git/objects/dd/1394d3b9f89aefcfcb2d395eb73612e810127e": "3b958bd9d31b37b6f0661856436ad594",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/650a65884d791c7d289e00618c60bcb613fb03": "9eb849d790162e93ddb1a43126476a77",
".git/objects/e3/e07fd246eee0f4a0fad3c29ca2d64ae2f444f4": "c4e427c44b6069911f1ea8f550d3cd65",
".git/objects/e5/9d60b1bdee27bdd581d220a9c8e5be6ca5e1aa": "ba24bb0be3776f16d54431ee4cb3ca12",
".git/objects/e8/336f332809dbdeb5a53ac50d4d30f47a5cccaf": "d233068fbdeb1bc68127d202b2a3e96a",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/097d5df1f8b203b5d53708d401a7b82a2b8745": "ca2eb35c5bc4178474f8b08075569c2e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/92bb78f1f66aa105e4ffb4ee8368bbe1f441cd": "e9d9eb6af68e3038138f0b0a8c82e44d",
".git/objects/f5/488a65513b091608330d9aee309977dff31d3f": "4867dd6fa592bd6ec2dcb3bec66c2486",
".git/objects/f8/ce3adbd8f508aefecd22e3c39d08fa664958b3": "2c46b42d6d2a35ad56bd01e732458348",
".git/objects/fb/7656a883c04bb3071cdb616f5238d84e739f09": "419275965a20124bcab6c95c0e127528",
".git/objects/fc/8b80fbb384fead1eec4446ea7c592bd5e2ea5c": "08a0a2bf77644e40c20794c43f630984",
".git/refs/heads/main": "93d73cc5525d411049de0abca9f742b6",
".git/refs/remotes/origin/main": "93d73cc5525d411049de0abca9f742b6",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "bb02ca458b416da68c707427aecf0199",
"assets/assets/favicon.ico": "ffb21f803b7390545f6ee4250533e32c",
"assets/assets/logo.png": "b4a82d85eafc98884a7789737cffbb3f",
"assets/assets/lottie/96237-success.json": "e1bb1741df24cd6b3433f4081d09c2f9",
"assets/assets/lottie/lf30_lbLg6b.json": "20179fb2944c431d48846c0549e95379",
"assets/assets/png_icon/astronuna.png": "9283403506f8d15d1adb5dff46a083f5",
"assets/assets/png_icon/coverSAF.png": "1fdf2eb08874884cff5346e0cb47ff9f",
"assets/assets/png_icon/nunaconecta.png": "8dcbeb2f94a46fb54569407c45b6186f",
"assets/assets/svg_icon/astronuna.svg": "79251e5d5f874913fc88e6435bf6c059",
"assets/assets/svg_icon/nunaconecta.svg": "99d4296fd25b955c11e5c20020c7c00f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "67667cbb12f38f61e60bf81fba48a25a",
"assets/packages/pod_player/assets/forward_left.json": "f198394de9533a75cbd3bbfb223756ff",
"assets/packages/pod_player/assets/forward_right.json": "421233151632a84b7b935b4cdc9a967a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "6918460a8030af2956b6041699e5946b",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "10361a0b0b4b560070737e5e08e76a50",
"icons/Icon-512.png": "0c939977615a3663259a56f3066093d5",
"icons/Icon-maskable-192.png": "10361a0b0b4b560070737e5e08e76a50",
"icons/Icon-maskable-512.png": "0c939977615a3663259a56f3066093d5",
"index.html": "f05eeb07f5b6448262e1cce283582839",
"/": "f05eeb07f5b6448262e1cce283582839",
"main.dart.js": "538c4bd3d06b02a9204ad8b9a1e14e8d",
"manifest.json": "0470c1457d533013ef84802c049935ef",
"splash/splash.js": "f6ee10f0a11f96089a97623ece9a1367",
"splash/style.css": "24e259f37dc0723df93e88d8a8407c17",
"version.json": "30d66b74f278eced4918fadcebbfb6c7"
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
