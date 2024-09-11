"use strict";
(self["webpackChunkdecidim_app"] = self["webpackChunkdecidim_app"] || []).push([["_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-decidim_awesome-0_10_2_app_packs_src_d-6c7de6"],{

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/custom_fields_renderer.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/custom_fields_renderer.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomFieldsRenderer; }
/* harmony export */ });
/* harmony import */ var src_decidim_decidim_awesome_forms_rich_text_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/forms/rich_text_plugin */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/rich_text_plugin.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__webpack_require__(/*! formBuilder/dist/form-render.min.js */ "./node_modules/formBuilder/dist/form-render.min.js");

var CustomFieldsRenderer = /*#__PURE__*/function () {
  // eslint-disable-line no-unused-vars
  function CustomFieldsRenderer(containerSelector) {
    _classCallCheck(this, CustomFieldsRenderer);
    this.containerSelector = containerSelector || ".proposal_custom_field:last";
    this.lang = this.getLang(window.DecidimAwesome.currentLocale);
  }
  _createClass(CustomFieldsRenderer, [{
    key: "getLang",
    value: function getLang(lang) {
      var langs = {
        // ar: 'ar-SA', // Not in decidim yet
        "ar": "ar-TN",
        "ca": "ca-ES",
        "cs": "cs-CZ",
        "da": "da-DK",
        "de": "de-DE",
        "el": "el-GR",
        "en": "en-US",
        "es": "es-ES",
        "fa": "fa-IR",
        "fi": "fi-FI",
        "fr": "fr-FR",
        "he": "he-IL",
        "hu": "hu-HU",
        "it": "it-IT",
        "ja": "ja-JP",
        "my": "my-MM",
        "nb": "nb-NO",
        "nl": "nl-NL",
        "pl": "pl-PL",
        "pt": "pt-BR",
        "qz": "qz-MM",
        "ro": "ro-RO",
        "ru": "ru-RU",
        "sl": "sl-SI",
        "th": "th-TH",
        "tr": "tr-TR",
        "uk": "uk-UA",
        "vi": "vi-VN",
        "zh-TW": "zh-TW",
        "zh": "zh-CN"
      };
      if (langs[lang]) {
        return langs[lang];
      }
      if (langs[lang.substr(0, 2)]) {
        return langs[lang.substr(0, 2)];
      }
      return "en-US";
    }

    /*
    * Creates an XML document with a subset of html-compatible dl/dd/dt elements
    * to store the custom fields answers
    */
  }, {
    key: "dataToXML",
    value: function dataToXML(data) {
      var $dl = $("<dl/>");
      var $dd = null,
        $div = null,
        $dt = null,
        datum = null,
        key = null,
        label = null,
        text = null,
        val = null;
      $dl.attr("class", "decidim_awesome-custom_fields");
      $dl.attr("data-generator", "decidim_awesome");
      $dl.attr("data-version", window.DecidimAwesome.version);
      for (key in data) {
        // eslint-disable-line guard-for-in
        // console.log("get the data!", key, data[key]);
        // Richtext plugin does not saves userdata, so we get it from the hidden input
        if (data[key].type === "textarea" && data[key].subtype === "richtext") {
          data[key].userData = [$("#".concat(data[key].name, "-input")).val()];
        }
        if (data[key].userData && data[key].userData.length) {
          $dt = $("<dt/>");
          $dt.text(data[key].label);
          $dt.attr("name", data[key].name);
          $dd = $("<dd/>");
          // console.log("data for", key, data[key].name, data[key])
          for (val in data[key].userData) {
            // eslint-disable-line guard-for-in
            $div = $("<div/>");
            label = data[key].userData[val];
            text = null;
            if (data[key].values) {
              datum = data[key].values.find(function (obj) {
                return obj.value === label;
              }); // eslint-disable-line no-loop-func
              if (datum) {
                // eslint-disable-line max-depth
                text = label;
                label = datum.label;
              }
            } else if (data[key].type === "date" && label) {
              datum = new Date(label).toLocaleDateString();
              if (datum) {
                // eslint-disable-line max-depth
                text = label;
                label = datum;
              }
            }
            // console.log("userData", text, "label", label, 'key', key, 'data', data)
            if (data[key].type === "textarea" && data[key].subtype === "richtext") {
              $div.html(label);
            } else {
              $div.text(label);
            }
            if (text) {
              $div.attr("alt", text);
            }
            $dd.append($div);
          }
          $dd.attr("id", data[key].name);
          $dd.attr("name", data[key].type);
          $dl.append($dt);
          $dl.append($dd);
        }
      }
      return "<xml>".concat($dl[0].outerHTML, "</xml>");
    }
  }, {
    key: "fixBuggyFields",
    value: function fixBuggyFields() {
      var _this = this;
      if (!this.$container) {
        return false;
      }

      /**
      * Hack to fix required checkboxes being reset
      * Issue: https://github.com/Platoniq/decidim-module-decidim_awesome/issues/82
      */
      this.$container.find(".formbuilder-checkbox-group").each(function (_key, group) {
        var inputs = $(".formbuilder-checkbox input", group);
        var data = _this.spec.find(function (obj) {
          return obj.type === "checkbox-group";
        });
        var values = data.userData;
        if (!inputs.length || !data || !values) {
          return;
        }
        inputs.each(function (_idx, input) {
          var index = values.indexOf(input.value);
          if (index >= 0) {
            values.splice(index, 1);
            // setting checked=true do not makes the browser aware that the form is valid if the field is required
            if (!input.checked) {
              $(input).click();
            }
          } else if (input.checked) {
            $(input).click();
          }
        });

        // Fill "other" option
        var otherOption = $(".other-option", inputs.parent())[0];
        var otherVal = $(".other-val", inputs.parent())[0];
        var otherText = values.join(" ");
        if (otherOption) {
          if (otherText) {
            otherOption.checked = true;
            otherOption.value = otherText;
            otherVal.value = otherText;
          } else {
            otherOption.checked = false;
            otherOption.value = "";
            otherVal.value = "";
          }
        }
      });

      /**
      * Hack to fix required radio buttons "other" value
      * Issue: https://github.com/Platoniq/decidim-module-decidim_awesome/issues/133
      */
      this.$container.find(".formbuilder-radio input.other-val").on("input", function (input) {
        var $input = $(input.currentTarget);
        var $group = $input.closest(".formbuilder-radio-group");
        $group.find("input").each(function (_key, radio) {
          var name = $(radio).attr("name");
          if (name && name.endsWith("[]")) {
            $(radio).attr("name", name.slice(0, -2));
          }
        });
      });
      return this;
    }

    // Saves xml to the hidden input
  }, {
    key: "storeData",
    value: function storeData() {
      if (!this.$container) {
        return false;
      }
      var $form = this.$container.closest("form");
      var $body = $form.find("input[name=\"".concat(this.$element.data("name"), "\"]"));
      if ($body.length && this.instance) {
        this.spec = this.instance.userData;
        $body.val(this.dataToXML(this.spec));
        this.$element.data("spec", this.spec);
      }
      // console.log("storeData spec", this.spec, "$body", $body,"$form",$form,"this",this);
      return this;
    }
  }, {
    key: "init",
    value: function init($element) {
      this.$element = $element;
      this.spec = $element.data("spec");
      if (!this.$container) {
        this.$container = $(this.containerSelector);
      }
      // console.log("init", $element, "this", this)
      // always use the last field (in case of multilang tabs we only render one form due a limitation of the library to handle several instances)
      this.instance = this.$container.formRender({
        i18n: {
          locale: this.lang,
          location: "https://cdn.jsdelivr.net/npm/formbuilder-languages@1.1.0/"
        },
        formData: this.spec,
        render: true
      });
      this.fixBuggyFields();
    }
  }]);
  return CustomFieldsRenderer;
}();


/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/rich_text_plugin.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/rich_text_plugin.js ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/editors/editor */ "./app/packs/src/decidim/decidim_awesome/editors/editor.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["value", "userData"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function () {
    var e,
      o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
/**
 * Decidim rich text editor control plugin
 * Renders standard Decidim WYSIWYG editor
 *
 * Registers Decidim Richtext as a subtype for the textarea control
 */


// configure the class for runtime loading
if (!window.fbControls) {
  window.fbControls = [];
}
window.fbControls.push(function (controlClass, allControlClasses) {
  var controlTextarea = allControlClasses.textarea;

  /**
   * DecidimRichtext control class
   *
   * NOTE: I haven't found a way to set the userData value using this plugin
   *       For this reason the value of the field must be collected manually
   *       from the hidden input name same as the field with the suffix '-input'
   */
  var controlRichtext = /*#__PURE__*/function (_controlTextarea) {
    _inherits(controlRichtext, _controlTextarea);
    var _super = _createSuper(controlRichtext);
    function controlRichtext() {
      _classCallCheck(this, controlRichtext);
      return _super.apply(this, arguments);
    }
    _createClass(controlRichtext, [{
      key: "configure",
      value:
      /**
       * configure the richtext editor requirements
       * @return {void}
       */
      function configure() {
        window.fbEditors.richtext = {};
      }

      /**
       * build a div DOM element & convert to a richtext editor
       * @return {DOMElement} DOM Element to be injected into the form.
       */
    }, {
      key: "build",
      value: function build() {
        var _this$config = this.config,
          value = _this$config.value,
          userData = _this$config.userData,
          attrs = _objectWithoutProperties(_this$config, _excluded);

        // hidden input for storing the current HTML value of the div
        this.inputId = "".concat(this.id, "-input");
        // console.log("build plugin: this",this)
        this.input = this.markup("input", null, {
          name: name,
          id: this.inputId,
          type: "hidden",
          value: userData && userData[0] || value || ""
        });
        var css = this.markup("style", "\n        #".concat(attrs.id, " { height: auto; min-height: 6rem; padding-left: 0; padding-right: 0; }\n        #").concat(attrs.id, " div.ql-container { height: ").concat(attrs.rows || 1, "rem; }\n        #").concat(attrs.id, " p.help-text { margin-top: .5rem; }\n        "), {
          type: "text/css"
        });
        var wrapperAttrs = _objectSpread(_objectSpread({}, attrs), {}, {
          "data-toolbar": "full"
        });
        // console.log("build value", value, "userData", userData, "attrs", attrs, attrs.id, "wrapperAttrs", wrapperAttrs);
        this.wrapper = this.markup("div", null, wrapperAttrs);
        return this.markup("div", [css, this.input, this.wrapper], attrs);
      }

      /**
       * When the element is rendered into the DOM, execute the following code to initialise it
       * @param {Object} evt - event
       * @return {Object} evt - event
       */
    }, {
      key: "onRender",
      value: function onRender(evt) {
        // const value = this.config.value || '';
        if (window.fbEditors.richtext[this.id]) {
          // console.log("todo destroy", window.fbEditors.richtext[this.id]);
          // window.fbEditors.richtext[this.id].richtext('destroy')
        }
        window.fbEditors.quill[this.id] = {};
        var editor = window.fbEditors.quill[this.id];
        // createQuillEditor does all the job to update the hidden input wrapper
        editor.instance = (0,src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_0__.createQuillEditor)(this.wrapper);
        // editor.data = new Delta();
        // if (value) {
        //   editor.instance.setContents(window.JSON.parse(this.parsedHtml(value)));
        // }
        // editor.instance.on('text-change', function(delta) {
        //   console.log("text-change", "delta", delta, "editor", editor);
        // //   // editor.data = editor.data.compose(delta);
        // });

        // console.log("render! editor", editor, "this", this, "value", value);
        return evt;
      }
    }], [{
      key: "definition",
      get:
      /**
       * Class configuration - return the icons & label related to this control
       * @return {JSON} definition object
       */
      function get() {
        return {
          icon: "📝",
          i18n: {
            "default": "Rich Text Editor"
          }
        };
      }
    }]);
    return controlRichtext;
  }(controlTextarea); // register Decidim richtext as a richtext control
  controlTextarea.register("richtext", controlRichtext, "textarea");
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/proposals/custom_fields.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/proposals/custom_fields.js ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_forms_custom_fields_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/forms/custom_fields_renderer */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/custom_fields_renderer.js");

window.DecidimAwesome.CustomFieldsRenderer = window.DecidimAwesome.CustomFieldsRenderer || new src_decidim_decidim_awesome_forms_custom_fields_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]();
$(function () {
  // use admin multilang specs if exists
  var $el = $("proposal_custom_field:first", ".tabs-title.is-active");
  if (!$el.length) {
    $el = $(".proposal_custom_field:first");
  }
  window.DecidimAwesome.CustomFieldsRenderer.init($el);
  window.DecidimAwesome.CustomFieldsRenderer.$container.closest("form").on("submit", function (evt) {
    if (evt.target.checkValidity()) {
      // save current editor
      window.DecidimAwesome.CustomFieldsRenderer.storeData();
    } else {
      evt.preventDefault();
      evt.target.reportValidity();
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-decidim_awesome-0_10_2_app_packs_src_d-6c7de6.js.map