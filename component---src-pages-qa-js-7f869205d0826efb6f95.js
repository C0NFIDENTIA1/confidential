(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"19JU":function(e,t,n){"use strict";function i(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function o(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(n){void 0===e[n]?e[n]=t[n]:i(t[n])&&i(e[n])&&Object.keys(t[n]).length>0&&o(e[n],t[n])}))}n.d(t,"a",(function(){return c}));var r={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};o("undefined"!=typeof document?document:{},r);var c="undefined"!=typeof window?window:{};o(c,{document:r,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}})},SdWJ:function(e,t,n){},eGfa:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),r=(n("SdWJ"),n("g37v")),c=n("19JU");t.default=function(e){var t="/qa/"===c.a.location.pathname,n=t||"qa"===e.article,i=t||e.timeout,a=t||e.articleTimeout;return o.a.createElement(r.a,{onCloseArticle:e.onCloseArticle,article:e.article,articleTimeout:e.articleTimeout,setWrapperRef:e.setWrapperRef,timeout:e.timeout,isActive:n,isTimeout:i,isArticleTimeout:a,matchPathname:t},o.a.createElement("h2",{className:"major"},"Q&A"),o.a.createElement("a",{className:"twitter-timeline","data-width":"500","data-height":"700","data-theme":"dark",href:"https://twitter.com/C0NFIDENCIA1/likes?ref_src=twsrc%5Etfw"},"Tweets Liked by @C0NFIDENCIA1"))}},g37v:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i);t.a=function(e){var t=o.a.createElement("div",{className:"close",onClick:function(){e.onCloseArticle?e.onCloseArticle():window.location.href="/"}});return o.a.createElement("div",{id:e.matchPathname?"wrapper":""},o.a.createElement("div",{ref:e.setWrapperRef,id:"main",style:e.isTimeout?{display:"flex"}:{display:"none"}},o.a.createElement("article",{id:e.article,className:(e.isActive?"active":"")+" "+(e.isArticleTimeout?"timeout":""),style:{display:"none"}},e.children,t),o.a.createElement("div",{id:e.matchPathname?"bg":""})))}}}]);
//# sourceMappingURL=component---src-pages-qa-js-7f869205d0826efb6f95.js.map