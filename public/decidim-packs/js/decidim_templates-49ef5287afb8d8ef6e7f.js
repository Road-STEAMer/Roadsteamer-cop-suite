!function(){var e={24941:function(e,t,n){var r={"./decidim/templates/decidim_templates.svg":5908};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=24941},5908:function(e,t,n){"use strict";e.exports=n.p+"media/images/decidim_templates-15e5583a7f2834cd644e.svg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/decidim-packs/",function(){"use strict";var e=function(e,t){if(e){var n=e.querySelector("input[type='hidden'"),r=e.querySelector("input[type='text']"),i=e.querySelector("datalist").children;r.addEventListener("input",(function(){!function(e){for(var r=0;r<i.length;r+=1)if(i[r].innerHTML===e){var o=i[r].dataset.value;return n.value=o,!t||t(o)}}(r.value)}))}};$((function(){var t=document.querySelector("#choose-template");if(t){e(t,(function(e){var n=t.dataset.previewurl;if(n){var r=new URLSearchParams({id:e});fetch("".concat(n,"?").concat(r.toString()),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){var t=document.createElement("script");t.type="text/javascript",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t)})).catch((function(e){console.error(e)}))}}))}})),n(24941)}()}();
//# sourceMappingURL=decidim_templates-49ef5287afb8d8ef6e7f.js.map