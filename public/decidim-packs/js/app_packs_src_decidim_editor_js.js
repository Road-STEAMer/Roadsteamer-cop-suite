"use strict";
(self["webpackChunkdecidim_app"] = self["webpackChunkdecidim_app"] || []).push([["app_packs_src_decidim_editor_js"],{

/***/ "./app/packs/src/decidim/editor.js":
/*!*****************************************!*\
  !*** ./app/packs/src/decidim/editor.js ***!
  \*****************************************/
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

/*
* Since version 0.25 we follow a different strategy and opt to destroy and override completely the original editor
* That's because editors are instantiated directly instead of creating a global function to instantiate them
*/

/*THIS IS THE RIGHT EDITOR FILE*/













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
  var addImage = $(container).data("editorImages");
  if (toolbar === "full") {
    quillToolbar = [[{
      header: [2, 3, 4, 5, 6, false]
    }]].concat(_toConsumableArray(quillToolbar), [["video"]]);
  } else if (toolbar === "basic") {
    quillToolbar = [].concat(_toConsumableArray(quillToolbar), [["video"]]);
  }
  var modalData = [];
  var hasFetched = false; // Add this flag

  // Function to fetch data
  function fetchData() {
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
        datasetElements.forEach(function (dataset, index) {
          var title = dataset.textContent;
          var url = urlElements[index].textContent;
          modalData.push({
            title: title,
            url: url
          });
        });
      })["catch"](function (error) {
        console.error('Error updating partial view:', error);
      });
      hasFetched = true; // Set the flag to indicate that fetch has been performed
    }
  }

  // Function to create and display the modal
  function openModal() {
    // Call the fetchData function
    fetchData();

    // Create a modal container
    var modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    // Create a modal element
    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Modal content
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.id = 'modalContent';

    // Create an unordered list to display the elements as a list
    // Create a div for the links
    var linksDiv = document.createElement('div');
    linksDiv.classList.add('links-column');
    var titleElement = document.createElement('h1');
    titleElement.textContent = "Saved Dataset";
    linksDiv.appendChild(titleElement);
    titleElement.className = "text-center";
    var descriptionElement = document.createElement("h5");
    descriptionElement.style.color = "gray";
    linksDiv.appendChild(descriptionElement);

    // Loop through modalData array and create links with click event listeners
    modalData.forEach(function (element) {
      var linkContainer = document.createElement('div'); // Container for link and button
      linkContainer.classList.add('link-container');
      var link = document.createElement('a');
      link.href = element.url;
      link.textContent = element.title + ' ' + ' ';
      link.target = "_blank"; // Open in a new tab/window
      linkContainer.appendChild(link);
      var copyButton = document.createElement('button');
      copyButton.textContent = 'Paste';
      copyButton.style.border = '1px solid red';
      copyButton.style.borderRadius = '5px';
      copyButton.style.marginLeft = '2em';
      copyButton.style.padding = '2px';
      copyButton.style.color = 'red';
      copyButton.addEventListener('click', function () {
        copyAndPasteText(element.title, element.url); // Reuse the existing function
      });
      linkContainer.appendChild(copyButton);
      linksDiv.appendChild(linkContainer); // Append container to the linksDiv
      if (element !== modalData[modalData.length - 1]) {
        linksDiv.appendChild(document.createElement('br'));
      }
    });

    // Function to copy and paste the text into the Quill editor
    function copyAndPasteText(title, url) {
      var range = quill.getSelection();
      var linkFormat = {
        link: url,
        target: '_blank'
      };
      quill.insertText(range.index, title, linkFormat);
      quill.setSelection(range.index, title.length, 'user');
    }
    modalContent.appendChild(linksDiv);
    modal.appendChild(modalContent);
    modalContainer.appendChild(modal);
    document.body.appendChild(modalContainer);

    // Open the modal
    modalContainer.style.display = 'block';

    // Close modal when clicking outside the modal
    window.addEventListener('click', function (event) {
      if (event.target == modalContainer) {
        modalContainer.style.display = 'none';
      }
    });
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
  if (addImage) {
    modules.imageResize = {
      modules: ["Resize", "DisplaySize"]
    };
    modules.imageUpload = {
      url: $(container).data("uploadImagesPath"),
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

    // Triggers CustomEvent with the cursor position
    // It is required in input_mentions.js
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
  // After editor is ready, linebreak_module deletes two extraneous new lines
  quill.emitter.emit("editor-ready");
  if (addImage) {
    var text = $(container).data("dragAndDropHelpText");
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

/***/ })

}]);
//# sourceMappingURL=app_packs_src_decidim_editor_js.js.map