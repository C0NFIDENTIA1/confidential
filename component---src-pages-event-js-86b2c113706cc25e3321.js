(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11],{"19JU":function(e,t,n){"use strict";function a(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function l(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(n){void 0===e[n]?e[n]=t[n]:a(t[n])&&a(e[n])&&Object.keys(t[n]).length>0&&l(e[n],t[n])}))}n.d(t,"a",(function(){return c}));var r={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};l("undefined"!=typeof document?document:{},r);var c="undefined"!=typeof window?window:{};l(c,{document:r,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}})},"2EUq":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=(n("SdWJ"),n("g37v")),c=n("19JU");t.default=function(e){var t="/event/"===c.a.location.pathname,n=t||"event"===e.article,a=t||e.timeout,i=t||e.articleTimeout;return l.a.createElement(r.a,{onCloseArticle:e.onCloseArticle,article:e.article,articleTimeout:e.articleTimeout,setWrapperRef:e.setWrapperRef,timeout:e.timeout,isActive:n,isTimeout:a,isArticleTimeout:i,matchPathname:t},l.a.createElement("div",{className:"title"},l.a.createElement("h2",{className:"major"},"イベント"),l.a.createElement("span",{className:"image main"})),"タグ：#CONF_ミッション",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"公式ミッション"),l.a.createElement("p",null,"主催都合により開催は",l.a.createElement("span",null,"不定期"),"です。 各イベントにより形式は異なるかと思いますが、 参加を強制するイベントの予定はありません。"),l.a.createElement("br",null),l.a.createElement("h2",null,"参加者主催ミッション"),l.a.createElement("p",null,"参加者様が自由に事件や任務などを開催できます。",l.a.createElement("br",null),"形式は自由ですが、",l.a.createElement("span",null,"強制参加型は禁止"),"とさせていただきます。",l.a.createElement("br",null),"任務や事件は皆様のキャラクターから発生した事件/任務という形も可能ですが、 C機関/Ghostからの任務/依頼/事件という形でも投稿可能です。（司令の形式は自由に創作ください）",l.a.createElement("span",null,"事件や任務に必要なNPCも作成可能です。（イベントのみのキャラクターであればCSは不要です。）"),"また事件や依頼といった物の他に",l.a.createElement("span",null,"軽いイベントやフリーエンカウント的に使用していただいても構いません。"),"（例：お茶会、共同訓練、等）"),l.a.createElement("p",null,l.a.createElement("span",null,"・参加できる役職",l.a.createElement("br",null),"・イベント期間（無期限可）",l.a.createElement("br",null),"・イベント概要",l.a.createElement("br",null)),"を明記の上ハッシュタグ",l.a.createElement("span",null,"「#CONF_ミッション」"),"と一緒に投稿ください。 ミッション用の独自タグの作成も可能です。"),l.a.createElement("p",null,"NG",l.a.createElement("br",null),"・参加の強制",l.a.createElement("br",null),"・強制ロスト",l.a.createElement("br",null),"・各組織のパワーバランスに直接影響を与えるような物",l.a.createElement("br",null),"（C機関の壊滅、Ghostのボスを暗殺、等）"),l.a.createElement("br",null),l.a.createElement("h2",null,"参加について"),l.a.createElement("p",null,l.a.createElement("span",null,"各イベントの概要に沿って参加してください。")))}},SdWJ:function(e,t,n){},g37v:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a);t.a=function(e){var t=l.a.createElement("div",{className:"close",onClick:function(){e.onCloseArticle?e.onCloseArticle():window.location.href="/"}});return l.a.createElement("div",{id:e.matchPathname?"wrapper":""},l.a.createElement("div",{ref:e.setWrapperRef,id:"main",style:e.isTimeout?{display:"flex"}:{display:"none"}},l.a.createElement("article",{id:e.article,className:(e.isActive?"active":"")+" "+(e.isArticleTimeout?"timeout":""),style:{display:"none"}},e.children,t),l.a.createElement("div",{id:e.matchPathname?"bg":""})))}}}]);
//# sourceMappingURL=component---src-pages-event-js-86b2c113706cc25e3321.js.map