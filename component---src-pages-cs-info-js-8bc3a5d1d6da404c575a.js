(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4fqK":function(t,e,o){t.exports=o.p+"static/CS_info-5af4437183333ecd173bf54b4df5105c.png"},OFcM:function(t,e,o){t.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){t.exports=o("q1tI")},function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return b}));var n=o(0),r=o.n(n);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=d(t);if(e){var r=d(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return s(this,o)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function p(t){var e=0,o=0;return t.touches&&t.touches.length?(e=t.touches[0].pageX,o=t.touches[0].pageY):(e=t.pageX,o=t.pageY),{x:e,y:o}}function v(t){return t.condition?r.a.createElement(r.a.Fragment,null,t.children):null}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(i,t);var e,o,n=u(i);function i(){var t,e,o,l,c;a(this,i);for(var u=arguments.length,s=new Array(u),d=0;d<u;d++)s[d]=arguments[d];return m(f(c=n.call.apply(n,[this].concat(s))),"initX",0),m(f(c),"initY",0),m(f(c),"lastX",0),m(f(c),"lastY",0),m(f(c),"_cont",r.a.createRef()),m(f(c),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(t=null===(e=c.props)||void 0===e?void 0:e.startIndex)&&void 0!==t?t:0,multi:!!(null===(o=c.props)||void 0===o||null===(l=o.images)||void 0===l?void 0:l.length)}),m(f(c),"createTransform",(function(t,e,o,n){return"translate3d(".concat(t,"px,").concat(e,"px,0px) scale(").concat(o,") rotate(").concat(n,"deg)")})),m(f(c),"stopSideEffect",(function(t){return t.stopPropagation()})),m(f(c),"getCurrentImage",(function(t,e){var o,n,r,i,a;return t.multi?null!==(n=null!==(r=null===(i=e.images[t.current])||void 0===i?void 0:i.url)&&void 0!==r?r:null===(a=e.images)||void 0===a?void 0:a[t.current])&&void 0!==n?n:"":null!==(o=e.image)&&void 0!==o?o:""})),m(f(c),"getCurrentTitle",(function(t,e){var o,n,r,i;return t.multi?null!==(n=null===(r=e.images)||void 0===r||null===(i=r[t.current])||void 0===i?void 0:i.title)&&void 0!==n?n:"":null!==(o=e.title)&&void 0!==o?o:""})),m(f(c),"resetZoom",(function(){return c.setState({x:0,y:0,zoom:1})})),m(f(c),"shockZoom",(function(t){var e,o,n=c.props,r=n.zoomStep,i=void 0===r?.3:r,a=n.allowZoom,l=void 0===a||a,u=n.doubleClickZoom,s=void 0===u?4:u;if(!l||!s)return!1;if(c.stopSideEffect(t),c.state.zoom>1)return c.resetZoom();var f=(i<1?Math.ceil(s/i):i)*i,d=p(t),m=null===(e=c._cont.current)||void 0===e||null===(o=e.getBoundingClientRect)||void 0===o?void 0:o.call(e),v=m.x+m.width/2,b=m.y+m.height/2,y=-1*(d.x-v)*f,g=-1*(d.y-b)*f;c.setState({x:y,y:g,zoom:f})})),m(f(c),"navigateImage",(function(t,e){c.stopSideEffect(e);var o=0;switch(t){case"next":o=c.state.current+1;break;case"prev":o=c.state.current-1}o>=c.props.images.length?o=0:o<0&&(o=c.props.images.length-1),c.setState({current:o,x:0,y:0,zoom:1,rotate:0,loading:!0})})),m(f(c),"startMove",(function(t){if(c.state.zoom<=1)return!1;c.setState({moving:!0});var e=p(t);c.initX=e.x-c.lastX,c.initY=e.y-c.lastY})),m(f(c),"duringMove",(function(t){if(!c.state.moving)return!1;var e=p(t);c.lastX=e.x-c.initX,c.lastY=e.y-c.initY,c.setState({x:e.x-c.initX,y:e.y-c.initY})})),m(f(c),"endMove",(function(t){return c.setState({moving:!1})})),m(f(c),"applyZoom",(function(t){var e=c.props.zoomStep,o=void 0===e?.3:e;switch(t){case"in":c.setState({zoom:c.state.zoom+o});break;case"out":var n=c.state.zoom-o;if(n<1)break;1===n?c.setState({x:0,y:0,zoom:1}):c.setState({zoom:n});break;case"reset":c.resetZoom()}})),m(f(c),"applyRotate",(function(t){switch(t){case"cw":c.setState({rotate:c.state.rotate+90});break;case"acw":c.setState({rotate:c.state.rotate-90})}})),m(f(c),"reset",(function(t){c.stopSideEffect(t),c.setState({x:0,y:0,zoom:1,rotate:0})})),m(f(c),"exit",(function(t){if("function"==typeof c.props.onClose)return c.props.onClose(t);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),m(f(c),"shouldShowReset",(function(){return c.state.x||c.state.y||1!==c.state.zoom||0!==c.state.rotate})),m(f(c),"canvasClick",(function(t){var e=c.props.clickOutsideToExit;if((void 0===e||e)&&c.state.zoom<=1)return c.exit(t)})),m(f(c),"keyboardNavigation",(function(t){var e=c.props,o=e.allowZoom,n=void 0===o||o,r=e.allowReset,i=void 0===r||r,a=c.state,l=a.multi,u=a.x,s=a.y,f=a.zoom;switch(t.key){case"ArrowLeft":l&&1===f?c.navigateImage("prev",t):f>1&&c.setState({x:u-20});break;case"ArrowRight":l&&1===f?c.navigateImage("next",t):f>1&&c.setState({x:u+20});break;case"ArrowUp":f>1&&c.setState({y:s+20});break;case"ArrowDown":f>1&&c.setState({y:s-20});break;case"+":n&&c.applyZoom("in");break;case"-":n&&c.applyZoom("out");break;case"Escape":i&&c.shouldShowReset()?c.reset(t):c.exit(t)}})),c}return e=i,(o=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var t=this.props.keyboardInteraction;(void 0===t||t)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var t=this.props.keyboardInteraction;(void 0===t||t)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var t=this,e=this.getCurrentImage(this.state,this.props),o=this.getCurrentTitle(this.state,this.props);if(!e)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var n=this.props,i=n.allowZoom,a=void 0===i||i,l=n.allowRotate,c=void 0===l||l,u=n.buttonAlign,s=void 0===u?"flex-end":u,f=n.showTitle,d=void 0===f||f,m=n.allowReset,p=void 0===m||m,b=this.state,y=b.x,g=b.y,h=b.zoom,x=b.rotate,w=b.multi,k=b.loading,S=b.moving,E=p&&this.shouldShowReset();return r.a.createElement("div",{className:"lb-container"},r.a.createElement("div",{className:"lb-header",style:{justifyContent:s}},r.a.createElement(v,{condition:d&&o},r.a.createElement("div",{className:"lb-title",style:{display:"center"===s?"none":"flex",order:"flex-start"===s?"2":"unset"}},r.a.createElement("span",{title:o,style:{textAlign:"flex-start"===s?"right":"left"}},o))),r.a.createElement(v,{condition:"center"===s||E},r.a.createElement("div",{title:"Reset",style:{order:"flex-start"===s?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(E?"":"disabled"),onClick:this.reset})),r.a.createElement(v,{condition:w},r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(e){return t.navigateImage("prev",e)}}),r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(e){return t.navigateImage("next",e)}})),r.a.createElement(v,{condition:a},r.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return t.applyZoom("in")}}),r.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(h<=1?"disabled":""),onClick:function(){return t.applyZoom("out")}})),r.a.createElement(v,{condition:c},r.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return t.applyRotate("acw")}}),r.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return t.applyRotate("cw")}})),r.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===s?"-1":"unset"},onClick:function(e){return t.exit(e)}})),r.a.createElement("div",{className:"lb-canvas".concat(k?" lb-loading":""),ref:this._cont,onClick:function(e){return t.canvasClick(e)}},r.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(y,g,h,x),cursor:h>1?"grab":"unset",transition:S?"none":"all 0.1s"},onMouseDown:function(e){return t.startMove(e)},onTouchStart:function(e){return t.startMove(e)},onMouseMove:function(e){return t.duringMove(e)},onTouchMove:function(e){return t.duringMove(e)},onMouseUp:function(e){return t.endMove(e)},onMouseLeave:function(e){return t.endMove(e)},onTouchEnd:function(e){return t.endMove(e)},onClick:function(e){return t.stopSideEffect(e)},onDoubleClick:function(e){return t.shockZoom(e)},onLoad:function(e){return t.setState({loading:!1})},className:"lb-img".concat(k?" lb-loading":""),title:o,src:e,alt:o}),r.a.createElement("div",{className:"mobile-controls lb-show-mobile"},w?r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(e){return t.navigateImage("prev",e)}}):null,E?r.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,w?r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(e){return t.navigateImage("next",e)}}):null)))}}])&&l(e.prototype,o),i}(r.a.Component)}])},t1Os:function(t,e,o){},"u/0i":function(t,e,o){"use strict";o.r(e);var n=o("q1tI"),r=o.n(n),i=o("OFcM"),a=o.n(i),l=(o("t1Os"),o("4fqK")),c=o.n(l);e.default=function(){return r.a.createElement(a.a,{image:c.a,title:"Image Title",onClose:""})}}}]);
//# sourceMappingURL=component---src-pages-cs-info-js-8bc3a5d1d6da404c575a.js.map