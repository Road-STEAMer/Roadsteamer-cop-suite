/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_admin_decidim_awesome_custom_fields.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_admin_decidim_awesome_custom_fields.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_proposals_custom_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/proposals/custom_fields */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/proposals/custom_fields.js");
/* harmony import */ var src_decidim_decidim_awesome_admin_custom_fields_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/decidim_awesome/admin/custom_fields_builder */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/admin/custom_fields_builder.js");



/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/admin/custom_fields_builder.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/admin/custom_fields_builder.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_forms_rich_text_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/forms/rich_text_plugin */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/rich_text_plugin.js");
__webpack_require__(/*! formBuilder/dist/form-builder.min.js */ "./node_modules/formBuilder/dist/form-builder.min.js");

window.CustomFieldsBuilders = window.CustomFieldsBuilders || [];
$(function () {
  $(".awesome-edit-config .proposal_custom_fields_editor").each(function (_idx, el) {
    var key = $(el).closest(".proposal_custom_fields_container").data("key");
    // DOCS: https://formbuilder.online/docs
    window.CustomFieldsBuilders.push({
      el: el,
      key: key,
      config: {
        i18n: {
          locale: "en-US",
          location: "https://cdn.jsdelivr.net/npm/formbuilder-languages@1.1.0/"
        },
        formData: $("input[name=\"config[proposal_custom_fields][".concat(key, "]\"]")).val(),
        disableFields: ["button", "file"],
        disabledActionButtons: ["save", "data", "clear"],
        disabledAttrs: ["access", "inline", "className"],
        controlOrder: ["text", "textarea", "number", "date", "checkbox-group", "radio-group", "select", "autocomplete", "header", "paragraph"],
        disabledSubtypes: {
          // default color as it generate hashtags in decidim (TODO: fix hashtag generator with this)
          text: ["color"],
          // disable default wysiwyg editors as they present problems
          textarea: ["tinymce", "quill"]
        }
      },
      instance: null
    });
  });
  $(document).on("formBuilder.create", function (_event, idx, list) {
    if (!list[idx]) {
      return;
    }
    $(list[idx].el).formBuilder(list[idx].config).promise.then(function (res) {
      list[idx].instance = res;
      // Attach to DOM
      list[idx].el.FormBuilder = res;
      // remove spinner
      $(list[idx].el).find(".loading-spinner").remove();
      // for external use
      $(document).trigger("formBuilder.created", [list[idx]]);
      if (idx < list.length) {
        $(document).trigger("formBuilder.create", [idx + 1, list]);
      }
    });
  });
  if (window.CustomFieldsBuilders.length) {
    $(document).trigger("formBuilder.create", [0, window.CustomFieldsBuilders]);
  }
  $("form.awesome-edit-config").on("submit", function () {
    window.CustomFieldsBuilders.forEach(function (builder) {
      $("input[name=\"config[proposal_custom_fields][".concat(builder.key, "]\"]")).val(builder.instance.actions.getData("json"));
    });
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"decidim_admin_decidim_awesome_custom_fields": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdecidim_app"] = self["webpackChunkdecidim_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_quill_formats_code_js","vendors-node_modules_europa_dist_europa_js-node_modules_inline-attachment_src_codemirror-4_in-e42ed9","vendors-node_modules_formBuilder_dist_form-render_min_js","vendors-node_modules_formBuilder_dist_form-builder_min_js","app_packs_src_decidim_editor_clipboard_override_js-app_packs_src_decidim_editor_linebreak_mod-c679aa","app_packs_src_decidim_decidim_awesome_editors_editor_js","_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-decidim_awesome-0_10_2_app_packs_src_d-6c7de6"], function() { return __webpack_require__("../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_admin_decidim_awesome_custom_fields.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=decidim_admin_decidim_awesome_custom_fields.js.map