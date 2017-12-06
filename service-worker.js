"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/homepage/index.html","12f11280da642ff0951fc26874ec7a11"],["/homepage/static/css/main.708a03fa.css","6fe9b6bd4e5e50392ccd468861d01630"],["/homepage/static/js/main.30cb05b9.js","9de5dd3d83dbd6c98ea56722c0fdb40a"],["/homepage/static/media/Hat.b694d9f8.wav","b694d9f8d6bc3372fcc59df42ae69240"],["/homepage/static/media/Lazer.254c4f90.wav","254c4f9010efeaa0d9a2cf31d2d8cd5f"],["/homepage/static/media/clap.82c13998.wav","82c139982e846c604d14298ba4459ecf"],["/homepage/static/media/hihat.fbf61e86.wav","fbf61e8664581f926ae382f88233f1b3"],["/homepage/static/media/kick1.b80625ae.wav","b80625ae6a012c02b97959c96a6bfffc"],["/homepage/static/media/kick2.d27cc622.wav","d27cc622da148a3abf9477cd8763e3e6"],["/homepage/static/media/paul.5ee6a2ad.png","5ee6a2ad0f30cc3d7974fa39de3e6cb8"],["/homepage/static/media/plateagain.ab6aeead.png","ab6aeeadd35f32bddcdfaad13a1784fd"],["/homepage/static/media/ride.1e1619c9.wav","1e1619c967c78833fc076e99bdc105ae"],["/homepage/static/media/snare.2cbd9994.wav","2cbd99946fb187fa1c97d547c01eb3d2"],["/homepage/static/media/tom.b44b085d.wav","b44b085def3813b6028de2e0f128814b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/homepage/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});