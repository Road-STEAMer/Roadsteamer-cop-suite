/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images sync recursive ^\\.\\/.*$":
/*!************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/ sync ^\.\/.*$ ***!
  \************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./decidim/decidim_awesome/handcard.svg": "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/handcard.svg",
	"./decidim/decidim_awesome/handcheck.svg": "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/handcheck.svg",
	"./decidim/decidim_awesome/pokecode-logo.png": "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/pokecode-logo.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_decidim_awesome.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_decidim_awesome.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_awesome_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/awesome_application.js */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/awesome_application.js");
/* harmony import */ var entrypoints_decidim_decidim_awesome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entrypoints/decidim_decidim_awesome.scss */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_decidim_awesome.scss");


// Images
__webpack_require__("../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images sync recursive ^\\.\\/.*$");

// CSS


/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/awesome_application.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/awesome_application.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_proposals_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/proposals/images */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/proposals/images.js");
/* harmony import */ var src_decidim_decidim_awesome_proposals_images__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_decidim_awesome_proposals_images__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_decidim_awesome_forms_autosave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/decidim_awesome/forms/autosave */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/autosave.js");
/* harmony import */ var src_decidim_decidim_awesome_voting_voting_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/decidim_awesome/voting/voting_cards */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/voting/voting_cards.js");
/* harmony import */ var src_decidim_decidim_awesome_voting_voting_cards__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_decidim_decidim_awesome_voting_voting_cards__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/decidim_awesome/editors/editor */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/editors/editor.js");




$(function () {
  // rebuild editors
  if (window.DecidimAwesome.allow_images_in_full_editor || window.DecidimAwesome.allow_images_in_small_editor || window.DecidimAwesome.use_markdown_editor) {
    $(".editor-container").each(function (_idx, container) {
      (0,src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_3__.destroyQuillEditor)(container);
      if (window.DecidimAwesome.use_markdown_editor) {
        (0,src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_3__.createMarkdownEditor)(container);
      } else {
        (0,src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_3__.createQuillEditor)(container);
      }
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/editors/editor.js":
/*!************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/editors/editor.js ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMarkdownEditor": function() { return /* binding */ createMarkdownEditor; },
/* harmony export */   "createQuillEditor": function() { return /* binding */ createQuillEditor; },
/* harmony export */   "destroyQuillEditor": function() { return /* binding */ destroyQuillEditor; }
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
/* eslint-disable require-jsdoc, func-style */

/*
* Since version 0.25 we follow a different strategy and opt to destroy and override completely the original editor
* That's because editors are instantiated directly instead of creating a global function to instantiate them
*/













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
  }]];
  var addImage = false;
  if (toolbar === "full") {
    quillToolbar = [[{
      header: [2, 3, 4, 5, 6, false]
    }]].concat(_toConsumableArray(quillToolbar));
    if (DecidimAwesome.allow_images_in_full_editor) {
      quillToolbar.push(["video", "image"]);
      addImage = true;
    } else {
      quillToolbar.push(["video"]);
    }
  } else if (toolbar === "basic") {
    if (DecidimAwesome.allow_images_in_small_editor) {
      quillToolbar.push(["video", "image"]);
      addImage = true;
    } else {
      quillToolbar.push(["video"]);
    }
  } else if (DecidimAwesome.allow_images_in_small_editor) {
    quillToolbar.push(["image"]);
    addImage = true;
  }
  var modules = {
    linebreak: {},
    toolbar: {
      container: quillToolbar,
      handlers: {
        "linebreak": src_decidim_editor_linebreak_module__WEBPACK_IMPORTED_MODULE_0__["default"]
      }
    }
  };
  var $input = $(container).siblings('input[type="hidden"]');
  container.innerHTML = $input.val() || "";
  var token = $('meta[name="csrf-token"]').attr("content");
  if (addImage) {
    modules.imageResize = {
      modules: ["Resize", "DisplaySize"]
    };
    modules.imageUpload = {
      url: DecidimAwesome.editor_uploader_path,
      method: "POST",
      name: "image",
      withCredentials: false,
      headers: {
        "X-CSRF-Token": token
      },
      callbackOK: function callbackOK(serverResponse, next) {
        $("div.ql-toolbar").last().removeClass("editor-loading");
        next(serverResponse.url);
      },
      callbackKO: function callbackKO(serverError) {
        $("div.ql-toolbar").last().removeClass("editor-loading");
        var msg = serverError && serverError.body;
        try {
          msg = JSON.parse(msg).message;
        } catch (evt) {
          console.error("Parsing error", evt);
        }
        console.error("Image upload error: ".concat(msg));
        var $p = $("<p class=\"text-alert help-text\">".concat(msg, "</p>"));
        $(container).after($p);
        setTimeout(function () {
          $p.fadeOut(1000, function () {
            $p.destroy();
          });
        }, 3000);
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

    // Triggers CustomEvent with the cursor position
    // It is required in input_mentions.js
    var event = new CustomEvent("quill-position", {
      detail: quill.getSelection()
    });
    container.dispatchEvent(event);
    if (text === "\n" || text === "\n\n") {
      $input.val("");
    } else {
      $input.val(quill.root.innerHTML);
    }
    if ((text === "\n" || text === "\n\n") && quill.root.querySelectorAll(allowedEmptyContentSelector).length === 0) {
      $input.val("");
    } else {
      var emptyParagraph = "<p><br></p>";
      var cleanHTML = quill.root.innerHTML.replace(new RegExp("^".concat(emptyParagraph, "|").concat(emptyParagraph, "$"), "g"), "");
      $input.val(cleanHTML);
    }
  });
  // After editor is ready, linebreak_module deletes two extraneous new lines
  quill.emitter.emit("editor-ready");
  if (addImage) {
    var text = $(container).data("dragAndDropHelpText") || DecidimAwesome.texts.drag_and_drop_image;
    $(container).after("<p class=\"help-text\" style=\"margin-top:-1.5rem;\">".concat(text, "</p>"));
  }

  // After editor is ready, linebreak_module deletes two extraneous new lines
  quill.emitter.emit("editor-ready");
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

  // convert to html on submit
  $form.on("submit", function () {
    // e.preventDefault();
    $input.val((0,marked__WEBPACK_IMPORTED_MODULE_11__.marked)(inscrybmde.value()));
  });
}

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/autosave.js":
/*!************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/forms/autosave.js ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var form_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-storage */ "./node_modules/form-storage/lib/index.js");
/* harmony import */ var form_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_storage__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  window.DecidimAwesome = window.DecidimAwesome || {};
  if (!window.DecidimAwesome.auto_save_forms) {
    return;
  }
  var questionnaireId = window.DecidimAwesome.current_questionnaire;
  if (!questionnaireId) {
    // console.log("Not a questionnaire page")
    return;
  }
  var storeId = "awesome_autosave:".concat(questionnaireId);
  var storeCheckboxesId = "awesome_autosave:checkboxes:".concat(questionnaireId);
  var $form = $("form.answer-questionnaire");
  if (!$form.length) {
    if (window.DecidimAwesome.questionnaire_answered) {
      // console.log("Questionnaire already answered, remove any data saved");
      window.localStorage.removeItem(storeId);
      window.localStorage.removeItem(storeCheckboxesId);
    }
    // console.log("No forms here");
    return;
  }
  var store = new (form_storage__WEBPACK_IMPORTED_MODULE_0___default())("#".concat($form.attr("id")), {
    name: storeId,
    ignores: [
    // '[type="hidden"]',
    '[name="utf8"]', '[name="authenticity_token"]', "[disabled]",
    // there are problems with matrix questions
    '[type="checkbox"]']
  });
  var showMsg = function showMsg(msg) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var defaultTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 700;
    var time = error ? 5000 : defaultTime; // eslint-disable-line no-ternary, multiline-ternary
    var $div = $("<div class=\"awesome_autosave-notice".concat(error ? " error" : "", "\">").concat(msg, "</div>")).appendTo($form); // eslint-disable-line no-ternary, multiline-ternary
    setTimeout(function () {
      $div.fadeOut(500, function () {
        $div.remove();
      });
    }, time);
  };
  if (!window.localStorage) {
    showMsg(window.DecidimAwesome.texts.autosaved_error, true);
    return;
  }
  if (window.localStorage.getItem(storeId)) {
    showMsg(window.DecidimAwesome.texts.autosaved_retrieved, false, 5000);
  }

  // restore if available
  store.apply(); // eslint-disable-line prefer-reflect
  // restore checkboxes
  try {
    var checkboxes = JSON.parse(window.localStorage.getItem(storeCheckboxesId));
    for (var id in checkboxes) {
      // eslint-disable-line guard-for-in
      $("#".concat(id)).prop("checked", checkboxes[id]);
    }
  } catch (evt) {
    console.log("No checkboxes found");
  }
  // this trigger the "change" event, it seems that it is too much
  // $form.find('input, textarea, select').change();

  var save = function save() {
    store.save();
    // save checkbox manually
    var checkboxes = {};
    $form.find('input[type="checkbox"]').each(function (index, el) {
      checkboxes[el.id] = el.checked;
    });
    window.localStorage.setItem(storeCheckboxesId, JSON.stringify(checkboxes));
    showMsg(window.DecidimAwesome.texts.autosaved_success);
  };

  // save changes when modifications
  $form.find("input, textarea, select").on("change", function () {
    save();
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/proposals/images.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/proposals/images.js ***!
  \**************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  window.DecidimAwesome = window.DecidimAwesome || {};
  var token = $('meta[name="csrf-token"]').attr("content");
  var $textarea = $("textarea#proposal_body");
  var text = window.DecidimAwesome.texts.drag_and_drop_image;
  if (!$textarea.length) {
    return;
  }
  if (window.DecidimAwesome.allow_images_in_proposals) {
    // Add the capability to upload images only (they will be presented as links)

    $textarea.after("<p class=\"help-text\">".concat(text, "</p>"));
    $textarea.inlineattachment({
      uploadUrl: window.DecidimAwesome.editor_uploader_path,
      uploadFieldName: "image",
      jsonFieldName: "url",
      progressText: "[Uploading file...]",
      urlText: "{filename}",
      extraHeaders: {
        "X-CSRF-Token": token
      }
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/voting/voting_cards.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/src/decidim/decidim_awesome/voting/voting_cards.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  if ($(".voting-voting_cards").length === 0 || $("#VotingCardsModalHelp").length === 0 || $(".sign-out-link").length === 0) {
    return;
  }
  var $modal = $("#VotingCardsModalHelp");
  var $card = $modal.find(".current-choice .vote-card");
  var $check = $("#voting_cards-skip_help");
  var storage = function storage() {
    return JSON.parse(localStorage.getItem("hideTreeFlagsModalHelp") || "{}");
  };
  var isChecked = function isChecked() {
    return storage()[$check.val()];
  };
  var saveState = function saveState(val) {
    var show = storage();
    show[$check.val()] = val;
    localStorage.setItem("hideTreeFlagsModalHelp", JSON.stringify(show));
  };
  var showModal = function showModal() {
    if (isChecked()) {
      return false;
    }
    if ($modal.is(":visible")) {
      return false;
    }
    return true;
  };
  $check.on("change", function () {
    saveState($check.is(":checked"));
  });
  $modal.find(".vote-action").on("click", function () {
    $modal.data("action").click();
    $modal.foundation("close");
  });
  $(".button--vote-button .voting-voting_cards").on("click", ".vote-action", function (evt) {
    if (showModal()) {
      evt.stopPropagation();
      evt.preventDefault();
      $check.prop("checked", isChecked());
      $modal.data("action", evt.currentTarget);
      $card[0].classList = evt.currentTarget.classList;
      if (evt.currentTarget.children.length > 1) {
        $card.html("".concat(evt.currentTarget.children[1].outerHTML, "<p class=\"vote-label\">").concat(evt.currentTarget.children[1].children[0].textContent, "</p>"));
      } else if ($card[0].classList.contains("button")) {
        $card[0].classList.remove("button");
        $card.html("<p class=\"vote-label\">".concat(evt.currentTarget.title, "</p>"));
      } else {
        $card.html("<p class=\"vote-label\">".concat(evt.currentTarget.textContent, "</p>"));
      }
      $modal.foundation("open");
    } else {
      $(evt.currentTarget).closest(".voting-voting_cards").addClass("loading");
    }
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_decidim_awesome.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_decidim_awesome.scss ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/handcard.svg":
/*!**********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/handcard.svg ***!
  \**********************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/handcard-51f3bf5fe54dca0da55c.svg";

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/handcheck.svg":
/*!***********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/handcheck.svg ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/handcheck-d62ce7dd4139913b5519.svg";

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/pokecode-logo.png":
/*!***************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/images/decidim/decidim_awesome/pokecode-logo.png ***!
  \***************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/pokecode-logo-6f9c59a6f9f00c285e0e.png";

/***/ }),

/***/ "?b2fd":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/decidim-packs/";
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
/******/ 			"decidim_decidim_awesome": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_quill_formats_code_js","vendors-node_modules_europa_dist_europa_js-node_modules_inline-attachment_src_codemirror-4_in-e42ed9","vendors-node_modules_form-storage_lib_index_js","app_packs_src_decidim_editor_clipboard_override_js-app_packs_src_decidim_editor_linebreak_mod-c679aa"], function() { return __webpack_require__("../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-decidim_awesome-0.10.2/app/packs/entrypoints/decidim_decidim_awesome.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=decidim_decidim_awesome.js.map