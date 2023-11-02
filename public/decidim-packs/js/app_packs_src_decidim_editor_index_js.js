"use strict";
(self["webpackChunkdecidim_app"] = self["webpackChunkdecidim_app"] || []).push([["app_packs_src_decidim_editor_index_js"],{

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.2/app/packs/src/decidim/icon.js":
/*!***********************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.2/app/packs/src/decidim/icon.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ icon; }
/* harmony export */ });
var DEFAULT_ATTRIBUTES = {
  role: "img",
  "aria-hidden": "true"
};

/**
 * Generates a Decidim icon element and returns it as a string.
 * @param {String} iconKey - the key of the icon to be generated
 * @param {Object} attributes - extra attributes to define for the icon SVG
 * @param {int} wait - number of milliseconds to wait before executing the function.
 * @private
 * @returns {Void} - Returns nothing.
 */
function icon(iconKey) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var iconAttributes = $.extend(DEFAULT_ATTRIBUTES, attributes);
  var title = iconAttributes.title || iconAttributes.ariaLabel;
  Reflect.deleteProperty(iconAttributes, "title");
  var htmlAttributes = {
    "class": "icon icon--".concat(iconKey)
  };
  Object.keys(iconAttributes).forEach(function (key) {
    // Convert the key to dash-format.
    var newKey = key.replace(/([A-Z])/g, function (ucw) {
      return "-".concat(ucw[0].toLowerCase());
    });
    if (typeof htmlAttributes[key] === "undefined") {
      htmlAttributes[newKey] = iconAttributes[key];
    } else {
      htmlAttributes[newKey] = "".concat(htmlAttributes[newKey], " ").concat(iconAttributes[key]);
    }
  });
  var iconsPath = window.Decidim.config.get("icons_path");
  var elHtml = "<svg><use href=\"".concat(iconsPath, "#icon-").concat(iconKey, "\"></use></svg>");
  var $el = $(elHtml);
  if (title) {
    $el.prepend("<title>".concat(title, "</title>"));
  } else {
    // This keeps accessibility audit tools happy
    $el.prepend("<title>".concat(iconKey, "</title>"));
    // Force hidden if title is not defined
    htmlAttributes["aria-hidden"] = "true";
  }
  $el.attr(htmlAttributes);
  return $("<div />").append($el).html();
}

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.2/app/packs/src/decidim/input_emoji.js":
/*!******************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.2/app/packs/src/decidim/input_emoji.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addInputEmoji; }
/* harmony export */ });
/* harmony import */ var _joeattardi_emoji_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joeattardi/emoji-button */ "./node_modules/@joeattardi/emoji-button/dist/index.js");


// eslint-disable-next-line require-jsdoc
function addInputEmoji() {
  var containers = document.querySelectorAll("[data-input-emoji]");
  if (containers.length) {
    containers.forEach(function (elem) {
      var _elem$closest;
      var picker = new _joeattardi_emoji_button__WEBPACK_IMPORTED_MODULE_0__.EmojiButton({
        position: "bottom-end",
        rootElement: ((_elem$closest = elem.closest("form")) === null || _elem$closest === void 0 ? void 0 : _elem$closest.parentElement) || document.body,
        zIndex: 2000
      });

      // if the selector is inside a modal window
      // this allows shows the emoji menu uncut
      var reveal = elem.closest("[data-reveal]");
      if (reveal) {
        reveal.style.overflowY = "unset";
      }
      var wrapper = document.createElement("div");
      wrapper.className = "emoji__container";
      var btnContainer = document.createElement("div");
      btnContainer.className = "emoji__trigger";
      var btn = document.createElement("div");
      btn.className = "emoji__button";
      btn.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg>';
      var parent = elem.parentNode;
      parent.insertBefore(wrapper, elem);
      wrapper.appendChild(elem);
      wrapper.appendChild(btnContainer);
      btnContainer.appendChild(btn);

      // The form errors need to be in the same container with the field they
      // belong to for Foundation Abide to show them automatically.
      parent.querySelectorAll(".form-error").forEach(function (el) {
        return wrapper.appendChild(el);
      });
      var handlerPicker = function handlerPicker() {
        picker.togglePicker(btnContainer);
      };
      btnContainer.addEventListener("click", handlerPicker);
      elem.addEventListener("characterCounter", function (event) {
        if (event.detail.remaining >= 4) {
          btnContainer.addEventListener("click", handlerPicker);
          btnContainer.removeAttribute("style");
        } else {
          btnContainer.removeEventListener("click", handlerPicker);
          btnContainer.setAttribute("style", "color:lightgrey");
        }
      });
      picker.on("emoji", function (_ref) {
        var emoji = _ref.emoji;
        elem.value += " ".concat(emoji, " ");
        var event = new Event("emoji.added");
        elem.dispatchEvent(event);
      });
    });
  }
}
;

/***/ }),

/***/ "./app/packs/src/decidim/editor/common/bubble_menu.js":
/*!************************************************************!*\
  !*** ./app/packs/src/decidim/editor/common/bubble_menu.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BubbleMenu; }
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}


var createBubbleRoot = function createBubbleRoot(content) {
  var root = document.createElement("div");
  root.style.cssText = "\n    z-index: 9999;\n    position: absolute;\n    visibility: hidden;\n    inset: 0 auto auto 0;\n    margin: 0;\n  ";
  root.dataset.bubbleMenu = "";
  root.append(content);
  return root;
};
var createProseMirrorPlugin = function createProseMirrorPlugin(pluginKey, bubbleMenu) {
  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Plugin({
    key: pluginKey,
    view: function view() {
      return {
        update: function update(view, prevState) {
          var state = view.state;
          if (prevState && prevState.doc.eq(state.doc) && prevState.selection.eq(state.selection)) {
            return;
          }
          bubbleMenu.handleSelectionChange(view);
        }
      };
    }
  });
};

/**
 * A custom bubble menu based on `@tiptap/extension-bubble-menu`.
 *
 * This has been customized for this purpose in order to support the use case
 * better and due to some weird behavior in the original extension. This allows
 * us to control also externally when to show and hide the bubble menu instead
 * of leaving it up to the Tiptap extension which does not recognize all the
 * events, such as opening or closing a dialog.
 *
 * The actual bubble menu implementations can implement the following methods by
 * extending this class:
 * - `shouldDisplay()` - defines when the bubble menu is displayed by returning
 *   a boolean indicating the display status, returns `false` by default
 * - `display()` - called when the bubble menu is displayed allowing any updates
 *   to the bubble element by the implementation
 * - `handleAction()` - called when any button within the bubble menu is clicked
 */
var BubbleMenu = /*#__PURE__*/function () {
  function BubbleMenu(_ref) {
    var _this = this;
    var editor = _ref.editor,
      element = _ref.element,
      pluginKey = _ref.pluginKey;
    _classCallCheck(this, BubbleMenu);
    this.editor = editor;
    this.element = element;
    this.element.querySelectorAll("button").forEach(function (el) {
      var action = el.dataset.action;
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
        _this.handleAction(action);
      });
    });
    this.bubble = createBubbleRoot(this.element);
    this.bubbleShown = false;
    this.plugin = createProseMirrorPlugin(pluginKey, this);
    this.editor.registerPlugin(this.plugin);
  }
  _createClass(BubbleMenu, [{
    key: "show",
    value: function show() {
      if (this.bubbleShown) {
        return;
      }
      this.editor.view.dom.parentElement.append(this.bubble);
      this.bubble.style.visibility = "visible";
      this.bubbleShown = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.bubbleShown) {
        return;
      }
      this.bubble.style.visibility = "hidden";
      this.bubble.remove();
      this.bubbleShown = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.hide();
      this.bubble = null;
      this.editor.unregisterPlugin(this.plugin.key);
    }
  }, {
    key: "handleSelectionChange",
    value: function handleSelectionChange(view) {
      if (this.editor.commands.isDialogOpen()) {
        this.hide();
        return;
      }
      if (this.shouldDisplay(view)) {
        this.display(view);
        this.show();
        this.updatePosition(view);
        return;
      }
      this.hide();
    }
  }, {
    key: "getReferenceRect",
    value: function getReferenceRect(view) {
      var state = view.state;
      var ranges = state.selection.ranges;
      var from = Math.min.apply(Math, _toConsumableArray(ranges.map(function (range) {
        return range.$from.pos;
      })));
      var to = Math.max.apply(Math, _toConsumableArray(ranges.map(function (range) {
        return range.$to.pos;
      })));
      if ((0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.isNodeSelection)(state.selection)) {
        var node = view.nodeDOM(from);
        if (node) {
          return node.getBoundingClientRect();
        }
      }
      return (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.posToDOMRect)(view, from, to);
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(view) {
      var editorRect = view.dom.getBoundingClientRect();
      var referenceRect = this.getReferenceRect(view);
      var xDiff = referenceRect.left - editorRect.left;
      var yDiff = referenceRect.top - editorRect.top;
      var width = this.bubble.clientWidth;
      var height = this.bubble.clientHeight;
      var xPos = Math.round(xDiff - width / 2);
      if (xPos < 5) {
        xPos = 5;
      }
      var yPos = Math.round(yDiff + height - 5);
      if (yPos < 5) {
        yPos = 5;
      }
      this.bubble.style.transform = "translate(".concat(xPos, "px, ").concat(yPos, "px)");
    }
  }, {
    key: "shouldDisplay",
    value: function shouldDisplay() {
      // This can be overridden by the implementation
      return false;
    }
  }, {
    key: "display",
    value: function display() {
      // This can be overridden by the implementation
    }
  }, {
    key: "handleAction",
    value: function handleAction() {
      // This can be overridden by the implementation
    }
  }]);
  return BubbleMenu;
}();


/***/ }),

/***/ "./app/packs/src/decidim/editor/common/helpers.js":
/*!********************************************************!*\
  !*** ./app/packs/src/decidim/editor/common/helpers.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueId": function() { return /* binding */ uniqueId; }
/* harmony export */ });
var uniqueId = function uniqueId(prefix) {
  return "".concat(prefix, "-").concat(new Date().getTime(), "-").concat(Math.random().toString(16).slice(2));
};

/***/ }),

/***/ "./app/packs/src/decidim/editor/common/input_dialog.js":
/*!*************************************************************!*\
  !*** ./app/packs/src/decidim/editor/common/input_dialog.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InputDialog; }
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'a11y-dialog-component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var src_decidim_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/i18n */ "./app/packs/src/decidim/i18n.js");
/* harmony import */ var src_decidim_editor_common_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/editor/common/helpers */ "./app/packs/src/decidim/editor/common/helpers.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}



var InputDialog = /*#__PURE__*/function () {
  function InputDialog(editor, _ref) {
    var _this = this;
    var inputs = _ref.inputs;
    _classCallCheck(this, InputDialog);
    this.editor = editor;
    // The legacy design should not have any elements on the page with the
    // `data-dialog` attribute.
    this.legacyDesign = !document.querySelector("[data-dialog]");
    var inputId = (0,src_decidim_editor_common_helpers__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("inputdialog");
    this.element = document.createElement("div");
    if (this.legacyDesign) {
      this.element.classList.add("reveal");
      this.element.setAttribute("data-reveal", "");
    } else {
      this.element.dataset.dialog = "".concat(Math.random().toString(36).slice(2));
    }
    var inputsHTML = "";
    Object.keys(inputs).forEach(function (name) {
      var input = inputs[name];
      var inputHTML = "";
      if (input.type === "select") {
        var optionsHTML = input.options.map(function (opt) {
          return "<option value=\"".concat(opt.value, "\">").concat(opt.label, "</option>");
        });
        inputHTML = "<select id=\"".concat(inputId, "-").concat(name, "\">").concat(optionsHTML, "</select>");
      } else {
        inputHTML = "<input id=\"".concat(inputId, "-").concat(name, "\" type=\"").concat(input.type || "text", "\">");
      }
      inputsHTML += "\n        <div data-input=\"".concat(name, "\">\n          <label>\n            ").concat(input.label, "\n            ").concat(inputHTML, "\n          </label>\n        </div>\n      ");
    });
    var i18n = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_1__.getDictionary)("editor.inputDialog");
    if (this.legacyDesign) {
      this.element.innerHTML = "\n        <div>\n          <form>\n            ".concat(inputsHTML, "\n            <input type=\"submit\" hidden>\n          </form>\n        </div>\n        <div class=\"row columns\">\n          <div class=\"text-center\">\n            <button type=\"button\" class=\"button mr-xs mb-none\" data-action=\"save\">").concat(i18n["buttons.save"], "</button>\n            <button type=\"button\" class=\"button clear mb-none\" data-action=\"cancel\">").concat(i18n["buttons.cancel"], "</button>\n          </div>\n        </div>\n      ");
      document.body.appendChild(this.element);
      $(this.element).foundation();

      // Foundation needs jQuery
      $(this.element).on("open.zf.reveal", function () {
        setTimeout(function () {
          return _this.focusFirstInput();
        }, 0);
      });
      $(this.element).on("closed.zf.reveal", function () {
        setTimeout(function () {
          return _this.handleClose();
        }, 0);
      });
    } else {
      var uniq = this.element.dataset.dialog;
      this.element.innerHTML = "\n        <div id=\"".concat(uniq, "-content\">\n          <button type=\"button\" data-dialog-close=\"").concat(uniq, "\" data-dialog-closable=\"\" aria-label=\"").concat(i18n.close, "\">&times</button>\n          <div data-dialog-container>\n            <form>\n              <div class=\"form__wrapper\">\n                ").concat(inputsHTML, "\n              </div>\n              <input type=\"submit\" hidden>\n            </form>\n          </div>\n          <div data-dialog-actions>\n            <button type=\"button\" class=\"button button__sm md:button__lg button__transparent-secondary\" data-action=\"cancel\">").concat(i18n["buttons.cancel"], "</button>\n            <button type=\"button\" class=\"button button__sm md:button__lg button__secondary\" data-action=\"save\">").concat(i18n["buttons.save"], "</button>\n          </div>\n        </div>\n      ");
      document.body.appendChild(this.element);
      this.dialog = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'a11y-dialog-component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("[data-dialog=\"".concat(uniq, "\"]"), {
        // openingSelector: `[data-dialog-open="${uniq}"]`,
        closingSelector: "[data-dialog-close=\"".concat(uniq, "\"]"),
        backdropSelector: "[data-dialog=\"".concat(uniq, "\"]"),
        enableAutoFocus: false,
        onOpen: function onOpen() {
          setTimeout(function () {
            return _this.focusFirstInput();
          }, 0);
        },
        onClose: function onClose() {
          setTimeout(function () {
            return _this.handleClose();
          }, 0);
        }
      });
    }
    this.element.querySelector("form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var btn = _this.element.querySelector("button[data-action='save']");
      btn.dispatchEvent(new Event("click"));
    });
    this.element.querySelectorAll("button[data-action]").forEach(function (button) {
      button.addEventListener("click", function (ev) {
        ev.preventDefault();
        _this.action = button.dataset.action;
        _this.close();
      });
    });
  }
  _createClass(InputDialog, [{
    key: "toggle",
    value: function toggle() {
      var _this2 = this;
      var currentValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve) {
        _this2.element.querySelectorAll("[data-input]").forEach(function (wrapper) {
          var input = wrapper.querySelector("input, select");
          var currentValue = currentValues[wrapper.dataset.input];
          if (currentValue) {
            input.value = currentValue;
          } else {
            input.value = "";
          }
        });
        _this2.callback = resolve;
        _this2.action = null;
        _this2.editor.commands.toggleDialog(true);
        if (_this2.legacyDesign) {
          // Foundation needs jQuery
          $(_this2.element).foundation("open");
        } else {
          _this2.dialog.open();
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      if (this.legacyDesign) {
        // Foundation needs jQuery
        $(this.element).foundation("close");
      } else {
        this.dialog.close();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.legacyDesign) {
        // Foundation needs jQuery
        $(this.element).foundation("_destroy");
        this.element.remove();
      } else {
        this.dialog.destroy();
        this.element.remove();
        Reflect.deleteProperty(this, "dialog");
      }
    }

    /**
     * This is fired when the dialog is actually closed. The `close()` method only
     * initiates the closing of the dialog.
     *
     * @returns {void}
     */
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.editor.chain().toggleDialog(false).focus(null, {
        scrollIntoView: false
      }).run();
      if (this.callback) {
        this.callback(this.action);
        this.callback = null;
      }
      if (this.action) {
        this.action = null;
      }
      this.destroy();
    }
  }, {
    key: "focusFirstInput",
    value: function focusFirstInput() {
      var firstInput = this.element.querySelector("input, select");
      if (firstInput) {
        firstInput.focus();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
      var wrapper = this.element.querySelector("[data-input=\"".concat(key, "\"]"));
      if (!wrapper) {
        return null;
      }
      var input = wrapper.querySelector("input, select");
      if (input) {
        return input.value;
      }
      return null;
    }
  }]);
  return InputDialog;
}();


/***/ }),

/***/ "./app/packs/src/decidim/editor/common/suggestion.js":
/*!***********************************************************!*\
  !*** ./app/packs/src/decidim/editor/common/suggestion.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNodeView": function() { return /* binding */ createNodeView; },
/* harmony export */   "createSuggestionRenderer": function() { return /* binding */ createSuggestionRenderer; }
/* harmony export */ });
/* global jest */

var createSuggestionRenderer = function createSuggestionRenderer(node) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    itemConverter = _ref.itemConverter;
  return function () {
    var suggestion = null;
    var suggestionItems = null;
    var selectCommand = null;
    var selectedIndex = -1;
    var currentEditor = null;
    var currentRange = null;
    var convertItem = function convertItem(item) {
      var finalItem = item;
      if (itemConverter) {
        finalItem = itemConverter(item);
      }
      if (finalItem instanceof Object) {
        return finalItem;
      }
      return {
        label: finalItem
      };
    };
    var updateSelectedItem = function updateSelectedItem(direction) {
      var count = 0;
      suggestion.querySelectorAll(".editor-suggestions-item").forEach(function (item, idx) {
        if (item.dataset.selected === "true") {
          selectedIndex = idx;
        }
        item.removeAttribute("data-selected");
        count += 1;
      });
      if (direction === "up") {
        selectedIndex -= 1;
      } else {
        selectedIndex += 1;
      }
      if (selectedIndex < 0) {
        selectedIndex = 0;
      } else if (selectedIndex === count) {
        selectedIndex -= 1;
      }
      if (selectedIndex > -1) {
        var item = suggestion.querySelector(".editor-suggestions-item[data-index=\"".concat(selectedIndex, "\"]"));
        if (item) {
          item.dataset.selected = "true";
        }
      }
    };
    var selectItem = function selectItem(idx) {
      var items = suggestionItems;
      var command = selectCommand;
      if (currentRange && typeof jest === "undefined") {
        // Fixes an issue that after selecting the item, the written text will be
        // placed after the newly added suggestion.
        //
        // NOTE: With JSDom/Jest this does not work even if we add a delay after
        // changing the text in the selection. This is because the range remains
        // the same for the `command` below which is why the underlying code is
        // trying to do an insertion at a position that is out of range after we
        // have already deleted the content.
        currentEditor.chain().focus().setTextSelection(currentRange).command(function (_ref2) {
          var tr = _ref2.tr,
            dispatch = _ref2.dispatch;
          if (dispatch) {
            tr.replaceSelectionWith(currentEditor.schema.text("  "));
          }
          return true;
        }).setTextSelection({
          from: currentRange.from,
          to: currentRange.from
        }).run();
      }
      command(convertItem(items[idx]));
    };
    var showSuggestions = function showSuggestions(_ref3) {
      var items = _ref3.items,
        clientRect = _ref3.clientRect;
      var rect = clientRect();
      Object.assign(suggestion.style, {
        position: "absolute",
        top: "".concat(document.documentElement.scrollTop + rect.top + rect.height, "px"),
        left: "".concat(rect.left, "px")
      });
      suggestion.classList.remove("hidden", "hide");
      suggestion.innerHTML = "";
      items.forEach(function (rawItem, idx) {
        var _convertItem = convertItem(rawItem),
          label = _convertItem.label,
          id = _convertItem.id;
        var suggestionItem = document.createElement("button");
        suggestionItem.type = "button";
        suggestionItem.classList.add("editor-suggestions-item");
        if (id) {
          suggestionItem.dataset.id = id;
        }
        suggestionItem.dataset.index = idx;
        suggestionItem.dataset.value = label;
        if (idx === 0) {
          selectedIndex = idx;
          suggestionItem.dataset.selected = "true";
        }
        suggestionItem.textContent = label;
        suggestion.append(suggestionItem);
        suggestionItem.addEventListener("click", function () {
          return selectItem(idx);
        });
      });
    };
    return {
      onStart: function onStart(_ref4) {
        var editor = _ref4.editor,
          items = _ref4.items,
          clientRect = _ref4.clientRect,
          command = _ref4.command;
        currentEditor = editor;
        suggestionItems = items;
        selectCommand = command;
        suggestion = document.createElement("div");
        document.body.append(suggestion);
        suggestion.classList.add("editor-suggestions", "hidden", "hide");
        if (items.length > 0) {
          showSuggestions({
            clientRect: clientRect,
            items: items
          });
        }
      },
      onUpdate: function onUpdate(_ref5) {
        var clientRect = _ref5.clientRect,
          items = _ref5.items;
        if (!clientRect || !suggestion) {
          return;
        }
        suggestionItems = items;
        if (items.length > 0) {
          showSuggestions({
            clientRect: clientRect,
            items: items
          });
        } else {
          suggestion.classList.add("editor-suggestions", "hidden", "hide");
        }
      },
      onKeyDown: function onKeyDown(_ref6) {
        var event = _ref6.event,
          range = _ref6.range;
        currentRange = range;
        if (event.key === "Escape") {
          suggestion.classList.add("hidden", "hide");
          return true;
        } else if (event.key === "ArrowUp") {
          updateSelectedItem("up");
          return true;
        } else if (event.key === "ArrowDown") {
          updateSelectedItem("down");
          return true;
        } else if (event.key === "Enter") {
          if (selectedIndex > -1) {
            selectItem(selectedIndex);
          }
          selectedIndex = -1;
          return true;
        }
        return false;
      },
      onExit: function onExit() {
        suggestion.remove();
        suggestion = suggestionItems = selectCommand = currentEditor = currentRange = null;
        selectedIndex = -1;
      }
    };
  };
};
var createNodeView = function createNodeView(self) {
  return function (_ref7) {
    var node = _ref7.node;
    var dom = document.createElement("span");
    dom.textContent = self.options.renderLabel({
      options: self.options,
      node: node
    });
    var _node$attrs = node.attrs,
      id = _node$attrs.id,
      label = _node$attrs.label;
    dom.dataset.suggestion = node.type.name;
    if (id) {
      dom.dataset.id = id;
    }
    dom.dataset.label = label;
    return {
      dom: dom
    };
  };
};

/***/ }),

/***/ "./app/packs/src/decidim/editor/common/upload_dialog.js":
/*!**************************************************************!*\
  !*** ./app/packs/src/decidim/editor/common/upload_dialog.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UploadDialog; }
/* harmony export */ });
/* harmony import */ var src_decidim_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/icon */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.2/app/packs/src/decidim/icon.js");
/* harmony import */ var src_decidim_editor_utilities_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/editor/utilities/file */ "./app/packs/src/decidim/editor/utilities/file.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}


var createElement = function createElement(template) {
  var el = document.createElement("div");
  el.innerHTML = template;
  return el.firstElementChild;
};

/**
 * This is a simplified version of the normal upload dialog, uses the same
 * markup as the normal upload dialog to maintain consistency.
 *
 * The functionality differs from the original dialog as this only handles the
 * file uploads for the editor and the purpose is to simply provide the same
 * upload functionality and ability to update the alternative texts for the
 * images within the editor.
 *
 * This works only for the editor and does not store the files in the view
 * inputs as they are only used.
 */
var UploadDialog = /*#__PURE__*/function () {
  function UploadDialog(element, _ref) {
    var _this = this;
    var i18n = _ref.i18n,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;
    _classCallCheck(this, UploadDialog);
    this.element = element;
    this.i18n = i18n;
    this.legacyDesign = Boolean(element.dataset.reveal);
    this.onOpen = onOpen;
    this.onClose = onClose;
    this.values = {
      src: null,
      alt: null
    };
    this.dropZoneEnabled = true;
    this.exitMode = "cancel";
    var extra = null;
    this.messageSection = document.createElement("div");
    this.currentFileSection = document.createElement("div");
    this.inputSection = document.createElement("div");
    if (this.legacyDesign) {
      this.saveButton = this.element.querySelector("button.add-file-file");
      this.cancelButton = this.element.querySelector("button.cancel-attachment");
      this.dropZone = this.element.querySelector(".dropzone");
      var dc = this.element.querySelector(".dropzone-container");
      extra = document.createElement("div");
      dc.parentNode.insertBefore(extra, dc.nextSibling);
    } else {
      this.saveButton = this.element.querySelector("button[data-dropzone-save]");
      this.cancelButton = this.element.querySelector("button[data-dropzone-cancel]");
      this.dropZone = this.element.querySelector("[data-dropzone]");
      extra = document.createElement("div");
      this.dropZone.parentNode.insertBefore(extra, this.dropZone.nextSibling);
    }
    extra.append(this.messageSection);
    extra.append(this.currentFileSection);
    if (this.legacyDesign) {
      extra.append(this.inputSection);
    } else {
      this.dropZone.parentNode.querySelector(".upload-modal__text").classList.add("mb-0");
      this.dropZone.parentNode.append(this.inputSection);
    }
    this.saveButton.addEventListener("click", function () {
      _this.exitMode = "save";
    });
    this.cancelButton.addEventListener("click", function () {
      _this.exitMode = "cancel";
    });
    this.dropZone.addEventListener("change", function (event) {
      event.preventDefault();
      var files = event.target.files;
      if (files.length < 1) {
        return;
      }
      _this.uploadFile(files[0]);
    });
    var toggleDragover = function toggleDragover(active) {
      if (active) {
        _this.dropZone.classList.add("is-dragover");
        _this.dropZone.querySelectorAll(".upload-modal__dropzone").forEach(function (el) {
          return el.classList.add("is-dragover");
        });
      } else {
        _this.dropZone.classList.remove("is-dragover");
        _this.dropZone.querySelectorAll(".upload-modal__dropzone").forEach(function (el) {
          return el.classList.remove("is-dragover");
        });
      }
    };
    var dropEvents = {
      dragenter: function dragenter(event) {
        return event.preventDefault();
      },
      dragleave: function dragleave() {
        return toggleDragover(false);
      },
      dragover: function dragover(event) {
        event.preventDefault();
        toggleDragover(true);
      },
      drop: function drop(event) {
        event.preventDefault();
        toggleDragover(false);
        _this.messageSection.innerHTML = "";
        var files = event.dataTransfer.files;
        if (files.length < 1) {
          return;
        }
        _this.uploadFile(files[0]);
      }
    };
    Object.keys(dropEvents).forEach(function (key) {
      _this.dropZone.addEventListener(key, dropEvents[key]);
    });
    var handleClose = function handleClose() {
      var titleInput = _this.inputSection.querySelector(".attachment-title");
      if (titleInput) {
        _this.values.alt = titleInput.value;
      }
      if (_this.onClose) {
        _this.onClose(_this);
      }
      if (_this.callback) {
        _this.callback(_this.exitMode);
        _this.callback = null;
      }
    };
    if (this.legacyDesign) {
      $(this.element).on("closed.zf.reveal", handleClose);
    } else {
      this.element.addEventListener("close.dialog", function () {
        return setTimeout(handleClose, 0);
      });
    }
  }
  _createClass(UploadDialog, [{
    key: "getValue",
    value: function getValue(key) {
      return this.values[key];
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var _this2 = this;
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.exitMode = "cancel";
      return new Promise(function (resolve) {
        _this2.saveButton.disabled = true;
        _this2.values = {
          src: values.src,
          alt: values.alt
        };
        _this2.updateCurrentFile();
        var titleEl = null;
        if (_this2.legacyDesign) {
          titleEl = _this2.element.querySelector(".reveal__title");
        } else {
          titleEl = _this2.element.querySelector("[data-dialog-title]");
        }
        if (values.src && values.src.length > 0) {
          titleEl.textContent = titleEl.dataset.editlabel;
        } else {
          titleEl.textContent = titleEl.dataset.addlabel;
        }
        var titleInputHtml = "\n        <label>\n          ".concat(options.inputLabel, "\n          <input class=\"attachment-title\" type=\"text\" name=\"alt\">\n        </label>\n      ");
        var titleSection = null;
        if (_this2.legacyDesign) {
          titleSection = createElement("<div class=\"row\">".concat(titleInputHtml, "</div>"));
        } else {
          titleSection = createElement("<div class=\"form__wrapper\">".concat(titleInputHtml, "</div>"));
        }
        titleSection.querySelector(".attachment-title").value = values.alt || "";
        _this2.inputSection.innerHTML = "";
        _this2.inputSection.append(titleSection);
        _this2.uploadHandler = options.uploadHandler;
        if (_this2.legacyDesign) {
          $(_this2.element).foundation("open");
        } else {
          var dialogId = _this2.element.dataset.dialog;
          var dialog = window.Decidim.currentDialogs[dialogId];
          if (dialog) {
            dialog.open();
          } else {
            console.error("Upload dialog not initialized for: ".concat(dialogId));
          }
        }
        _this2.callback = resolve;
        if (_this2.onOpen) {
          _this2.onOpen(_this2);
        }
      });
    }
  }, {
    key: "updateCurrentFile",
    value: function updateCurrentFile(file) {
      var items = this.dropZone.querySelector("[data-dropzone-items]");
      if (!this.values.src || this.values.src.length < 1) {
        if (this.legacyDesign) {
          this.currentFileSection.innerHTML = "";
        } else {
          items.setAttribute("hidden", "hidden");
          items.innerHTML = "";
        }
        return;
      }
      this.saveButton.disabled = false;
      if (this.legacyDesign) {
        this.currentFileSection.innerHTML = "\n        <img src=\"".concat(this.values.src, "\" alt=\"").concat(this.i18n.uploadedFile, "\" style=\"max-width:100px\">\n      ");
      } else if (file) {
        items.removeAttribute("hidden");
        items.innerHTML = "\n        <li data-filename=\"".concat(file.name, "\" data-state=\"validated\">\n          <div data-template=\"ok\">\n            <div><img src=\"").concat(this.values.src, "\" alt=\"").concat(this.i18n.uploadedFile, "\"></div>\n            <span>").concat(file.name, "</span>\n          </div>\n        </li>\n      ");
      }
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
        var response, items, locales, titleInput;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.uploadHandler) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.next = 4;
              return this.uploadHandler(file);
            case 4:
              response = _context.sent;
              if (response.url) {
                _context.next = 8;
                break;
              }
              if (this.legacyDesign) {
                this.messageSection.innerHTML = "<div class=\"form-error is-visible\">".concat(response.message, "</div>");
              } else {
                items = this.dropZone.querySelector("[data-dropzone-items]");
                locales = JSON.parse(items.dataset.locales);
                items.removeAttribute("hidden");
                items.innerHTML = "\n          <li data-filename=\"".concat(file.name, "\" data-state=\"validated\">\n            <div data-template=\"error\">\n              <div>").concat((0,src_decidim_icon__WEBPACK_IMPORTED_MODULE_0__["default"])("error-warning-line"), "</div>\n              <div>\n                <span>").concat(file.name, "</span>\n                <span>").concat(locales.validation_error, "</span>\n                <ul><li>").concat(response.message, "</li></ul>\n              </div>\n            </div>\n          </li>\n        ");
              }
              return _context.abrupt("return");
            case 8:
              this.values.src = response.url;
              titleInput = this.inputSection.querySelector(".attachment-title");
              if (titleInput && (!titleInput.value || titleInput.value.length < 1)) {
                titleInput.value = (0,src_decidim_editor_utilities_file__WEBPACK_IMPORTED_MODULE_1__.fileNameToTitle)(file.name);
              }
              this.updateCurrentFile(file);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }]);
  return UploadDialog;
}();


/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/bold/index.js":
/*!***************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/bold/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-bold */ "./node_modules/@tiptap/extension-bold/dist/index.js");


/**
 * Extends the bold extension to fix a bug with pasting the following kind of
 * content from Google docs (this is about how Google docs formats the content):
 *
 * <b style="font-weight:normal;">
 *   <ol>
 *      <li><p><span style="font-weight:700;">Item 1</span></p></li>
 *      <ol>
 *        <li><p><span style="font-weight:400;">Item 1</span></p></li>
 *      </ol>
 *   </ol>
 * </b>
 *
 * See: https://github.com/ueberdosis/tiptap/issues/3735
 */
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  parseHTML: function parseHTML() {
    return [{
      tag: "strong"
    }, {
      tag: "b",
      getAttrs: function getAttrs(node) {
        return node.style.fontWeight !== "normal" && node.style.fontWeight !== "400" && null;
      }
    }, {
      tag: "span",
      getAttrs: function getAttrs(node) {
        return /^(bold(er)?|[5-9]\d{2,})$/.test(node.style.fontWeight) && null;
      }
    }];
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/character_count/index.js":
/*!**************************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/character_count/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");
/* harmony import */ var _tiptap_extension_character_count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-character-count */ "./node_modules/@tiptap/extension-character-count/dist/index.js");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}



/**
 * Extends the character counter to prevent adding new paragraphs after the
 * character limit is reached. The original character counter allows that.
 *
 * See: https://github.com/ueberdosis/tiptap/issues/3721
 */
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_extension_character_count__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    var _this$parent;
    var limit = this.options.limit;
    var plugins = (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.call(this);
    if (limit === 0 || limit === null || !limit) {
      return plugins;
    }
    var storage = this.editor.storage;
    return [].concat(_toConsumableArray(plugins), [new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({
      props: {
        handleKeyDown: function handleKeyDown(view, event) {
          if (event.key === "Enter") {
            return storage.characterCount.characters() >= limit;
          }
          return false;
        }
      }
    })]);
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/decidim_kit/index.js":
/*!**********************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/decidim_kit/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/starter-kit */ "./node_modules/@tiptap/starter-kit/dist/index.js");
/* harmony import */ var _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-code-block */ "./node_modules/@tiptap/extension-code-block/dist/index.js");
/* harmony import */ var _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-underline */ "./node_modules/@tiptap/extension-underline/dist/index.js");
/* harmony import */ var src_decidim_editor_extensions_character_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/editor/extensions/character_count */ "./app/packs/src/decidim/editor/extensions/character_count/index.js");
/* harmony import */ var src_decidim_editor_extensions_bold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/editor/extensions/bold */ "./app/packs/src/decidim/editor/extensions/bold/index.js");
/* harmony import */ var src_decidim_editor_extensions_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/decidim/editor/extensions/dialog */ "./app/packs/src/decidim/editor/extensions/dialog/index.js");
/* harmony import */ var src_decidim_editor_extensions_hashtag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/decidim/editor/extensions/hashtag */ "./app/packs/src/decidim/editor/extensions/hashtag/index.js");
/* harmony import */ var src_decidim_editor_extensions_heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/decidim/editor/extensions/heading */ "./app/packs/src/decidim/editor/extensions/heading/index.js");
/* harmony import */ var src_decidim_editor_extensions_ordered_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/decidim/editor/extensions/ordered_list */ "./app/packs/src/decidim/editor/extensions/ordered_list/index.js");
/* harmony import */ var src_decidim_editor_extensions_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/decidim/editor/extensions/image */ "./app/packs/src/decidim/editor/extensions/image/index.js");
/* harmony import */ var src_decidim_editor_extensions_indent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/decidim/editor/extensions/indent */ "./app/packs/src/decidim/editor/extensions/indent/index.js");
/* harmony import */ var src_decidim_editor_extensions_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/decidim/editor/extensions/link */ "./app/packs/src/decidim/editor/extensions/link/index.js");
/* harmony import */ var src_decidim_editor_extensions_mention__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/decidim/editor/extensions/mention */ "./app/packs/src/decidim/editor/extensions/mention/index.js");
/* harmony import */ var src_decidim_editor_extensions_video_embed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/decidim/editor/extensions/video_embed */ "./app/packs/src/decidim/editor/extensions/video_embed/index.js");
/* harmony import */ var src_decidim_editor_extensions_emoji__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/decidim/editor/extensions/emoji */ "./app/packs/src/decidim/editor/extensions/emoji/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
















/* harmony default export */ __webpack_exports__["default"] = (_tiptap_core__WEBPACK_IMPORTED_MODULE_15__.Extension.create({
  name: "decidimKit",
  addOptions: function addOptions() {
    return {
      characterCount: {
        limit: null
      },
      heading: {
        levels: [2, 3, 4, 5, 6]
      },
      link: {
        allowTargetControl: false
      },
      videoEmbed: false,
      image: {
        uploadDialogSelector: null,
        uploadImagesPath: null,
        contentTypes: /^image\/(jpe?g|png|svg|webp)$/i
      },
      hashtag: false,
      mention: false,
      emoji: false
    };
  },
  addExtensions: function addExtensions() {
    var extensions = [_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_0__["default"].configure({
      heading: false,
      bold: false,
      orderedList: false,
      codeBlock: false
    }), src_decidim_editor_extensions_character_count__WEBPACK_IMPORTED_MODULE_3__["default"].configure(this.options.characterCount), src_decidim_editor_extensions_link__WEBPACK_IMPORTED_MODULE_11__["default"].configure(_objectSpread({
      openOnClick: false
    }, this.options.link)), src_decidim_editor_extensions_bold__WEBPACK_IMPORTED_MODULE_4__["default"], src_decidim_editor_extensions_dialog__WEBPACK_IMPORTED_MODULE_5__["default"], src_decidim_editor_extensions_indent__WEBPACK_IMPORTED_MODULE_10__["default"], src_decidim_editor_extensions_ordered_list__WEBPACK_IMPORTED_MODULE_8__["default"], _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_1__["default"], _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_2__["default"]];
    if (this.options.heading !== false) {
      extensions.push(src_decidim_editor_extensions_heading__WEBPACK_IMPORTED_MODULE_7__["default"].configure(this.options.heading));
    }
    if (this.options.videoEmbed !== false) {
      extensions.push(src_decidim_editor_extensions_video_embed__WEBPACK_IMPORTED_MODULE_13__["default"].configure(this.options.videoEmbed));
    }
    if (this.options.image !== false && this.options.image.uploadDialogSelector) {
      extensions.push(src_decidim_editor_extensions_image__WEBPACK_IMPORTED_MODULE_9__["default"].configure(this.options.image));
    }
    if (this.options.hashtag !== false) {
      extensions.push(src_decidim_editor_extensions_hashtag__WEBPACK_IMPORTED_MODULE_6__["default"].configure(this.options.hashtag));
    }
    if (this.options.mention !== false) {
      extensions.push(src_decidim_editor_extensions_mention__WEBPACK_IMPORTED_MODULE_12__["default"].configure(this.options.mention));
    }
    if (this.options.emoji !== false) {
      extensions.push(src_decidim_editor_extensions_emoji__WEBPACK_IMPORTED_MODULE_14__["default"].configure(this.options.emoji));
    }
    return extensions;
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/dialog/index.js":
/*!*****************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/dialog/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");


/* harmony default export */ __webpack_exports__["default"] = (_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Extension.create({
  name: "dialog",
  addStorage: function addStorage() {
    return {
      open: false
    };
  },
  addCommands: function addCommands() {
    var _this = this;
    return {
      isDialogOpen: function isDialogOpen() {
        return function () {
          return _this.storage.open;
        };
      },
      toggleDialog: function toggleDialog(open) {
        return function () {
          return _this.storage.open = open;
        };
      }
    };
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    var _this2 = this;
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({
      key: new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.PluginKey("editable"),
      props: {
        attributes: function attributes() {
          if (_this2.storage.open) {
            return {
              "class": "dialog-open"
            };
          }
          return {};
        }
      }
    })];
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/emoji/index.js":
/*!****************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/emoji/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var src_decidim_input_emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/input_emoji */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.2/app/packs/src/decidim/input_emoji.js");


var createEmojiButton = function createEmojiButton(editor) {
  var dom = editor.view.dom;
  return new src_decidim_input_emoji__WEBPACK_IMPORTED_MODULE_0__.EmojiButton(dom);
};
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.Extension.create({
  name: "emoji",
  onCreate: function onCreate(_ref) {
    var editor = _ref.editor;
    createEmojiButton(editor);
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/hashtag/index.js":
/*!******************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/hashtag/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashtagPluginKey": function() { return /* binding */ HashtagPluginKey; }
/* harmony export */ });
/* harmony import */ var _tiptap_extension_mention__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-mention */ "./node_modules/@tiptap/extension-mention/dist/index.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");
/* harmony import */ var src_decidim_editor_common_suggestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/editor/common/suggestion */ "./app/packs/src/decidim/editor/common/suggestion.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}



var HashtagPluginKey = new prosemirror_state__WEBPACK_IMPORTED_MODULE_2__.PluginKey("hashtag");
var searchHashtags = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(queryText) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fetch("/api", {
            method: "POST",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              query: "{ hashtags(name:\"".concat(queryText, "\") {name} }")
            })
          }).then(function (response) {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Could not retrieve data");
          }).then(function (json) {
            return json.data.hashtags || [];
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function searchHashtags(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * The hashtag extension does not yet exist in the TipTap public repository and
 * also the documentation page shows it as
 * https://tiptap.dev/api/nodes/hashtag
 */
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_extension_mention__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: "hashtag",
  addOptions: function addOptions() {
    var _this$parent;
    var options = (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.call(this);
    var suggestion = options === null || options === void 0 ? void 0 : options.suggestion;
    return _objectSpread(_objectSpread({}, options), {}, {
      renderLabel: function renderLabel(_ref2) {
        var _node$attrs$label;
        var node = _ref2.node;
        // The labels already have the suggestion character in front of them
        // which is why we do not want to add it twice.
        return "".concat((_node$attrs$label = node.attrs.label) !== null && _node$attrs$label !== void 0 ? _node$attrs$label : node.attrs.id);
      },
      suggestion: _objectSpread(_objectSpread({}, suggestion), {}, {
        "char": "#",
        pluginKey: HashtagPluginKey,
        items: function () {
          var _items = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
            var query, data, sorted;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  query = _ref3.query;
                  if (!(query.length < 2)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return", []);
                case 3:
                  _context2.next = 5;
                  return searchHashtags(query);
                case 5:
                  data = _context2.sent;
                  sorted = data.sort(function (tag) {
                    return tag.name;
                  });
                  return _context2.abrupt("return", sorted.slice(0, 5));
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function items(_x2) {
            return _items.apply(this, arguments);
          }
          return items;
        }(),
        render: (0,src_decidim_editor_common_suggestion__WEBPACK_IMPORTED_MODULE_1__.createSuggestionRenderer)(this, {
          itemConverter: function itemConverter(tag) {
            return {
              label: "#".concat(tag.name)
            };
          }
        })
      })
    });
  },
  addNodeView: function addNodeView() {
    return (0,src_decidim_editor_common_suggestion__WEBPACK_IMPORTED_MODULE_1__.createNodeView)(this);
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/heading/index.js":
/*!******************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/heading/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-heading */ "./node_modules/@tiptap/extension-heading/dist/index.js");



/**
 * Customized version of the Heading extension in order to fix compatibility
 * issue with the Hashtag extension. The default input rule of the Heading
 * extension would also match any paragraphs that have only one hashtag in them
 * and nothing else because that indicates the first level of heading.
 *
 * E.g.
 * - If you have the following paragraph: `<p>#apples</p>`
 * - This would be converted to a paragraph containing the hashtag node markup
 *   in the editor.
 * - If you come back to edit this content and try to enter a space right after
 *   the hashtag, the hashtag would disappear and the active text block would
 *   get the second heading level applied to it
 *
 * Since we do not allow the user to enter the first level of headings through
 * the editor, we can fix this by limiting the markdown shortcut to the second
 * level headings and above.
 */
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addInputRules: function addInputRules() {
    var _this = this;
    return this.options.levels.map(function (level) {
      return (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.textblockTypeInputRule)({
        find: new RegExp("^(#{2,".concat(level, "})\\s$")),
        type: _this.type,
        getAttributes: {
          level: level
        }
      });
    });
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/image/index.js":
/*!****************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/image/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-image */ "./node_modules/@tiptap/extension-image/dist/index.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");
/* harmony import */ var src_decidim_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/i18n */ "./app/packs/src/decidim/i18n.js");
/* harmony import */ var src_decidim_editor_utilities_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/editor/utilities/file */ "./app/packs/src/decidim/editor/utilities/file.js");
/* harmony import */ var src_decidim_editor_extensions_image_node_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/editor/extensions/image/node_view */ "./app/packs/src/decidim/editor/extensions/image/node_view.js");
/* harmony import */ var src_decidim_editor_common_upload_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/editor/common/upload_dialog */ "./app/packs/src/decidim/editor/common/upload_dialog.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}







var createImageUploadDialog = function createImageUploadDialog(editor, _ref) {
  var uploadDialogSelector = _ref.uploadDialogSelector;
  var i18nUpload = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_1__.getDictionary)("editor.upload");
  return new src_decidim_editor_common_upload_dialog__WEBPACK_IMPORTED_MODULE_4__["default"](document.querySelector(uploadDialogSelector), {
    i18n: i18nUpload,
    onOpen: function onOpen() {
      return editor.commands.toggleDialog(true);
    },
    onClose: function onClose() {
      return editor.chain().toggleDialog(false).focus(null, {
        scrollIntoView: false
      }).run();
    }
  });
};
var uploadImage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(image, uploadUrl) {
    var token, data, i18n;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          token = document.querySelector("meta[name='csrf-token']").getAttribute("content");
          data = new FormData();
          data.append("image", image);
          i18n = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_1__.getDictionary)("editor.extensions.image");
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            fetch(uploadUrl, {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              headers: {
                "X-CSRF-Token": token
              },
              body: data
            }).then(function (response) {
              if (response.ok) {
                return response.json();
              }
              return new Promise(function (responseResolve) {
                return responseResolve({
                  message: i18n.uploadError
                });
              });
            }).then(function (json) {
              return resolve(_objectSpread({
                title: (0,src_decidim_editor_utilities_file__WEBPACK_IMPORTED_MODULE_2__.fileNameToTitle)(image.name)
              }, json));
            })["catch"](reject);
          }));
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function uploadImage(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var filterImages = function filterImages(files, contentTypes) {
  return Array.from(files).filter(function (file) {
    if (contentTypes instanceof RegExp) {
      return contentTypes.test(file.type);
    } else if (contentTypes instanceof Array) {
      return contentTypes.includes(file.type);
    }
    // string
    return contentTypes === file.type;
  });
};

/**
 * Handles the image uploads through ActiveStorage when they are dropped or
 * pasted to the editor.
 *
 * Paste and drop handling based on:
 * https://gist.github.com/slava-vishnyakov/16076dff1a77ddaca93c4bccd4ec4521
 */
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_extension_image__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addOptions: function addOptions() {
    var _this$parent;
    return _objectSpread(_objectSpread({}, (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.call(this)), {}, {
      contentTypes: /^image\/(jpe?g|png|svg|webp)$/i,
      uploadImagesPath: null,
      uploadDialogSelector: null
    });
  },
  addAttributes: function addAttributes() {
    var _this$parent2;
    return _objectSpread(_objectSpread({}, (_this$parent2 = this.parent) === null || _this$parent2 === void 0 ? void 0 : _this$parent2.call(this)), {}, {
      width: {
        "default": null
      }
    });
  },
  addCommands: function addCommands() {
    var _this$parent3,
      _this = this;
    var i18n = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_1__.getDictionary)("editor.extensions.image");
    var uploadDialog = createImageUploadDialog(this.editor, this.options);
    return _objectSpread(_objectSpread({}, (_this$parent3 = this.parent) === null || _this$parent3 === void 0 ? void 0 : _this$parent3.call(this)), {}, {
      imageDialog: function imageDialog() {
        return /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
            var dispatch, _this$editor$getAttri, src, alt, width, dialogState;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  dispatch = _ref3.dispatch;
                  if (!dispatch) {
                    _context3.next = 15;
                    break;
                  }
                  _this$editor$getAttri = _this.editor.getAttributes("image"), src = _this$editor$getAttri.src, alt = _this$editor$getAttri.alt, width = _this$editor$getAttri.width;
                  _this.editor.commands.toggleDialog(true);
                  _context3.next = 6;
                  return uploadDialog.toggle({
                    src: src,
                    alt: alt
                  }, {
                    inputLabel: i18n.altLabel,
                    uploadHandler: function () {
                      var _uploadHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(file) {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              return _context2.abrupt("return", uploadImage(file, _this.options.uploadImagesPath));
                            case 1:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      }));
                      function uploadHandler(_x4) {
                        return _uploadHandler.apply(this, arguments);
                      }
                      return uploadHandler;
                    }()
                  });
                case 6:
                  dialogState = _context3.sent;
                  _this.editor.commands.toggleDialog(false);
                  if (!(dialogState !== "save")) {
                    _context3.next = 11;
                    break;
                  }
                  _this.editor.commands.focus(null, {
                    scrollIntoView: false
                  });
                  return _context3.abrupt("return", false);
                case 11:
                  if (uploadDialog.getValue("src") !== src) {
                    // Reset the width to original width in case the image changed.
                    width = null;
                  }
                  src = uploadDialog.getValue("src");
                  alt = uploadDialog.getValue("alt");
                  return _context3.abrupt("return", _this.editor.chain().setImage({
                    src: src,
                    alt: alt,
                    width: width
                  }).focus(null, {
                    scrollIntoView: false
                  }).run());
                case 15:
                  return _context3.abrupt("return", true);
                case 16:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function (_x3) {
            return _ref4.apply(this, arguments);
          };
        }();
      }
    });
  },
  addNodeView: function addNodeView() {
    return (0,src_decidim_editor_extensions_image_node_view__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
  },
  parseHTML: function parseHTML() {
    return [{
      tag: "div[data-image] img[src]:not([src^='data:'])"
    }];
  },
  renderHTML: function renderHTML(_ref5) {
    var HTMLAttributes = _ref5.HTMLAttributes;
    return ["div", {
      "class": "editor-content-image",
      "data-image": ""
    }, ["img", (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_5__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes)]];
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    var editor = this.editor;
    var _this$options = this.options,
      uploadImagesPath = _this$options.uploadImagesPath,
      contentTypes = _this$options.contentTypes;
    var handleUploadedImages = function handleUploadedImages(uploadedImages) {
      uploadedImages.forEach(function (imageData) {
        if (!imageData.url) {
          return;
        }
        editor.commands.setImage({
          src: imageData.url,
          alt: imageData.title
        });
      });
    };
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_6__.Plugin({
      props: {
        handlePaste: function handlePaste(view, event) {
          var items = (event.clipboardData || event.originalEvent.clipboardData).items;
          var images = filterImages(items, contentTypes);
          if (images.length < 1) {
            return false;
          }
          Promise.all(images.map(function (item) {
            return uploadImage(item.getAsFile(), uploadImagesPath);
          })).then(function (uploadedImages) {
            handleUploadedImages(uploadedImages);
          });
          return true;
        },
        handleDoubleClick: function handleDoubleClick() {
          if (!editor.isActive("image")) {
            return false;
          }
          editor.chain().focus().imageDialog().run();
          return true;
        },
        handleDOMEvents: {
          drop: function drop(view, event) {
            var _event$dataTransfer;
            var position = view.posAtCoords({
              left: event.clientX,
              top: event.clientY
            });
            var files = event === null || event === void 0 ? void 0 : (_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.files;
            if (!files || files.length < 1) {
              return;
            }
            var images = filterImages(files, contentTypes);
            if (images.length < 1) {
              return;
            }
            event.preventDefault();

            // Make sure the image is dropped at the right place. Otherwise
            // the image would appear at the current text selection position
            // and always in the beginning of the content in case the editor
            // did not have focus when the image was dropped.
            editor.chain().focus().setTextSelection(position.pos).run();
            Promise.all(images.map(function (image) {
              return uploadImage(image, uploadImagesPath);
            })).then(function (uploadedImages) {
              handleUploadedImages(uploadedImages);
            });
          }
        }
      }
    })];
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/image/node_view.js":
/*!********************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/image/node_view.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.js");
/* harmony import */ var src_decidim_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/i18n */ "./app/packs/src/decidim/i18n.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}


var createControl = function createControl(position, label) {
  var el = document.createElement("button");
  el.type = "button";
  el.ariaLabel = label;
  el.dataset.imageResizerControl = position;
  return el;
};
var createDimensionDisplay = function createDimensionDisplay() {
  var el = document.createElement("div");
  el.dataset.imageResizerDimensions = "";
  var width = document.createElement("span");
  width.dataset.imageResizerDimension = "width";
  width.dataset.imageResizerDimensionValue = "";
  var height = document.createElement("span");
  height.dataset.imageResizerDimension = "height";
  height.dataset.imageResizerDimensionValue = "";
  el.append(width);
  el.append("×");
  el.append(height);
  return {
    wrapper: el,
    width: width,
    height: height
  };
};

/**
 * Wraps the editor element around the resizable element and implements the
 * resizer functionality.
 *
 * @param {Object} self The node extension to create the view for
 * @returns {Function} The custom node view callback to pass on to TipTap
 */
/* harmony default export */ __webpack_exports__["default"] = (function (self) {
  var i18nResize = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_0__.getDictionary)("editor.extensions.image.nodeView.resizer");
  var createResizeControl = function createResizeControl(position) {
    var label = i18nResize["control.resize"];
    var positionLabel = i18nResize["position.".concat(position.replace(/-(\w)/, function (da, ch) {
      return ch.toUpperCase();
    }))];
    return createControl(position, label.replace("%position%", positionLabel));
  };
  return function (_ref) {
    var editor = _ref.editor,
      node = _ref.node,
      getPos = _ref.getPos;
    var resizer = document.createElement("div");
    resizer.dataset.imageResizerWrapper = "";
    resizer.append(createResizeControl("top-left"));
    resizer.append(createResizeControl("top-right"));
    resizer.append(createResizeControl("bottom-left"));
    resizer.append(createResizeControl("bottom-right"));
    var dimensions = createDimensionDisplay();
    resizer.append(dimensions.wrapper);
    var contentDOM = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.DOMSerializer.fromSchema(node.type.schema).serializeNode(node);
    resizer.append(contentDOM);
    var img = contentDOM.querySelector("img");
    var activeResizeControl = null,
      currentHeight = null,
      currentSrc = node.attrs.src,
      currentWidth = null,
      naturalHeight = img.naturalHeight,
      naturalWidth = img.naturalWidth,
      originalWidth = null,
      resizeStartPosition = null;

    // Used to reliably get the image width so that it is not reported as zero
    // in case the original image element has not finished loading yet.
    var tmpImg = document.createElement("img");
    var givenWidth = node.attrs.width;
    tmpImg.onload = function () {
      naturalWidth = tmpImg.naturalWidth;
      naturalHeight = tmpImg.naturalHeight;

      // Set currentWidth and currentHeight
      if (givenWidth === null) {
        currentWidth = naturalWidth;
        currentHeight = naturalHeight;
      } else {
        currentWidth = givenWidth;
        currentHeight = Math.round(naturalHeight * (currentWidth / naturalWidth));
      }

      // Force node update in order to set the initial dimensions
      [_objectSpread(_objectSpread({}, node.attrs), {}, {
        width: 1
      }), node.attrs].forEach(function (newAttrs) {
        // The `setTimeout` below is to push the node updates to the next JS
        // event loop so that we are not triggering a change in the element
        // before it is created as would happen e.g. during the Jest tests.
        setTimeout(function () {
          editor.view.dispatch(editor.view.state.tr.setNodeMarkup(getPos(), self.type, newAttrs));
        }, 0);
      });
    };
    tmpImg.src = img.src;
    var getEventPagePosition = function getEventPagePosition(ev, device) {
      if (device === "touch") {
        var originalEv = ev.originalEvent;
        var touches = ev.touches || ev.changedTouches || originalEv.touches || originalEv.changedTouches;
        if (!touches) {
          return {
            xPos: null,
            yPos: null
          };
        }
        var touch = touches[0];
        return {
          xPos: touch.pageX,
          yPos: touch.pageY
        };
      }
      return {
        xPos: ev.clientX,
        yPos: ev.clientY
      };
    };
    var handleMove = function handleMove(ev, device) {
      var _getEventPagePosition = getEventPagePosition(ev, device),
        xPos = _getEventPagePosition.xPos;
      var diff = resizeStartPosition - xPos;
      if (activeResizeControl.match(/-left$/)) {
        diff *= -1;
      }
      currentWidth = Math.round(originalWidth * (1 - diff / originalWidth));
      if (currentWidth < 100) {
        currentWidth = 100;
      } else if (currentWidth >= naturalWidth) {
        currentWidth = naturalWidth;
      }
      currentHeight = Math.round(naturalHeight * (currentWidth / naturalWidth));
      var width = currentWidth;
      if (width >= naturalWidth) {
        width = null;
      }
      editor.commands.updateAttributes("image", {
        width: width
      });
    };
    var handleMouseMove = function handleMouseMove(ev) {
      return handleMove(ev, "mouse");
    };
    var handleTouchMove = function handleTouchMove(ev) {
      return handleMove(ev, "touch");
    };
    var handleEnd = function handleEnd() {
      activeResizeControl = resizeStartPosition = null;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };
    resizer.querySelectorAll("[data-image-resizer-control]").forEach(function (ctrl) {
      var handleStart = function handleStart(ev, device) {
        // Only allow mouse events to start the resize on the primary button
        // click.
        if (device === "mouse" && ev.button !== 0) {
          return;
        }
        if (!editor.isEditable || activeResizeControl) {
          return;
        }
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("mouseup", handleEnd);
        document.addEventListener("touchend", handleEnd);
        ev.preventDefault();
        activeResizeControl = ctrl.dataset.imageResizerControl;
        originalWidth = editor.getAttributes("image").width || naturalWidth;
        resizeStartPosition = getEventPagePosition(ev, device).xPos;
      };
      var handleMouseStart = function handleMouseStart(ev) {
        return handleStart(ev, "mouse");
      };
      var handleTouchStart = function handleTouchStart(ev) {
        return handleStart(ev, "touch");
      };
      ctrl.addEventListener("mousedown", handleMouseStart);
      ctrl.addEventListener("touchstart", handleTouchStart);
    });
    var dom = document.createElement("div");
    dom.dataset.imageResizer = "";
    dom.append(resizer);
    return {
      dom: dom,
      contentDOM: contentDOM,
      update: function update(updatedNode) {
        if (updatedNode.type !== self.type) {
          return false;
        }
        var _updatedNode$attrs = updatedNode.attrs,
          alt = _updatedNode$attrs.alt,
          src = _updatedNode$attrs.src,
          title = _updatedNode$attrs.title,
          width = _updatedNode$attrs.width;

        // We set the value through an attribute change here because otherwise
        // we would trigger a mutation in the DOM which causes the update method
        // to be called recursively.
        dimensions.width.dataset.imageResizerDimensionValue = currentWidth;
        dimensions.height.dataset.imageResizerDimensionValue = currentHeight;
        img.alt = alt;
        if (currentSrc !== src) {
          img.src = src;
          currentSrc = src;
        }
        if (title) {
          img.title = title;
        } else {
          img.removeAttribute("title");
        }
        if (width) {
          img.width = width;
        } else {
          img.removeAttribute("width");
        }
        return true;
      }
    };
  };
});

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/indent/index.js":
/*!*****************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/indent/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}


// The node types for which indentation is allowed
var allowedNodeTypes = ["heading", "paragraph"];

/**
 * Helper method to check whether one of the allowed type nodes is currently
 * active where the indentation can be performed on.
 *
 * @param {Object} editor The editor instance.
 * @returns {Boolean} A boolean indicating if an allowed type node is active
 */
var allowedNodeActive = function allowedNodeActive(editor) {
  return allowedNodeTypes.some(function (type) {
    return editor.isActive(type);
  });
};

/**
 * Finds the closest allowed type node from the given position. Traversese the
 * document depth upwards to search through all the node parents.
 *
 * @param {Object} position The position where to look for
 * @returns {Node|null} The allowed node or null if no allowed node is found
 */
var closestAllowedNode = function closestAllowedNode(position) {
  var depth = position.depth;
  var _loop = function _loop() {
    var node = position.node(depth);
    if (allowedNodeTypes.some(function (type) {
      return node.type.name === type;
    })) {
      return {
        v: node
      };
    }
    depth -= 1;
  };
  while (depth > 0) {
    var _ret = _loop();
    if (_typeof(_ret) === "object") return _ret.v;
  }
  return null;
};

/**
 * Indent extension for the Tiptap editor.
 *
 * Originally based on the following MIT licensed code:
 * https://github.com/ueberdosis/tiptap/issues/1036#issuecomment-1000983233
 * https://github.com/evanfuture/tiptaptop-extension-indent
 *
 * License as specified at:
 * https://github.com/evanfuture/tiptaptop-extension-indent
 *
 * The code has been simplified and modified to fit better the needs of Decidim.
 *
 * Authors/Credits: Jeet Mandaliya (@sereneinserenade),
 *   Evan Payne (@evanfuture), @danline, YukiYama (@yuyuyukie)
 */
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Extension.create({
  name: "indent",
  addOptions: function addOptions() {
    return {
      minIndentLevel: 0,
      maxIndentLevel: 10,
      HTMLAttributes: {}
    };
  },
  addGlobalAttributes: function addGlobalAttributes() {
    var defaultIndentLevel = 0;
    return [{
      types: allowedNodeTypes,
      attributes: {
        indent: {
          "default": defaultIndentLevel,
          renderHTML: function renderHTML(attributes) {
            if (attributes.indent < 1) {
              return {};
            }
            return {
              "class": "editor-indent-".concat(attributes.indent)
            };
          },
          parseHTML: function parseHTML(element) {
            // The "ql" prefix here is to maintain backwards compatibility
            // with the old editor. The new prefix is editor-indent-X where X
            // is the current indentation level.
            var regexp = /^(editor|ql)-indent-([0-9]+)/;
            var indentClass = Array.from(element.classList).find(function (cls) {
              return regexp.test(cls);
            });
            if (!indentClass) {
              return defaultIndentLevel;
            }
            return parseInt(indentClass.match(regexp)[2], 10);
          }
        }
      }
    }];
  },
  addCommands: function addCommands() {
    var _this = this;
    var updateIndent = function updateIndent(modifier, _ref) {
      var editor = _ref.editor,
        state = _ref.state,
        dispatch = _ref.dispatch,
        commands = _ref.commands;
      if (!allowedNodeActive(editor)) {
        return false;
      }
      var node = closestAllowedNode(state.selection.$head);
      if (node === null) {
        return false;
      }
      var indent = node.attrs.indent + modifier;
      if (indent < _this.options.minIndentLevel || indent > _this.options.maxIndentLevel) {
        return false;
      }
      if (dispatch) {
        return commands.updateAttributes(node.type.name, {
          indent: indent
        });
      }
      return true;
    };
    return {
      indent: function indent() {
        return function (_ref2) {
          var editor = _ref2.editor,
            state = _ref2.state,
            commands = _ref2.commands,
            dispatch = _ref2.dispatch;
          if (editor.isActive("listItem")) {
            if (dispatch) {
              return commands.sinkListItem("listItem");
            }
            return true;
          }
          return updateIndent(1, {
            editor: editor,
            state: state,
            dispatch: dispatch,
            commands: commands
          });
        };
      },
      outdent: function outdent() {
        return function (_ref3) {
          var editor = _ref3.editor,
            state = _ref3.state,
            commands = _ref3.commands,
            dispatch = _ref3.dispatch;
          if (editor.isActive("listItem")) {
            // When the list item depth is at 3 it means that the list is at the
            // top level because of the following structure:
            // <ul><!-- depth: 1 -->
            //   <li><!-- depth: 2 -->
            //     <p>Content</p><!-- depth: 3 -->
            //   </li>
            // </ul>
            //
            // We do not allow outdent at the top level of the list.
            if (state.selection.$head.depth === 3) {
              return false;
            }
            if (dispatch) {
              return commands.liftListItem("listItem");
            }
            return true;
          }
          return updateIndent(-1, {
            editor: editor,
            state: state,
            dispatch: dispatch,
            commands: commands
          });
        };
      }
    };
  },
  addKeyboardShortcuts: function addKeyboardShortcuts() {
    var _this2 = this;
    var indent = function indent() {
      if (!_this2.editor.can().indent()) {
        return false;
      }
      return _this2.editor.commands.indent();
    };
    var outdent = function outdent() {
      if (!_this2.editor.can().outdent()) {
        return false;
      }
      return _this2.editor.commands.outdent();
    };
    return {
      Tab: indent,
      "Shift-Tab": outdent,
      Backspace: function Backspace() {
        if (_this2.editor.isActive("listItem")) {
          return false;
        }

        // With the backspace we only allow outdent when the cursor is at the
        // beginning of the line.
        if (_this2.editor.state.selection.$head.parentOffset > 0) {
          return false;
        }
        return outdent();
      },
      "Mod-]": indent,
      "Mod-[": outdent
    };
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/link/bubble_menu.js":
/*!*********************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/link/bubble_menu.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");
/* harmony import */ var src_decidim_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/i18n */ "./app/packs/src/decidim/i18n.js");
/* harmony import */ var src_decidim_editor_common_bubble_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/editor/common/bubble_menu */ "./app/packs/src/decidim/editor/common/bubble_menu.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}



var LinkBubbleMenu = /*#__PURE__*/function (_BubbleMenu) {
  _inherits(LinkBubbleMenu, _BubbleMenu);
  var _super = _createSuper(LinkBubbleMenu);
  function LinkBubbleMenu() {
    _classCallCheck(this, LinkBubbleMenu);
    return _super.apply(this, arguments);
  }
  _createClass(LinkBubbleMenu, [{
    key: "shouldDisplay",
    value: function shouldDisplay() {
      return this.editor.isActive("link");
    }
  }, {
    key: "display",
    value: function display() {
      var _this$editor$getAttri = this.editor.getAttributes("link"),
        href = _this$editor$getAttri.href;
      this.element.querySelector("[data-linkbubble-value]").textContent = href;
    }
  }, {
    key: "handleAction",
    value: function handleAction(action) {
      if (action === "remove") {
        this.editor.chain().focus(null, {
          scrollIntoView: false
        }).unsetLink().run();
      } else {
        this.editor.commands.linkDialog();
      }
    }
  }]);
  return LinkBubbleMenu;
}(src_decidim_editor_common_bubble_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
var createElement = function createElement() {
  var i18n = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_0__.getDictionary)("editor.extensions.link.bubbleMenu");
  var element = document.createElement("div");
  element.dataset.linkbubble = "";
  element.innerHTML = "\n    <span data-linkbubble-content>\n      ".concat(i18n.url, ":\n      <span data-linkbubble-value></span>\n    </span>\n    <span data-linkbubble-actions>\n      <button type=\"button\" data-action=\"edit\">").concat(i18n.edit, "</button>\n      <button type=\"button\" data-action=\"remove\">").concat(i18n.remove, "</button>\n    </span>\n  ");
  return element;
};
/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  return new LinkBubbleMenu({
    editor: editor,
    element: createElement(),
    pluginKey: new prosemirror_state__WEBPACK_IMPORTED_MODULE_2__.PluginKey("LinkBubble")
  });
});

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/link/index.js":
/*!***************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/link/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-link */ "./node_modules/@tiptap/extension-link/dist/index.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");
/* harmony import */ var src_decidim_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/i18n */ "./app/packs/src/decidim/i18n.js");
/* harmony import */ var src_decidim_editor_common_input_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/editor/common/input_dialog */ "./app/packs/src/decidim/editor/common/input_dialog.js");
/* harmony import */ var src_decidim_editor_extensions_link_bubble_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/editor/extensions/link/bubble_menu */ "./app/packs/src/decidim/editor/extensions/link/bubble_menu.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}





/* harmony default export */ __webpack_exports__["default"] = (_tiptap_extension_link__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addStorage: function addStorage() {
    return {
      bubbleMenu: null
    };
  },
  onCreate: function onCreate() {
    var _this$parent;
    (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.call(this);
    this.storage.bubbleMenu = (0,src_decidim_editor_extensions_link_bubble_menu__WEBPACK_IMPORTED_MODULE_3__["default"])(this.editor);
  },
  onDestroy: function onDestroy() {
    var _this$parent2;
    (_this$parent2 = this.parent) === null || _this$parent2 === void 0 ? void 0 : _this$parent2.call(this);
    this.storage.bubbleMenu.destroy();
    this.storage.bubbleMenu = null;
  },
  addOptions: function addOptions() {
    var _this$parent3;
    return _objectSpread(_objectSpread({}, (_this$parent3 = this.parent) === null || _this$parent3 === void 0 ? void 0 : _this$parent3.call(this)), {}, {
      allowTargetControl: false,
      HTMLAttributes: {
        target: "_blank",
        "class": null
      }
    });
  },
  addCommands: function addCommands() {
    var _this$parent4,
      _this = this;
    var i18n = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_1__.getDictionary)("editor.extensions.link");
    return _objectSpread(_objectSpread({}, (_this$parent4 = this.parent) === null || _this$parent4 === void 0 ? void 0 : _this$parent4.call(this)), {}, {
      toggleLinkBubble: function toggleLinkBubble() {
        return function (_ref) {
          var dispatch = _ref.dispatch;
          if (dispatch) {
            if (_this.editor.isActive("link")) {
              _this.storage.bubbleMenu.show();
              return true;
            }
            _this.storage.bubbleMenu.hide();
            return false;
          }
          return _this.editor.isActive("link");
        };
      },
      linkDialog: function linkDialog() {
        return /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref2) {
            var dispatch, commands, allowTargetControl, _this$editor$getAttri, href, target, inputs, linkDialog, dialogState;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  dispatch = _ref2.dispatch, commands = _ref2.commands;
                  if (!dispatch) {
                    _context.next = 21;
                    break;
                  }
                  // If the cursor is within the link but the link is not selected, the
                  // link would not be correctly updated. Also if only a part of the
                  // link is selected, the link would be split to separate links, only
                  // the current selection getting the updated link URL.
                  commands.extendMarkRange("link");
                  _this.storage.bubbleMenu.hide();
                  allowTargetControl = _this.options.allowTargetControl;
                  _this$editor$getAttri = _this.editor.getAttributes("link"), href = _this$editor$getAttri.href, target = _this$editor$getAttri.target;
                  inputs = {
                    href: {
                      type: "text",
                      label: i18n.hrefLabel
                    }
                  };
                  if (allowTargetControl) {
                    inputs.target = {
                      type: "select",
                      label: i18n.targetLabel,
                      options: [{
                        value: "",
                        label: i18n["targets.default"]
                      }, {
                        value: "_blank",
                        label: i18n["targets.blank"]
                      }]
                    };
                  }
                  linkDialog = new src_decidim_editor_common_input_dialog__WEBPACK_IMPORTED_MODULE_2__["default"](_this.editor, {
                    inputs: inputs
                  });
                  _context.next = 11;
                  return linkDialog.toggle({
                    href: href,
                    target: target
                  });
                case 11:
                  dialogState = _context.sent;
                  href = linkDialog.getValue("href");
                  target = linkDialog.getValue("target");
                  if (!allowTargetControl) {
                    target = "_blank";
                  } else if (!target || target.length < 1) {
                    target = null;
                  }
                  if (!(dialogState !== "save")) {
                    _context.next = 18;
                    break;
                  }
                  _this.editor.chain().focus(null, {
                    scrollIntoView: false
                  }).toggleLinkBubble().run();
                  return _context.abrupt("return", false);
                case 18:
                  if (!(!href || href.trim().length < 1)) {
                    _context.next = 20;
                    break;
                  }
                  return _context.abrupt("return", _this.editor.chain().focus(null, {
                    scrollIntoView: false
                  }).unsetLink().run());
                case 20:
                  return _context.abrupt("return", _this.editor.chain().focus(null, {
                    scrollIntoView: false
                  }).setLink({
                    href: href,
                    target: target
                  }).toggleLinkBubble().run());
                case 21:
                  return _context.abrupt("return", true);
                case 22:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }();
      }
    });
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    var _this$parent5;
    var editor = this.editor;
    return [].concat(_toConsumableArray(((_this$parent5 = this.parent) === null || _this$parent5 === void 0 ? void 0 : _this$parent5.call(this)) || {}), [new prosemirror_state__WEBPACK_IMPORTED_MODULE_4__.Plugin({
      props: {
        handleDoubleClick: function handleDoubleClick() {
          if (!editor.isActive("link")) {
            return false;
          }
          editor.chain().focus().linkDialog().run();
          return true;
        }
      }
    })]);
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/mention/index.js":
/*!******************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/mention/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_extension_mention__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-mention */ "./node_modules/@tiptap/extension-mention/dist/index.js");
/* harmony import */ var src_decidim_editor_common_suggestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/editor/common/suggestion */ "./app/packs/src/decidim/editor/common/suggestion.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}


var searchUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(queryText) {
    var query;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          query = "{\n    users(filter: { wildcard: \"".concat(queryText, "\" }) {\n      nickname,\n      name,\n      avatarUrl,\n      __typename,\n      ...on UserGroup { membersCount }\n    }\n  }");
          return _context.abrupt("return", fetch("/api", {
            method: "POST",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              query: query
            })
          }).then(function (response) {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Could not retrieve data");
          }).then(function (json) {
            return json.data.users || [];
          }));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function searchUsers(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_extension_mention__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addOptions: function addOptions() {
    var _this$parent;
    var parentOptions = (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.call(this);
    return _objectSpread(_objectSpread({}, parentOptions), {}, {
      renderLabel: function renderLabel(_ref2) {
        var _node$attrs$label;
        var node = _ref2.node;
        // The labels are formed based on the nicknames returned by the API
        // which already contain the suggestion character, so there is no need
        // to display it twice.
        return "".concat((_node$attrs$label = node.attrs.label) !== null && _node$attrs$label !== void 0 ? _node$attrs$label : node.attrs.id);
      },
      suggestion: _objectSpread(_objectSpread({}, parentOptions === null || parentOptions === void 0 ? void 0 : parentOptions.suggestion), {}, {
        allowSpaces: true,
        items: function () {
          var _items = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
            var query, data, sorted;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  query = _ref3.query;
                  if (!(query.length < 2)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return", []);
                case 3:
                  _context2.next = 5;
                  return searchUsers(query);
                case 5:
                  data = _context2.sent;
                  sorted = data.sort(function (user) {
                    return user.nickname.slice(1);
                  });
                  return _context2.abrupt("return", sorted.slice(0, 5));
                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function items(_x2) {
            return _items.apply(this, arguments);
          }
          return items;
        }(),
        render: (0,src_decidim_editor_common_suggestion__WEBPACK_IMPORTED_MODULE_1__.createSuggestionRenderer)(this, {
          itemConverter: function itemConverter(user) {
            return {
              id: user.nickname,
              label: "".concat(user.nickname, " (").concat(user.name, ")")
            };
          }
        })
      })
    });
  },
  addNodeView: function addNodeView() {
    return (0,src_decidim_editor_common_suggestion__WEBPACK_IMPORTED_MODULE_1__.createNodeView)(this);
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/ordered_list/index.js":
/*!***********************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/ordered_list/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-ordered-list */ "./node_modules/@tiptap/extension-ordered-list/dist/index.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");
/* harmony import */ var src_decidim_editor_utilities_paste_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/editor/utilities/paste_transform */ "./app/packs/src/decidim/editor/utilities/paste_transform.js");
var _excluded = ["start"];
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}




var allowedListTypes = ["a", "A", "i", "I"];
var covertListStyleToType = function covertListStyleToType(style) {
  switch (style) {
    case "lower-alpha":
    case "lower-latin":
      return "a";
    case "upper-alpha":
    case "upper-latin":
      return "A";
    case "lower-roman":
      return "i";
    case "upper-roman":
      return "I";
    default:
      return "1";
  }
};

/**
 * This extension is customized in order to support the different styles of
 * ordered lists, such as the following.
 *
 * type "a":
 *   a) List item 1
 *   b) List item 2
 *   c) List item 3
 *
 * type "A":
 *   A) List item 1
 *   B) List item 2
 *   C) List item 3
 *
 * type "i":
 *   i) List item 1
 *   ii) List item 2
 *   iii) List item 3
 *
 * type "I":
 *   I) List item 1
 *   II) List item 2
 *   III) List item 3
 *
 * See: https://github.com/ueberdosis/tiptap/issues/3726
 */
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addAttributes: function addAttributes() {
    var _this$parent;
    return _objectSpread(_objectSpread({}, (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.call(this)), {}, {
      type: {
        "default": null,
        parseHTML: function parseHTML(element) {
          var type = element.getAttribute("type");
          if (allowedListTypes.includes(type)) {
            return type;
          }

          // Google Docs
          var listItem = element.querySelector("li");
          if (listItem) {
            type = covertListStyleToType(listItem.style.listStyleType);
            if (allowedListTypes.includes(type)) {
              return type;
            }
          }

          // Office 365
          type = covertListStyleToType(element.style.listStyleType);
          if (allowedListTypes.includes(type)) {
            return type;
          }
          return null;
        }
      }
    });
  },
  /**
   * Overridden render method to add the `data-type` attribute for the typed
   * ordered lists as a workaround to style these lists properly. The following
   * issue with the CSS attribute selectors for the `type` attribute prevents
   * styling them properly otherwise: https://stackoverflow.com/q/53099708.
   *
   * The issue cannot be solved without this until the case sensitivity selector
   * is implemented by browsers and widely available:
   * https://caniuse.com/mdn-css_selectors_attribute_case_sensitive_modifier
   *
   * This has been already agreed by the CSS working group as per:
   * https://github.com/w3c/csswg-drafts/commit/de57526
   *
   * For further details, see:
   * https://github.com/tailwindlabs/tailwindcss-typography/issues/296
   *
   * @param {Object} attributes The attributes object containing the
   *   `HTMLAttributes` key for the attributes to be rendered
   * @returns {Array} The node definition array as defined by TipTap
   */
  renderHTML: function renderHTML(_ref) {
    var HTMLAttributes = _ref.HTMLAttributes;
    var start = HTMLAttributes.start,
      attributesWithoutStart = _objectWithoutProperties(HTMLAttributes, _excluded);
    var attrs = null;
    if (start === 1) {
      attrs = (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_2__.mergeAttributes)(this.options.HTMLAttributes, attributesWithoutStart);
    } else {
      attrs = (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_2__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes);
    }
    if (attrs.type) {
      var _attrs, _dataType, _attrs$_dataType;
      (_attrs$_dataType = (_attrs = attrs)[_dataType = "data-type"]) !== null && _attrs$_dataType !== void 0 ? _attrs$_dataType : _attrs[_dataType] = attrs.type;
    }
    return ["ol", attrs, 0];
  },
  addCommands: function addCommands() {
    var _this$parent2,
      _this = this;
    return _objectSpread(_objectSpread({}, (_this$parent2 = this.parent) === null || _this$parent2 === void 0 ? void 0 : _this$parent2.call(this)), {}, {
      setOrderedListType: function setOrderedListType(type) {
        return function (_ref2) {
          var commands = _ref2.commands,
            dispatch = _ref2.dispatch;
          var listActive = _this.editor.isActive("orderedList");
          if (dispatch && listActive) {
            return commands.updateAttributes("orderedList", {
              type: type
            });
          }
          return listActive;
        };
      }
    });
  },
  addKeyboardShortcuts: function addKeyboardShortcuts() {
    var _this2 = this,
      _this$parent3;
    var currentType = function currentType() {
      return _this2.editor.getAttributes("orderedList").type;
    };
    var determineType = function determineType(type, direction) {
      var idx = allowedListTypes.indexOf(type) + direction;
      if (idx === -2) {
        idx = allowedListTypes.length - 1;
      } else if (idx < 0 || idx >= allowedListTypes.length) {
        return null;
      }
      return allowedListTypes[idx];
    };
    var listTypeChange = function listTypeChange(direction) {
      if (!_this2.editor.isActive("orderedList")) {
        return false;
      }
      var type = determineType(currentType(), direction);
      if (!_this2.editor.can().setOrderedListType(type)) {
        return false;
      }
      return _this2.editor.commands.setOrderedListType(type);
    };
    return _objectSpread(_objectSpread({}, (_this$parent3 = this.parent) === null || _this$parent3 === void 0 ? void 0 : _this$parent3.call(this)), {}, {
      "Alt-Shift-ArrowUp": function AltShiftArrowUp() {
        return listTypeChange(-1);
      },
      "Alt-Shift-ArrowDown": function AltShiftArrowDown() {
        return listTypeChange(1);
      }
    });
  },
  /**
   * Adds a plugin that modifies the pasted HTML before it is passed to the
   * editor to fix some problems in the pasted content structure from different
   * online and desktop editors.
   *
   * See: https://github.com/ueberdosis/tiptap/issues/3751
   *
   * @returns {Array} The ProseMirror plugins provided by this extension
   */
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
      props: {
        transformPastedHTML: function transformPastedHTML(html) {
          return (0,src_decidim_editor_utilities_paste_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(html);
        }
      }
    })];
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/extensions/video_embed/index.js":
/*!**********************************************************************!*\
  !*** ./app/packs/src/decidim/editor/extensions/video_embed/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.js");
/* harmony import */ var src_decidim_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/i18n */ "./app/packs/src/decidim/i18n.js");
/* harmony import */ var src_decidim_editor_common_input_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/editor/common/input_dialog */ "./app/packs/src/decidim/editor/common/input_dialog.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}




var YOUTUBE_REGEX = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(.+)?$/;
var YOUTUBE_REGEX_GLOBAL = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(.+)?$/g;
var VIMEO_REGEX = /^(https?:\/\/)?(www\.|player\.)?(vimeo\.com)(.+)?$/;
var VIMEO_REGEX_GLOBAL = /^(https?:\/\/)?(www\.|player\.)?(vimeo\.com)(.+)?$/g;
var isValidYoutubeUrl = function isValidYoutubeUrl(url) {
  return url.match(YOUTUBE_REGEX);
};
var isValidVimeoUrl = function isValidVimeoUrl(url) {
  return url.match(VIMEO_REGEX);
};
var getEmbedUrlFromYoutubeUrl = function getEmbedUrlFromYoutubeUrl(options) {
  var embedUrl = "https://www.youtube-nocookie.com/embed/";
  var url = options.url;

  // if is already an embed url, return it
  if (url.includes("/embed/")) {
    return url;
  }

  // if is a youtu.be url, get the id after the /
  if (url.includes("youtu.be")) {
    var id = url.split("/").pop();
    if (!id) {
      return null;
    }
    return "".concat(embedUrl).concat(id);
  }
  var videoIdRegex = /v=([-\w]+)/gm;
  var matches = videoIdRegex.exec(url);
  if (!matches || !matches[1]) {
    return null;
  }
  var outputUrl = "".concat(embedUrl).concat(matches[1]);
  var params = {
    ccLoadPolicy: 1,
    modestbranding: 1
  };
  var urlParams = {};
  Object.keys(params).forEach(function (key) {
    var urlKey = key.replace(/[A-Z]/g, function (_char) {
      return "_".concat(_char.toLowerCase());
    });
    urlParams[urlKey] = params[key];
  });
  return "".concat(outputUrl, "?").concat(new URLSearchParams(urlParams));
};
var getEmbedUrlFromVimeoUrl = function getEmbedUrlFromVimeoUrl(options) {
  var embedUrl = "https://player.vimeo.com/video/";
  var url = options.url;
  var cleanUrl = url.split("?").shift();
  var id = cleanUrl.split("/").pop();
  return "".concat(embedUrl).concat(id);
};
var getEmbedUrlFromVideoUrl = function getEmbedUrlFromVideoUrl(options) {
  var url = options.url;
  if (isValidYoutubeUrl(url)) {
    return getEmbedUrlFromYoutubeUrl(options);
  } else if (isValidVimeoUrl(url)) {
    return getEmbedUrlFromVimeoUrl(options);
  }
  return url;
};

/**
 * Video embed extension for the Tiptap editor.
 *
 * Based on the original `@tiptap/extension-youtube` extension with support to
 * other embedding services than only YouTube.
 */
/* harmony default export */ __webpack_exports__["default"] = (_tiptap_core__WEBPACK_IMPORTED_MODULE_2__.Node.create({
  name: "videoEmbed",
  draggable: true,
  addOptions: function addOptions() {
    return {
      height: null,
      width: null,
      inline: false
    };
  },
  inline: function inline() {
    return this.options.inline;
  },
  group: function group() {
    if (this.options.inline) {
      return "inline";
    }
    return "block";
  },
  addAttributes: function addAttributes() {
    return {
      src: {
        "default": null,
        parseHTML: function parseHTML(element) {
          var _element$parentElemen, _wrapper$dataset;
          var wrapper = element === null || element === void 0 ? void 0 : (_element$parentElemen = element.parentElement) === null || _element$parentElemen === void 0 ? void 0 : _element$parentElemen.parentElement;
          var embedUrl = wrapper === null || wrapper === void 0 ? void 0 : (_wrapper$dataset = wrapper.dataset) === null || _wrapper$dataset === void 0 ? void 0 : _wrapper$dataset.videoEmbed;
          if (embedUrl && embedUrl.length > 0) {
            return embedUrl;
          }
          return element.src;
        }
      },
      title: {
        "default": null
      },
      width: {
        "default": this.options.width
      },
      height: {
        "default": this.options.height
      },
      frameborder: {
        "default": 0
      },
      allowfullscreen: {
        "default": true
      }
    };
  },
  parseHTML: function parseHTML() {
    return [{
      tag: "div[data-video-embed] div iframe"
    }];
  },
  addCommands: function addCommands() {
    var _this = this;
    var i18n = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_0__.getDictionary)("editor.extensions.videoEmbed");
    return {
      setVideo: function setVideo(options) {
        return function (_ref) {
          var commands = _ref.commands;
          return commands.insertContent({
            type: _this.name,
            attrs: options
          });
        };
      },
      videoEmbedDialog: function videoEmbedDialog() {
        return /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref2) {
            var dispatch, videoDialog, _this$editor$getAttri, src, title, dialogState;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  dispatch = _ref2.dispatch;
                  if (!dispatch) {
                    _context.next = 15;
                    break;
                  }
                  videoDialog = new src_decidim_editor_common_input_dialog__WEBPACK_IMPORTED_MODULE_1__["default"](_this.editor, {
                    inputs: {
                      src: {
                        type: "text",
                        label: i18n.urlLabel
                      },
                      title: {
                        type: "text",
                        label: i18n.titleLabel
                      }
                    }
                  });
                  _this$editor$getAttri = _this.editor.getAttributes("videoEmbed"), src = _this$editor$getAttri.src, title = _this$editor$getAttri.title;
                  _context.next = 6;
                  return videoDialog.toggle({
                    src: src,
                    title: title
                  });
                case 6:
                  dialogState = _context.sent;
                  if (!(dialogState !== "save")) {
                    _context.next = 9;
                    break;
                  }
                  return _context.abrupt("return", false);
                case 9:
                  src = videoDialog.getValue("src");
                  title = videoDialog.getValue("title");
                  if (!(!src || src.length < 1)) {
                    _context.next = 14;
                    break;
                  }
                  _this.editor.commands.focus(null, {
                    scrollIntoView: false
                  });
                  return _context.abrupt("return", false);
                case 14:
                  return _context.abrupt("return", _this.editor.chain().setVideo({
                    src: src,
                    title: title
                  }).focus(null, {
                    scrollIntoView: false
                  }).run());
                case 15:
                  return _context.abrupt("return", true);
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }();
      }
    };
  },
  addPasteRules: function addPasteRules() {
    return [(0,_tiptap_core__WEBPACK_IMPORTED_MODULE_2__.nodePasteRule)({
      find: YOUTUBE_REGEX_GLOBAL,
      type: this.type,
      getAttributes: function getAttributes(match) {
        return {
          src: match.input,
          title: ""
        };
      }
    }), (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_2__.nodePasteRule)({
      find: VIMEO_REGEX_GLOBAL,
      type: this.type,
      getAttributes: function getAttributes(match) {
        return {
          src: match.input,
          title: ""
        };
      }
    })];
  },
  renderHTML: function renderHTML(_ref4) {
    var HTMLAttributes = _ref4.HTMLAttributes;
    var src = HTMLAttributes.src;
    HTMLAttributes.src = getEmbedUrlFromVideoUrl({
      url: src
    });
    return ["div", {
      "class": "editor-content-videoEmbed",
      "data-video-embed": src
    }, ["div", {}, ["iframe", (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_2__.mergeAttributes)({
      width: this.options.width,
      height: this.options.height
    }, HTMLAttributes)]]];
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    var editor = this.editor;
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__.Plugin({
      props: {
        handleDoubleClick: function handleDoubleClick() {
          if (!editor.isActive("videoEmbed")) {
            return false;
          }
          editor.chain().focus().videoEmbedDialog().run();
          return true;
        }
      }
    })];
  }
}));

/***/ }),

/***/ "./app/packs/src/decidim/editor/index.js":
/*!***********************************************!*\
  !*** ./app/packs/src/decidim/editor/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createEditor; }
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");
/* harmony import */ var src_decidim_editor_extensions_decidim_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/editor/extensions/decidim_kit */ "./app/packs/src/decidim/editor/extensions/decidim_kit/index.js");
/* harmony import */ var src_decidim_editor_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/editor/toolbar */ "./app/packs/src/decidim/editor/toolbar.js");
/* harmony import */ var src_decidim_editor_common_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/editor/common/helpers */ "./app/packs/src/decidim/editor/common/helpers.js");





/**
 * Creates a new rich text editor instance.
 *
 * @param {HTMLElement} container The element that contains the editor.
 * @return {Editor} The rich text editor instance. 
 */
function createEditor(container) {
  var _container$dataset;
  var input = container.parentElement.querySelector("input[type=hidden]");
  var label = container.parentElement.querySelector("label");
  var editorContainer = container.querySelector(".editor-input");
  var editorAttributes = {
    role: "textbox",
    "aria-multiline": true
  };
  if (label) {
    var labelId = (0,src_decidim_editor_common_helpers__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("editorlabel");
    label.setAttribute("id", labelId);
    editorAttributes["aria-labelledby"] = labelId;
  }

  /**
   * Toolbar features can be one of:
   *
   * - basic = only basic controls without headings
   * - content = basic + headings
   * - full = basic + headings + image + video
   */
  var features = ((_container$dataset = container.dataset) === null || _container$dataset === void 0 ? void 0 : _container$dataset.toolbar) || "basic";
  var options = JSON.parse(container.dataset.options);
  var context = options.context,
    contentTypes = options.contentTypes;
  var decidimOptions = {};
  if (context !== "participant") {
    decidimOptions.link = {
      allowTargetControl: true
    };
  }
  if (input.hasAttribute("maxlength")) {
    decidimOptions.characterCount = {
      limit: parseInt(input.getAttribute("maxlength"), 10)
    };
  }
  if (features === "basic") {
    decidimOptions.heading = false;
  }
  if (features === "full") {
    decidimOptions.videoEmbed = true;
    var uploadImagesPath = options.uploadImagesPath,
      uploadDialogSelector = options.uploadDialogSelector;
    decidimOptions.image = {
      uploadDialogSelector: uploadDialogSelector,
      contentTypes: contentTypes.image,
      uploadImagesPath: uploadImagesPath
    };
  }
  if (container.classList.contains("js-hashtags")) {
    decidimOptions.hashtag = true;
  }
  if (container.classList.contains("js-mentions")) {
    decidimOptions.mention = true;
  }
  if (container.classList.contains("js-emojis")) {
    decidimOptions.emoji = true;
  }
  var editor = new _tiptap_core__WEBPACK_IMPORTED_MODULE_3__.Editor({
    element: editorContainer,
    editorProps: {
      attributes: editorAttributes
    },
    content: input.value,
    editable: !input.disabled,
    extensions: [src_decidim_editor_extensions_decidim_kit__WEBPACK_IMPORTED_MODULE_0__["default"].configure(decidimOptions)]
  });
  var toolbar = (0,src_decidim_editor_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"])(editor);
  container.insertBefore(toolbar, editorContainer);
  editor.on("update", function () {
    return input.value = editor.getHTML();
  });
  return editor;
}

/***/ }),

/***/ "./app/packs/src/decidim/editor/toolbar.js":
/*!*************************************************!*\
  !*** ./app/packs/src/decidim/editor/toolbar.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createEditorToolbar; }
/* harmony export */ });
/* harmony import */ var src_decidim_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/i18n */ "./app/packs/src/decidim/i18n.js");
/* harmony import */ var src_decidim_editor_utilities_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/editor/utilities/html */ "./app/packs/src/decidim/editor/utilities/html.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'images/decidim/remixicon.symbol.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var createIcon = function createIcon(iconName) {
  return "<svg class=\"editor-toolbar-icon\" role=\"img\" aria-hidden=\"true\">\n    <use href=\"".concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'images/decidim/remixicon.symbol.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), "#ri-").concat(iconName, "\" />\n  </svg>");
};
var createEditorToolbarGroup = function createEditorToolbarGroup() {
  return (0,src_decidim_editor_utilities_html__WEBPACK_IMPORTED_MODULE_1__["default"])("div").dom(function (el) {
    return el.classList.add("editor-toolbar-group");
  });
};
var createEditorToolbarToggle = function createEditorToolbarToggle(editor, _ref) {
  var type = _ref.type,
    label = _ref.label,
    icon = _ref.icon,
    action = _ref.action,
    _ref$activatable = _ref.activatable,
    activatable = _ref$activatable === void 0 ? true : _ref$activatable;
  return (0,src_decidim_editor_utilities_html__WEBPACK_IMPORTED_MODULE_1__["default"])("button").dom(function (ctrl) {
    ctrl.classList.add("editor-toolbar-control");
    ctrl.dataset.editorType = type;
    if (activatable) {
      ctrl.dataset.editorSelectionType = type;
    }
    ctrl.type = "button";
    ctrl.ariaLabel = label;
    ctrl.title = label;
    ctrl.innerHTML = createIcon(icon);
    ctrl.addEventListener("click", function (ev) {
      ev.preventDefault();
      editor.commands.focus();
      action();
    });
  });
};
var createEditorToolbarSelect = function createEditorToolbarSelect(editor, _ref2) {
  var type = _ref2.type,
    label = _ref2.label,
    options = _ref2.options,
    action = _ref2.action,
    _ref2$activatable = _ref2.activatable,
    activatable = _ref2$activatable === void 0 ? true : _ref2$activatable;
  return (0,src_decidim_editor_utilities_html__WEBPACK_IMPORTED_MODULE_1__["default"])("select").dom(function (ctrl) {
    ctrl.classList.add("editor-toolbar-control", "!pr-8");
    ctrl.dataset.editorType = type;
    if (activatable) {
      ctrl.dataset.editorSelectionType = type;
    }
    ctrl.ariaLabel = label;
    ctrl.title = label;
    options.forEach(function (_ref3) {
      var optionLabel = _ref3.label,
        value = _ref3.value;
      var option = document.createElement("option");
      option.setAttribute("value", value);
      option.textContent = optionLabel;
      ctrl.appendChild(option);
    });
    ctrl.addEventListener("change", function () {
      editor.commands.focus();
      action(ctrl.value);
    });
  });
};

/**
 * Creates the editor toolbar for the given editor instance.
 *
 * @param {Editor} editor An instance of the rich text editor.
 * @returns {HTMLElement} The toolbar element
 */
function createEditorToolbar(editor) {
  var i18n = (0,src_decidim_i18n__WEBPACK_IMPORTED_MODULE_0__.getDictionary)("editor.toolbar");
  var supported = {
    nodes: [],
    marks: [],
    extensions: []
  };
  editor.extensionManager.extensions.forEach(function (ext) {
    if (ext.type === "node") {
      supported.nodes.push(ext.name);
    } else if (ext.type === "mark") {
      supported.marks.push(ext.name);
    } else if (ext.type === "extension") {
      supported.extensions.push(ext.name);
    }
  });

  // Create the toolbar element
  var toolbar = (0,src_decidim_editor_utilities_html__WEBPACK_IMPORTED_MODULE_1__["default"])("div").dom(function (el) {
    return el.classList.add("editor-toolbar");
  }).append(
  // Text style controls
  createEditorToolbarGroup(editor).append(createEditorToolbarSelect(editor, {
    type: "heading",
    label: i18n["control.heading"],
    options: [{
      value: "normal",
      label: i18n["textStyle.normal"]
    }, {
      value: 1,
      label: i18n["textStyle.heading"].replace("%level%", 1)
    }, {
      value: 2,
      label: i18n["textStyle.heading"].replace("%level%", 2)
    }, {
      value: 3,
      label: i18n["textStyle.heading"].replace("%level%", 3)
    }, {
      value: 4,
      label: i18n["textStyle.heading"].replace("%level%", 4)
    }, {
      value: 5,
      label: i18n["textStyle.heading"].replace("%level%", 5)
    }, {
      value: 6,
      label: i18n["textStyle.heading"].replace("%level%", 6)
    }],
    action: function action(value) {
      if (value === "normal") {
        editor.commands.setParagraph();
      } else {
        editor.commands.toggleHeading({
          level: parseInt(value, 10)
        });
      }
    }
  }).render(supported.nodes.includes("heading")))).append(
  // Basic styling controls
  createEditorToolbarGroup(editor).append(createEditorToolbarToggle(editor, {
    type: "bold",
    icon: "bold",
    label: i18n["control.bold"],
    action: function action() {
      return editor.commands.toggleBold();
    }
  }).render(supported.marks.includes("bold")), createEditorToolbarToggle(editor, {
    type: "italic",
    icon: "italic",
    label: i18n["control.italic"],
    action: function action() {
      return editor.commands.toggleItalic();
    }
  }).render(supported.marks.includes("italic")), createEditorToolbarToggle(editor, {
    type: "underline",
    icon: "underline",
    label: i18n["control.underline"],
    action: function action() {
      return editor.commands.toggleUnderline();
    }
  }).render(supported.marks.includes("underline")), createEditorToolbarToggle(editor, {
    type: "hardBreak",
    icon: "text-wrap",
    label: i18n["control.hardBreak"],
    activatable: false,
    action: function action() {
      return editor.commands.setHardBreak();
    }
  }).render(supported.nodes.includes("hardBreak")))).append(
  // List controls
  createEditorToolbarGroup(editor).append(createEditorToolbarToggle(editor, {
    type: "orderedList",
    icon: "list-ordered",
    label: i18n["control.orderedList"],
    action: function action() {
      return editor.commands.toggleOrderedList();
    }
  }).render(supported.nodes.includes("orderedList")), createEditorToolbarToggle(editor, {
    type: "bulletList",
    icon: "list-unordered",
    label: i18n["control.bulletList"],
    action: function action() {
      return editor.commands.toggleBulletList();
    }
  }).render(supported.nodes.includes("bulletList")))).append(
  // Link and erase styles
  createEditorToolbarGroup(editor).append(createEditorToolbarToggle(editor, {
    type: "link",
    icon: "link",
    label: i18n["control.link"],
    action: function action() {
      return editor.commands.linkDialog();
    }
  }).render(supported.marks.includes("link")), createEditorToolbarToggle(editor, {
    type: "common:eraseStyles",
    icon: "eraser-line",
    label: i18n["control.common.eraseStyles"],
    activatable: false,
    action: function action() {
      if (editor.isActive("link") && editor.view.state.selection.empty) {
        var originalPos = editor.view.state.selection.anchor;
        editor.chain().focus().extendMarkRange("link").unsetLink().setTextSelection(originalPos).run();
      } else {
        editor.chain().focus().clearNodes().unsetAllMarks().run();
      }
    }
  }).render(supported.nodes.includes("heading") || supported.marks.includes("bold") || supported.marks.includes("italic") || supported.marks.includes("underline") || supported.nodes.includes("hardBreak") || supported.nodes.includes("orderedList") || supported.nodes.includes("bulletList") || supported.marks.includes("link")))).append(
  // Block styling
  createEditorToolbarGroup(editor).append(createEditorToolbarToggle(editor, {
    type: "codeBlock",
    icon: "code-line",
    label: i18n["control.codeBlock"],
    action: function action() {
      return editor.commands.toggleCodeBlock();
    }
  }).render(supported.nodes.includes("codeBlock")), createEditorToolbarToggle(editor, {
    type: "blockquote",
    icon: "double-quotes-l",
    label: i18n["control.blockquote"],
    action: function action() {
      return editor.commands.toggleBlockquote();
    }
  }).render(supported.nodes.includes("blockquote")))).append(
  // Indent and outdent
  createEditorToolbarGroup(editor).append(createEditorToolbarToggle(editor, {
    type: "indent:indent",
    icon: "indent-increase",
    label: i18n["control.indent.indent"],
    activatable: false,
    action: function action() {
      return editor.commands.indent();
    }
  }).render(supported.extensions.includes("indent")), createEditorToolbarToggle(editor, {
    type: "indent:outdent",
    icon: "indent-decrease",
    label: i18n["control.indent.outdent"],
    activatable: false,
    action: function action() {
      return editor.commands.outdent();
    }
  }).render(supported.extensions.includes("indent")))).append(
  // Multimedia
  createEditorToolbarGroup(editor).append(createEditorToolbarToggle(editor, {
    type: "videoEmbed",
    icon: "video-line",
    label: i18n["control.videoEmbed"],
    action: function action() {
      return editor.commands.videoEmbedDialog();
    }
  }).render(supported.nodes.includes("videoEmbed")), createEditorToolbarToggle(editor, {
    type: "image",
    icon: "image-line",
    label: i18n["control.image"],
    action: function action() {
      return editor.commands.imageDialog();
    }
  }).render(supported.nodes.includes("image")))).render();
  var selectionControls = toolbar.querySelectorAll(".editor-toolbar-control[data-editor-selection-type]");
  var headingSelect = toolbar.querySelector(".editor-toolbar-control[data-editor-type='heading']");
  var selectionUpdated = function selectionUpdated() {
    if (editor.isActive("heading")) {
      var _editor$getAttributes = editor.getAttributes("heading"),
        level = _editor$getAttributes.level;
      headingSelect.value = "".concat(level);
    } else if (headingSelect) {
      headingSelect.value = "normal";
    }
    selectionControls.forEach(function (ctrl) {
      if (editor.isActive(ctrl.dataset.editorSelectionType)) {
        ctrl.classList.add("active");
      } else {
        ctrl.classList.remove("active");
      }
    });
  };
  editor.on("update", selectionUpdated);
  editor.on("selectionUpdate", selectionUpdated);
  return toolbar;
}
;

/***/ }),

/***/ "./app/packs/src/decidim/editor/utilities/file.js":
/*!********************************************************!*\
  !*** ./app/packs/src/decidim/editor/utilities/file.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fileNameToTitle": function() { return /* binding */ fileNameToTitle; }
/* harmony export */ });
var fileNameToTitle = function fileNameToTitle(fileName) {
  return fileName.split(".").slice(0, -1).join(".");
};

/***/ }),

/***/ "./app/packs/src/decidim/editor/utilities/html.js":
/*!********************************************************!*\
  !*** ./app/packs/src/decidim/editor/utilities/html.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * Calls the provided function and returns the proxy object after the call.
 *
 * @param {*} proxy The proxy object to return after the call.
 * @param {Function} callable The method to call.
 * @returns {*} The provided proxy object
 */
var proxyCall = function proxyCall(proxy, callable) {
  return function () {
    callable.apply(void 0, arguments);
    return proxy;
  };
};

/**
 * Provides a HTML utility to control the HTML rendering more easily and add
 * support for conditional rendering.
 *
 * @param {String} tag The name of the HTML tag to be created.
 * @returns {Object} A proxy object to control the HTML rendering of the
 *   elements.
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  var el = document.createElement(tag);
  var proxy = {};
  proxy.dom = proxyCall(proxy, function (callback) {
    return callback(el);
  });
  proxy.append = proxyCall(proxy, function (element) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (rest.length > 0) {
      proxy.append(element);
      rest.forEach(function (subEl) {
        return proxy.append(subEl);
      });
      return;
    } else if (!element) {
      return;
    }
    if (element instanceof Function) {
      proxy.append(element());
    } else if ((element === null || element === void 0 ? void 0 : element.render) instanceof Function) {
      proxy.append(element.render());
    } else if (element instanceof Node && element.childNodes.length > 0) {
      el.appendChild(element);
    }
  });
  proxy.render = function (condition) {
    if (condition instanceof Function && !condition(el)) {
      return null;
    } else if (condition === false) {
      return null;
    }
    return el;
  };
  return proxy;
});

/***/ }),

/***/ "./app/packs/src/decidim/editor/utilities/paste_transform.js":
/*!*******************************************************************!*\
  !*** ./app/packs/src/decidim/editor/utilities/paste_transform.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeMsMetaSegments": function() { return /* binding */ removeMsMetaSegments; },
/* harmony export */   "transformMsCould": function() { return /* binding */ transformMsCould; },
/* harmony export */   "transformMsDesktop": function() { return /* binding */ transformMsDesktop; }
/* harmony export */ });
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var parseMsoListStyles = function parseMsoListStyles(doc) {
  var _doc$querySelector;
  var style = (_doc$querySelector = doc.querySelector("style")) === null || _doc$querySelector === void 0 ? void 0 : _doc$querySelector.textContent;
  if (!style) {
    return {};
  }
  var listStyles = {};
  _toConsumableArray(style.matchAll(/@list\s+(l\d+:level\d+)[\s]+\{([^}]+)\}/g)).forEach(function (match) {
    var styleDefs = {};
    match[2].replace(/[\s]+/g, "").split(";").forEach(function (styleDef) {
      var _styleDef$split = styleDef.split(":"),
        _styleDef$split2 = _slicedToArray(_styleDef$split, 2),
        key = _styleDef$split2[0],
        val = _styleDef$split2[1];
      styleDefs[key] = val;
    });
    listStyles[match[1]] = styleDefs;
  });
  return listStyles;
};
var detectMsoList = function detectMsoList(element) {
  var currentStyle = element.getAttribute("style");
  if (!currentStyle) {
    return {
      type: null,
      level: 1
    };
  }
  var listStyleMatch = currentStyle.match(/mso-list:(l\d+)\s(level\d+)/);
  if (listStyleMatch) {
    var _listStyleMatch = _slicedToArray(listStyleMatch, 3),
      type = _listStyleMatch[1],
      level = _listStyleMatch[2];
    return {
      type: type,
      level: parseInt(level.match(/\d/), 10)
    };
  }
  return {
    type: null,
    level: 1
  };
};
var getMsoListStyle = function getMsoListStyle(type, level, styleDefs) {
  if (type === null) {
    return {};
  }
  var typeStyle = styleDefs[type] || {};
  var levelStyle = styleDefs["".concat(type, ":level").concat(level)] || {};
  return Object.assign(typeStyle, levelStyle);
};
var converMsoListStyleToHtml = function converMsoListStyleToHtml(listStyle) {
  var tag = "ol",
    type = null;
  switch (listStyle["mso-level-number-format"]) {
    case "bullet":
      tag = "ul";
      break;
    case "alpha-lower":
    case "lower-alpha":
      type = "a";
      break;
    case "alpha-upper":
    case "upper-alpha":
      type = "A";
      break;
    case "roman-lower":
    case "lower-roman":
      type = "i";
      break;
    case "roman-upper":
    case "upper-roman":
      type = "I";
      break;
    default:
      type = "1";
      break;
  }
  return {
    tag: tag,
    type: type
  };
};
var removeMsMetaSegments = function removeMsMetaSegments(html) {
  return html.replace(/<!\[if\s+[^\]]+\]>((?!<!\[endif\])[\s\S])+<!\[endif\]>/g, "");
};

/**
 * Fixes issues pasting content from desktop version of Word. Replaces the flat
 * lists represented with `<p>` elements with actual list hierarchy based on the
 * data available in the HTML copied from desktop Word.
 *
 * See: https://github.com/ueberdosis/tiptap/issues/3756
 *
 * @param {String} html The original HTML pasted to the editor.
 * @returns {String} The transformed HTML that fixes the list markup to be
 *   correctly represented on an HTML document.
 */
var transformMsDesktop = function transformMsDesktop(html) {
  var _doc$querySelector2;
  var doc = document.createElement("div");
  doc.innerHTML = removeMsMetaSegments(html);
  var elements = doc.querySelectorAll([".MsoListParagraph", ".MsoListParagraphCxSpFirst", ".MsoListParagraphCxSpMiddle", ".MsoListParagraphCxSpLast"].join(", "));
  if (elements.length < 1) {
    return html;
  }
  var listStyles = parseMsoListStyles(doc);
  (_doc$querySelector2 = doc.querySelector("style")) === null || _doc$querySelector2 === void 0 ? void 0 : _doc$querySelector2.remove();
  var currentLevel = 1,
    currentList = null;
  elements.forEach(function (paragraph) {
    var _detectMsoList = detectMsoList(paragraph),
      msoType = _detectMsoList.type,
      level = _detectMsoList.level;
    var listStyle = getMsoListStyle(msoType, level, listStyles);
    var _converMsoListStyleTo = converMsoListStyleToHtml(listStyle),
      tag = _converMsoListStyleTo.tag,
      type = _converMsoListStyleTo.type;
    var li = document.createElement("li");
    var pa = document.createElement("p");
    pa.innerHTML = paragraph.innerHTML;
    li.append(pa);
    if (paragraph.classList.contains("MsoListParagraph") || paragraph.classList.contains("MsoListParagraphCxSpFirst")) {
      currentLevel = 1;
      currentList = document.createElement(tag);
      if (tag === "ol" && type) {
        currentList.setAttribute("type", type);
      }
      currentList.append(li);
      paragraph.replaceWith(currentList);
    } else {
      if (level > currentLevel) {
        currentLevel += 1;
        var subList = document.createElement(tag);
        if (tag === "ol" && type) {
          subList.setAttribute("type", type);
        }
        if (level === currentLevel) {
          subList.append(li);
        } else {
          var subLi = document.createElement("li");
          var subPa = document.createElement("p");
          subLi.append(subPa);
          subList.append(subLi);
        }
        currentList.lastElementChild.append(subList);
        currentList = subList;
      } else {
        while (level < currentLevel) {
          currentLevel -= 1;
          var candidate = currentList.parentNode.closest("ol, ul");
          if (candidate) {
            currentList = candidate;
          } else {
            currentLevel = level;
            break;
          }
        }
        currentList.append(li);
      }
      if (paragraph.classList.contains("MsoListParagraphCxSpLast")) {
        currentLevel = 1;
        currentList = null;
      }
      paragraph.remove();
    }
  });
  return doc.innerHTML;
};

/**
 * Fixes issues pasting content from Office 365. Modifies the list structure
 * to represent the correct sub-list hierarchy based on the data available in
 * the HTML copied from Office 365. Based on this, Tiptap is able to correctly
 * create the hierarchy structure for the lists.
 *
 * See: https://github.com/ueberdosis/tiptap/issues/3751
 *
 * @param {String} html The original HTML pasted to the editor.
 * @returns {String} The transformed HTML that fixes the list hierarchy to be
 *   correctly represented on an HTML document.
 */
var transformMsCould = function transformMsCould(html) {
  var doc = document.createElement("div");
  doc.innerHTML = html;

  // Fetch all the MS lists from the pasted content
  var lists = {};
  doc.querySelectorAll(".ListContainerWrapper").forEach(function (wrapper) {
    var _li$dataset$listid, _lists$_li$dataset$li;
    var li = wrapper.querySelector("li[data-listid]");
    (_lists$_li$dataset$li = lists[_li$dataset$listid = li.dataset.listid]) !== null && _lists$_li$dataset$li !== void 0 ? _lists$_li$dataset$li : lists[_li$dataset$listid] = [];
    lists[li.dataset.listid].push({
      wrapper: wrapper,
      level: parseInt(li.dataset.ariaLevel, 10)
    });
  });
  if (Object.keys(lists).length < 1) {
    return html;
  }

  // Move the list elements to the correct hierarchical positions
  Object.values(lists).forEach(function (list) {
    var _list$shift = list.shift(),
      parentWrapper = _list$shift.wrapper;
    var parent = parentWrapper.querySelector("ol, ul");
    parentWrapper.replaceWith(parent);
    var currentLevel = 1;
    var documentCurrentLevel = 1;
    list.forEach(function (_ref) {
      var wrapper = _ref.wrapper,
        level = _ref.level;
      var listElement = wrapper.querySelector("ol, ul");
      if (level > documentCurrentLevel) {
        var target = null;
        while (level > documentCurrentLevel) {
          documentCurrentLevel += 1;
          if (parent.lastElementChild) {
            currentLevel += 1;
            target = parent.lastElementChild;
          }
        }
        target.append(listElement);
        parent = listElement;
      } else {
        var _parent;
        while (level < currentLevel) {
          currentLevel -= 1;
          var candidate = parent.parentNode.closest("ol, ul");
          if (candidate) {
            parent = candidate;
          } else {
            currentLevel = level;
            break;
          }
        }
        documentCurrentLevel = level;
        (_parent = parent).append.apply(_parent, _toConsumableArray(listElement.querySelectorAll("li")));
        listElement.remove();
      }
      wrapper.remove();
    });
  });
  return doc.innerHTML;
};
var transformers = [transformMsDesktop, transformMsCould];
/* harmony default export */ __webpack_exports__["default"] = (function (html) {
  var _final = html;
  transformers.forEach(function (method) {
    return _final = method(_final);
  });
  return _final;
});

/***/ }),

/***/ "./app/packs/src/decidim/i18n.js":
/*!***************************************!*\
  !*** ./app/packs/src/decidim/i18n.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDictionary": function() { return /* binding */ createDictionary; },
/* harmony export */   "getDictionary": function() { return /* binding */ getDictionary; },
/* harmony export */   "getMessages": function() { return /* binding */ getMessages; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
/**
 * Gets the configured messages for Decidim. The configuration is passed from
 * the view to the JS within the layout template.
 *
 * @param {String | null} key The top-level key to fetch from the messages
 *   object or `null` to fetch all messages.
 * @returns {Object} The messages object
 */
var getMessages = function getMessages() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var allMessages = window.Decidim.config.get("messages");
  if (key === null) {
    return allMessages;
  }
  var messages = allMessages;
  key.split(".").forEach(function (part) {
    return messages = messages[part] || {};
  });
  return messages;
};

/**
 * Turns a deep messages object into a dictionary object with a single level and
 * the keys separated with a dot.
 *
 * @param {Object} messages The messages object
 * @param {String | null} prefix Prefix for the messages on recursive calls
 * @returns {Object} The converted dictionary object
 */
var createDictionary = function createDictionary(messages) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var _final = {};
  Object.keys(messages).forEach(function (key) {
    if (_typeof(messages[key]) === "object") {
      _final = _objectSpread(_objectSpread({}, _final), createDictionary(messages[key], "".concat(prefix).concat(key, ".")));
    } else if (key === "") {
      _final[(prefix === null || prefix === void 0 ? void 0 : prefix.replace(/\.$/, "")) || ""] = messages[key];
    } else {
      _final["".concat(prefix).concat(key)] = messages[key];
    }
  });
  return _final;
};

/**
 * Creates a dictionary object from the top-level messages object with the
 * provided key.
 *
 * @param {String | null} key The top-level message key to create the dictionary
 *   for
 * @returns {Object} The dictionary object
 */
var getDictionary = function getDictionary(key) {
  return createDictionary(getMessages(key));
};

/***/ })

}]);
//# sourceMappingURL=app_packs_src_decidim_editor_index_js.js.map