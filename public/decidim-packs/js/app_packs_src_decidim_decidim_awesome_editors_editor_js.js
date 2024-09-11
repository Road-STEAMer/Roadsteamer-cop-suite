"use strict";
(self["webpackChunkdecidim_app"] = self["webpackChunkdecidim_app"] || []).push([["app_packs_src_decidim_decidim_awesome_editors_editor_js"],{

/***/ "./app/packs/src/decidim/decidim_awesome/editors/editor.js":
/*!*****************************************************************!*\
  !*** ./app/packs/src/decidim/decidim_awesome/editors/editor.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMarkdownEditor: function() { return /* binding */ createMarkdownEditor; },
/* harmony export */   createQuillEditor: function() { return /* binding */ createQuillEditor; },
/* harmony export */   destroyQuillEditor: function() { return /* binding */ destroyQuillEditor; }
/* harmony export */ });
/* harmony import */ var src_decidim_editor_linebreak_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/editor/linebreak_module */ "./app/packs/src/decidim/editor/linebreak_module.js");
/* harmony import */ var inscrybmde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inscrybmde */ "./node_modules/inscrybmde/src/js/inscrybmde.js");
/* harmony import */ var inscrybmde__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inscrybmde__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var europa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! europa */ "./node_modules/europa/dist/europa.js");
/* harmony import */ var europa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(europa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_attachment_src_inline_attachment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-attachment/src/inline-attachment */ "./node_modules/inline-attachment/src/inline-attachment.js");
/* harmony import */ var inline_attachment_src_inline_attachment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_attachment_src_inline_attachment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_attachment_src_codemirror_4_inline_attachment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-attachment/src/codemirror-4.inline-attachment */ "./node_modules/inline-attachment/src/codemirror-4.inline-attachment.js");
/* harmony import */ var inline_attachment_src_codemirror_4_inline_attachment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_attachment_src_codemirror_4_inline_attachment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_attachment_src_jquery_inline_attachment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-attachment/src/jquery.inline-attachment */ "./node_modules/inline-attachment/src/jquery.inline-attachment.js");
/* harmony import */ var inline_attachment_src_jquery_inline_attachment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_attachment_src_jquery_inline_attachment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/es/index.js");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/styles/github.css */ "./node_modules/highlight.js/styles/github.css");
/* harmony import */ var src_decidim_editor_clipboard_override__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/decidim/editor/clipboard_override */ "./app/packs/src/decidim/editor/clipboard_override.js");
/* harmony import */ var src_decidim_vendor_image_resize_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/decidim/vendor/image-resize.min */ "./app/packs/src/decidim/vendor/image-resize.min.js");
/* harmony import */ var src_decidim_vendor_image_resize_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_image_resize_min__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_decidim_vendor_image_upload_min__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/decidim/vendor/image-upload.min */ "./app/packs/src/decidim/vendor/image-upload.min.js");
/* harmony import */ var src_decidim_vendor_image_upload_min__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_image_upload_min__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.esm.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
/* eslint-disable require-jsdoc, func-style */













var DecidimAwesome = window.DecidimAwesome || {};
var quillFormats = ["bold", "italic", "link", "underline", "header", "list", "video", "image", "alt", "break", "width", "style", "code", "blockquote", "indent"];

// A tricky way to destroy the quill editor
function destroyQuillEditor(container) {
  if (container) {
    var content = $(container).find(".ql-editor").html();
    $(container).html(content);
    $(container).siblings(".ql-toolbar").remove();
    $(container).find("*[class*='ql-']").removeClass(function (index, className) {
      return (className.match(/(^|\s)ql-\S+/g) || []).join(" ");
    });
    $(container).removeClass(function (index, className) {
      return (className.match(/(^|\s)ql-\S+/g) || []).join(" ");
    });
    if ($(container).next().is("p.help-text")) {
      $(container).next().remove();
    }
  } else {
    console.error("editor [".concat(container, "] not exists"));
  }
}
function createQuillEditor(container) {
  var toolbar = $(container).data("toolbar");
  var disabled = $(container).data("disabled");
  var allowedEmptyContentSelector = "iframe";
  var quillToolbar = [["bold", "italic", "underline", "linebreak"], [{
    list: "ordered"
  }, {
    list: "bullet"
  }], ["link", "clean"], ["code", "blockquote"], [{
    "indent": "-1"
  }, {
    "indent": "+1"
  }], [{
    'savedDataset': "openModal"
  }]];
  if (toolbar === "full") {
    quillToolbar = [[{
      header: [2, 3, 4, 5, 6, false]
    }]].concat(_toConsumableArray(quillToolbar), [["video"]]);
  } else if (toolbar === "basic") {
    quillToolbar = [].concat(_toConsumableArray(quillToolbar), [["video"]]);
  }
  var modalData = [];
  var hasFetched = false; // Flag to check if data has been fetched

  // Function to fetch data
  function fetchData() {
    return new Promise(function (resolve, reject) {
      if (!hasFetched) {
        // Check if fetch hasn't been performed yet
        fetch('/idra_modal_editor', {
          method: 'GET'
        }).then(function (response) {
          if (response.ok) {
            return response.text(); // Assuming the response is HTML
          } else {
            throw new Error('Failed to fetch the updated content');
          }
        }).then(function (data) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(data, 'text/html');
          var datasetElements = doc.querySelectorAll('#datasets-list a');
          var urlElements = doc.querySelectorAll('#datasets-list #url');
          modalData = Array.from(datasetElements).map(function (dataset, index) {
            return {
              title: dataset.textContent,
              url: urlElements[index].textContent
            };
          });
          hasFetched = true; // Set the flag to indicate that fetch has been performed
          resolve();
        })["catch"](function (error) {
          console.error('Error updating partial view:', error);
          reject(error);
        });
      } else {
        resolve();
      }
    });
  }
  function openModal() {
    return _openModal.apply(this, arguments);
  } // Updated copyAndPasteText function
  function _openModal() {
    _openModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var filterResults, modalContainer, modal, modalContent, searchBar, linksDiv, titleElement, listItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Function to filter results based on the search input
            filterResults = function filterResults() {
              var query = searchBar.value.toLowerCase();
              listItems.forEach(function (item) {
                var title = item.querySelector('a').textContent.toLowerCase();
                if (title.includes(query)) {
                  item.style.display = 'flex'; // Show item
                } else {
                  item.style.display = 'none'; // Hide item
                }
              });
            }; // Append elements to modal
            _context.next = 4;
            return fetchData();
          case 4:
            // Ensure data is fetched
            // Create and style the modal container
            modalContainer = document.createElement('div');
            modalContainer.style.position = 'fixed';
            modalContainer.style.top = '0';
            modalContainer.style.left = '0';
            modalContainer.style.width = '100%';
            modalContainer.style.height = '100%';
            modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            modalContainer.style.display = 'flex';
            modalContainer.style.justifyContent = 'center';
            modalContainer.style.alignItems = 'center';
            modalContainer.style.zIndex = '1000';

            // Create and style the modal element with fixed dimensions
            modal = document.createElement('div');
            modal.style.backgroundColor = '#fff';
            modal.style.borderRadius = '8px';
            modal.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
            modal.style.width = '800px'; // Fixed width
            modal.style.minHeight = '80vh'; // Minimum height
            modal.style.maxHeight = '80vh'; // Maximum height
            modal.style.position = 'relative';
            modal.style.overflowY = 'auto'; // Prevent scrolling on the modal itself
            modal.style.padding = '1em'; // Add padding for aesthetic
            modal.style.boxSizing = 'border-box'; // Include padding in the height calculation

            // Create and style the modal content
            modalContent = document.createElement('div');
            modalContent.id = 'modalContent';
            modalContent.style.overflow = 'initial';
            modalContent.style.maxHeight = '50vh';

            // Create and style the search bar
            searchBar = document.createElement('input');
            searchBar.type = 'text';
            searchBar.placeholder = 'Search...';
            searchBar.style.width = '100%';
            searchBar.style.padding = '10px';
            searchBar.style.boxSizing = 'border-box';
            searchBar.style.border = '1px solid #ccc';
            searchBar.style.borderRadius = '5px';
            searchBar.style.marginBottom = '10px';
            searchBar.addEventListener('input', filterResults);

            // Create and style the links container
            linksDiv = document.createElement('div');
            linksDiv.id = 'linksContainer';
            linksDiv.style.display = 'flex';
            linksDiv.style.flexDirection = 'column';
            linksDiv.style.gap = '10px'; // Adjust spacing between items

            // Create and style the modal title
            titleElement = document.createElement('h1');
            titleElement.textContent = "Saved Datasets";
            titleElement.style.textAlign = 'center';
            modal.appendChild(titleElement);

            // Store the original list items
            listItems = modalData.map(function (element) {
              var listItem = document.createElement('div');
              listItem.classList.add('list-item');
              listItem.style.display = 'flex';
              listItem.style.justifyContent = 'space-between';
              listItem.style.alignItems = 'center';
              var link = document.createElement('a');
              link.href = element.url;
              link.textContent = element.title;
              link.target = "_blank"; // Open in a new tab/window

              var disabled = false;
              var copyButton = document.createElement('button');
              copyButton.textContent = 'Add';
              copyButton.style.marginLeft = '10px';
              copyButton.style.borderRadius = '5px';
              copyButton.style.padding = '5px 10px';
              copyButton.style.color = 'white';
              copyButton.style.cursor = 'pointer'; // Set cursor to pointer
              copyButton.style.backgroundColor = '#2F4EA1'; // Set cursor to pointer

              // Handle button click to copy and paste text
              copyButton.addEventListener('click', function () {
                copyButton.textContent = 'Done';
                copyButton.disabled = true;
                copyButton.style.color = 'grey'; // Cambia il colore di sfondo
                copyButton.style.cursor = "not-allowed"; // Cambia il cursore
                copyButton.style.opacity = "0.6";
                copyButton.style.border = '1px solid grey';
                copyButton.style.backgroundColor = 'transparent';
                disabled = true;

                // Call the copyAndPasteText function
                copyAndPasteText(element.title, element.url);
              });
              listItem.appendChild(link);
              listItem.appendChild(copyButton);
              linksDiv.appendChild(listItem);
              return listItem;
            });
            modalContent.appendChild(searchBar);
            modalContent.appendChild(linksDiv);
            modal.appendChild(modalContent);
            modalContainer.appendChild(modal);
            document.body.appendChild(modalContainer);

            // Open the modal
            modalContainer.style.display = 'flex'; // Ensure centering and visibility

            // Close modal when clicking outside the modal
            window.addEventListener('click', function (event) {
              if (event.target === modalContainer) {
                modalContainer.style.display = 'none';
              }
            });
            _context.next = 62;
            break;
          case 59:
            _context.prev = 59;
            _context.t0 = _context["catch"](0);
            console.error('Failed to open modal:', _context.t0);
          case 62:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 59]]);
    }));
    return _openModal.apply(this, arguments);
  }
  function copyAndPasteText(title, url) {
    var range = quill.getSelection();

    // Assicurati che range non sia null (ossia c'è una selezione)
    if (range) {
      var linkFormat = {
        link: url,
        target: '_blank'
      };

      // Inserisci il titolo con il link
      quill.insertText(range.index, title, linkFormat);

      // Imposta la selezione alla fine del titolo
      quill.setSelection(range.index + title.length);

      // Inserisci un ritorno a capo (\n)
      quill.insertText(range.index + title.length, '\n');
    }
  }
  var modules = {
    linebreak: {},
    toolbar: {
      container: quillToolbar,
      handlers: {
        "linebreak": src_decidim_editor_linebreak_module__WEBPACK_IMPORTED_MODULE_0__["default"],
        "savedDataset": openModal
      }
    }
  };
  var $input = $(container).siblings('input[type="hidden"]');
  container.innerHTML = $input.val() || "";
  var token = $('meta[name="csrf-token"]').attr("content");
  if ($(container).data("editorImages")) {
    modules.imageResize = {
      modules: ["Resize", "DisplaySize"]
    };
    modules.imageUpload = {
      url: $(container).data("uploadImagesPath"),
      method: "POST",
      name: "image",
      headers: {
        "X-CSRF-Token": token
      },
      callbackOK: function callbackOK(serverResponse, next) {
        $("div.ql-toolbar").last().removeClass("editor-loading");
        next(serverResponse.url);
      },
      callbackKO: function callbackKO(serverError) {
        $("div.ql-toolbar").last().removeClass("editor-loading");
        console.log("Image upload error: ".concat(serverError.message));
      },
      checkBeforeSend: function checkBeforeSend(file, next) {
        $("div.ql-toolbar").last().addClass("editor-loading");
        next(file);
      }
    };
  }
  var quill = new Quill(container, {
    modules: modules,
    formats: quillFormats,
    theme: "snow"
  });
  if (disabled) {
    quill.disable();
  }
  quill.on("text-change", function () {
    var text = quill.getText();
    var event = new CustomEvent("quill-position", {
      detail: quill.getSelection()
    });
    container.dispatchEvent(event);
    if ((text === "\n" || text === "\n\n") && quill.root.querySelectorAll(allowedEmptyContentSelector).length === 0) {
      $input.val("");
    } else {
      var emptyParagraph = "<p><br></p>";
      var cleanHTML = quill.root.innerHTML.replace(new RegExp("^".concat(emptyParagraph, "|").concat(emptyParagraph, "$"), "g"), "");
      $input.val(cleanHTML);
    }
  });
  quill.emitter.emit("editor-ready");
  if ($(container).data("editorImages")) {
    var text = $(container).data("dragAndDropHelpText");
    $(container).after("<p class=\"help-text\" style=\"margin-top:-1.5rem;\">".concat(text, "</p>"));
  }
  return quill;
}
function createMarkdownEditor(container) {
  var text = DecidimAwesome.texts.drag_and_drop_image;
  var token = $('meta[name="csrf-token"]').attr("content");
  var $input = $(container).siblings('input[type="hidden"]');
  var $faker = $('<textarea name="faker-inscrybmde"/>');
  var $form = $(container).closest("form");
  var europa = new (europa__WEBPACK_IMPORTED_MODULE_2___default())();
  $faker.val(europa.convert($input.val()));
  $faker.insertBefore($(container));
  $(container).hide();
  var inscrybmde = new (inscrybmde__WEBPACK_IMPORTED_MODULE_1___default())({
    element: $faker[0],
    spellChecker: false,
    renderingConfig: {
      codeSyntaxHighlighting: true,
      hljs: highlight_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    }
  });
  $faker[0].InscrybMDE = inscrybmde;

  // Allow image upload
  if (DecidimAwesome.allow_images_in_markdown_editor) {
    $(inscrybmde.gui.statusbar).prepend("<span class=\"help-text\" style=\"float:left;margin:0;text-align:left;\">".concat(text, "</span>"));
    window.inlineAttachment.editors.codemirror4.attach(inscrybmde.codemirror, {
      uploadUrl: DecidimAwesome.editor_uploader_path,
      uploadFieldName: "image",
      jsonFieldName: "url",
      extraHeaders: {
        "X-CSRF-Token": token
      }
    });
  }

  // Allow linebreaks
  marked__WEBPACK_IMPORTED_MODULE_11__.marked.setOptions({
    breaks: true
  });

  // Convert to HTML on submit
  $form.on("submit", function () {
    $input.val((0,marked__WEBPACK_IMPORTED_MODULE_11__.marked)(inscrybmde.value()));
  });
}

/***/ })

}]);
//# sourceMappingURL=app_packs_src_decidim_decidim_awesome_editors_editor_js.js.map