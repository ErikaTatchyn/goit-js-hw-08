!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,f,a,u,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,u=setTimeout(w,t),d?g(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=f}function w(){var e=p();if(O(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-l);return s?b(n,f-(e-c)):n}(e))}function S(e){return u=void 0,v&&r?g(e):(r=i=void 0,a)}function T(){var e=p(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(s)return u=setTimeout(w,t),g(l)}return void 0===u&&(u=setTimeout(w,t)),a}return t=h(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(h(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},T.flush=function(){return void 0===u?a:S(p())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O={};!function(){try{var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;for(var t in console.dir(j),e)j.elements[t].value=e[t],O[t]=e[t]}catch(e){console.log(e)}}();var w=e(t)((function(e){var t=e.target,n=t.name,r=t.value;O[n]=r,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500);j.addEventListener("input",w),j.addEventListener("submit",(function(e){if(e.preventDefault(),!O.email||!O.message)return alert("Please enter all the fields"),!1;console.log(O),j.reset(),localStorage.removeItem("feedback-form-state"),O={}}))}();
//# sourceMappingURL=03-feedback.f3c0a95a.js.map