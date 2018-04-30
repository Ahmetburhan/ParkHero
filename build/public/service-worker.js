"use strict";

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var precacheConfig = [["/index.html", "69f9fe4afc1417a253a9920d6db92d5c"], ["/static/css/main.c17080f1.css", "302476b8b379a677f648aa1e48918ebd"], ["/static/js/main.2f85adf2.js", "653eefaec93bd2c802fe64c9f4c76bd1"]],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function addDirectoryIndex(e, t) {
  var n = new URL(e);return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString();
},
    cleanResponse = function cleanResponse(t) {
  return t.redirected ? ("body" in t ? _promise2.default.resolve(t.body) : t.blob()).then(function (e) {
    return new Response(e, { headers: t.headers, status: t.status, statusText: t.statusText });
  }) : _promise2.default.resolve(t);
},
    createCacheKey = function createCacheKey(e, t, n, r) {
  var a = new URL(e);return r && a.pathname.match(r) || (a.search += (a.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(n)), a.toString();
},
    isPathWhitelisted = function isPathWhitelisted(e, t) {
  if (0 === e.length) return !0;var n = new URL(t).pathname;return e.some(function (e) {
    return n.match(e);
  });
},
    stripIgnoredUrlParameters = function stripIgnoredUrlParameters(e, n) {
  var t = new URL(e);return t.hash = "", t.search = t.search.slice(1).split("&").map(function (e) {
    return e.split("=");
  }).filter(function (t) {
    return n.every(function (e) {
      return !e.test(t[0]);
    });
  }).map(function (e) {
    return e.join("=");
  }).join("&"), t.toString();
},
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new _map2.default(precacheConfig.map(function (e) {
  var t = e[0],
      n = e[1],
      r = new URL(t, self.location),
      a = createCacheKey(r, hashParamName, n, /\.\w{8}\./);return [r.toString(), a];
}));function setOfCachedUrls(e) {
  return e.keys().then(function (e) {
    return e.map(function (e) {
      return e.url;
    });
  }).then(function (e) {
    return new _set2.default(e);
  });
}self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(cacheName).then(function (r) {
    return setOfCachedUrls(r).then(function (n) {
      return _promise2.default.all((0, _from2.default)(urlsToCacheKeys.values()).map(function (t) {
        if (!n.has(t)) {
          var e = new Request(t, { credentials: "same-origin" });return fetch(e).then(function (e) {
            if (!e.ok) throw new Error("Request for " + t + " returned a response with status " + e.status);return cleanResponse(e).then(function (e) {
              return r.put(t, e);
            });
          });
        }
      }));
    });
  }).then(function () {
    return self.skipWaiting();
  }));
}), self.addEventListener("activate", function (e) {
  var n = new _set2.default(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function (t) {
    return t.keys().then(function (e) {
      return _promise2.default.all(e.map(function (e) {
        if (!n.has(e.url)) return t.delete(e);
      }));
    });
  }).then(function () {
    return self.clients.claim();
  }));
}), self.addEventListener("fetch", function (t) {
  if ("GET" === t.request.method) {
    var e,
        n = stripIgnoredUrlParameters(t.request.url, ignoreUrlParametersMatching),
        r = "index.html";(e = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, r), e = urlsToCacheKeys.has(n));var a = "/index.html";!e && "navigate" === t.request.mode && isPathWhitelisted(["^(?!\\/__).*"], t.request.url) && (n = new URL(a, self.location).toString(), e = urlsToCacheKeys.has(n)), e && t.respondWith(caches.open(cacheName).then(function (e) {
      return e.match(urlsToCacheKeys.get(n)).then(function (e) {
        if (e) return e;throw Error("The cached response that was expected is missing.");
      });
    }).catch(function (e) {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O', t.request.url, e), fetch(t.request);
    }));
  }
});