if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>c(e,t),d={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/141-db6526ae7d7bb3fd.js",revision:"db6526ae7d7bb3fd"},{url:"/_next/static/chunks/215-ad26681495a616cd.js",revision:"ad26681495a616cd"},{url:"/_next/static/chunks/358-51d29b154897846a.js",revision:"51d29b154897846a"},{url:"/_next/static/chunks/646-11726bcfe3276edb.js",revision:"11726bcfe3276edb"},{url:"/_next/static/chunks/766.59d6938897d2a104.js",revision:"59d6938897d2a104"},{url:"/_next/static/chunks/883-21a0cd89c28f2c08.js",revision:"21a0cd89c28f2c08"},{url:"/_next/static/chunks/894.b48ce01ad883903c.js",revision:"b48ce01ad883903c"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-829428131c968e87.js",revision:"829428131c968e87"},{url:"/_next/static/chunks/pages/_app-54e38caca34ff8c1.js",revision:"54e38caca34ff8c1"},{url:"/_next/static/chunks/pages/_error-87dc0ee945de2654.js",revision:"87dc0ee945de2654"},{url:"/_next/static/chunks/pages/cart-a6a9916a9fdf06d8.js",revision:"a6a9916a9fdf06d8"},{url:"/_next/static/chunks/pages/categories-89bf809c01bc7207.js",revision:"89bf809c01bc7207"},{url:"/_next/static/chunks/pages/checkout-d4c18bab1c304536.js",revision:"d4c18bab1c304536"},{url:"/_next/static/chunks/pages/index-b78932bb0c9eb520.js",revision:"b78932bb0c9eb520"},{url:"/_next/static/chunks/pages/login-386c1bcd09092eed.js",revision:"386c1bcd09092eed"},{url:"/_next/static/chunks/pages/product-description-4014265e13233482.js",revision:"4014265e13233482"},{url:"/_next/static/chunks/pages/products-ddddb9c402d769ab.js",revision:"ddddb9c402d769ab"},{url:"/_next/static/chunks/pages/products/%5BproductSlug%5D-4e1cad223f1626ed.js",revision:"4e1cad223f1626ed"},{url:"/_next/static/chunks/pages/user-order-cf4ec8cf49d01252.js",revision:"cf4ec8cf49d01252"},{url:"/_next/static/chunks/pages/user-payment-50c325c5bf4e3585.js",revision:"50c325c5bf4e3585"},{url:"/_next/static/chunks/pages/user-profile-59986030da77be38.js",revision:"59986030da77be38"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2b3111847fbd7e0a.js",revision:"2b3111847fbd7e0a"},{url:"/_next/static/css/66fb7d72b44a8e1e.css",revision:"66fb7d72b44a8e1e"},{url:"/_next/static/fTjMzaQ8JYx4iZfDc5ArK/_buildManifest.js",revision:"ffdc886787567e9773762dcd168d3ee5"},{url:"/_next/static/fTjMzaQ8JYx4iZfDc5ArK/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/fTjMzaQ8JYx4iZfDc5ArK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/Image.b3144631.png",revision:"293a389b01e35ad91273b005d5225fef"},{url:"/_next/static/media/corn.1c4a55af.png",revision:"29c27acd3717f7f4a986727ab897dc68"},{url:"/_next/static/media/farmer.e2a5894e.png",revision:"48dec048f0eccce86b4f7ef8693e43e1"},{url:"/bg.png",revision:"62750c6c2d6923939b72ed5f1c737d65"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/japtini.png",revision:"80685c206a7a52b5ce19aa61c1e988f3"},{url:"/manifest.json",revision:"71cada090274c4e1b4218be989338b3f"},{url:"/sound.mp3",revision:"82c6107107575b3e420cebee191e1a47"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));