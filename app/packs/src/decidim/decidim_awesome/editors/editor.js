/* eslint-disable require-jsdoc, func-style */

/*
* Since version 0.25 we follow a different strategy and opt to destroy and override completely the original editor
* That's because editors are instantiated directly instead of creating a global function to instantiate them
*/

import lineBreakButtonHandler from "src/decidim/editor/linebreak_module"
import InscrybMDE from "inscrybmde"
import Europa from "europa"
import "inline-attachment/src/inline-attachment";
import "inline-attachment/src/codemirror-4.inline-attachment";
import "inline-attachment/src/jquery.inline-attachment";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "src/decidim/editor/clipboard_override"
import "src/decidim/vendor/image-resize.min"
import "src/decidim/vendor/image-upload.min"
import { marked } from "marked";

const DecidimAwesome = window.DecidimAwesome || {};
const quillFormats = ["bold", "italic", "link", "underline", "header", "list", "video", "image", "alt", "break", "width", "style", "code", "blockquote", "indent"];

// A tricky way to destroy the quill editor
export function destroyQuillEditor(container) {
  if (container) {
    const content = $(container).find(".ql-editor").html();
    $(container).html(content);
    $(container).siblings(".ql-toolbar").remove();
    $(container).find("*[class*='ql-']").removeClass((index, className) => (className.match(/(^|\s)ql-\S+/g) || []).join(" "));
    $(container).removeClass((index, className) => (className.match(/(^|\s)ql-\S+/g) || []).join(" "));
    if ($(container).next().is("p.help-text")) {
      $(container).next().remove();
    }
  }
  else {
    console.error(`editor [${container}] not exists`);
  }
}

export function createQuillEditor(container) {
    const toolbar = $(container).data("toolbar");
    const disabled = $(container).data("disabled");
  
    const allowedEmptyContentSelector = "iframe";
    let quillToolbar = [
      ["bold", "italic", "underline", "linebreak",],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "clean"],
      ["code", "blockquote"],
      [{ "indent": "-1" }, { "indent": "+1" }],
      [{ 'savedDataset': "openModal" }]
    ]
  
    let addImage = $(container).data("editorImages");
  
    if (toolbar === "full") {
      quillToolbar = [
        [{ header: [2, 3, 4, 5, 6, false] }],
        ...quillToolbar,
        ["video"]
      ];
    } else if (toolbar === "basic") {
      quillToolbar = [
        ...quillToolbar,
        ["video"]
      ];
    }
  
  
    let modalData = [];
    let hasFetched = false; // Add this flag
  
    // Function to fetch data
    function fetchData() {
      if (!hasFetched) { // Check if fetch hasn't been performed yet
        fetch('/idra_modal_editor', {
          method: 'GET'
        })
          .then(response => {
            if (response.ok) {
              return response.text(); // Assuming the response is HTML
            } else {
              throw new Error('Failed to fetch the updated content');
            }
          })
          .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const datasetElements = doc.querySelectorAll('#datasets-list a');
            const urlElements = doc.querySelectorAll('#datasets-list #url');
    
            datasetElements.forEach((dataset, index) => {
              const title = dataset.textContent;
              const url = urlElements[index].textContent;
              modalData.push({ title, url });
            });
          })
          .catch(error => {
            console.error('Error updating partial view:', error);
          });
    
        hasFetched = true; // Set the flag to indicate that fetch has been performed
      }
    }
  
    // Call the fetchData function
    fetchData();
  
  
    // Function to create and display the modal
    function openModal() {
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
      titleElement.className = "text-center"
  
      var descriptionElement = document.createElement("h5")
      descriptionElement.style.color = "gray"
      linksDiv.appendChild(descriptionElement)
  
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
        copyButton.style.border = '1px solid red'
        copyButton.style.borderRadius = '5px'
        copyButton.style.marginLeft='2em'
        copyButton.style.padding = '2px'
        copyButton.style.color = 'red'
        
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
      const range = quill.getSelection();
  
      const linkFormat = {
        link: url,
        target: '_blank',
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
  
  
    let modules = {
      linebreak: {},
      toolbar: {
        container: quillToolbar,
        handlers: {
          "linebreak": lineBreakButtonHandler,
          "savedDataset": openModal,
        }
      }
    };
  
    
  
  
    const $input = $(container).siblings('input[type="hidden"]');
    container.innerHTML = $input.val() || "";
    const token = $('meta[name="csrf-token"]').attr("content");
    if (addImage) {
      modules.imageResize = {
        modules: ["Resize", "DisplaySize"]
      }
      modules.imageUpload = {
        url: $(container).data("uploadImagesPath"),
        method: "POST",
        name: "image",
        withCredentials: false,
        headers: { "X-CSRF-Token": token },
        callbackOK: (serverResponse, next) => {
          $("div.ql-toolbar").last().removeClass("editor-loading")
          next(serverResponse.url);
        },
        callbackKO: (serverError) => {
          $("div.ql-toolbar").last().removeClass("editor-loading")
          console.log(`Image upload error: ${serverError.message}`);
        },
        checkBeforeSend: (file, next) => {
          $("div.ql-toolbar").last().addClass("editor-loading")
          next(file);
        }
      }
    }
    const quill = new Quill(container, {
      modules: modules,
      formats: quillFormats,
      theme: "snow"
    });
  
  
  
    if (disabled) {
      quill.disable();
    }
  
    quill.on("text-change", () => {
      const text = quill.getText();
  
      // Triggers CustomEvent with the cursor position
      // It is required in input_mentions.js
      let event = new CustomEvent("quill-position", {
        detail: quill.getSelection()
      });
      container.dispatchEvent(event);
  
      if ((text === "\n" || text === "\n\n") && quill.root.querySelectorAll(allowedEmptyContentSelector).length === 0) {
        $input.val("");
      } else {
        const emptyParagraph = "<p><br></p>";
        const cleanHTML = quill.root.innerHTML.replace(
          new RegExp(`^${emptyParagraph}|${emptyParagraph}$`, "g"),
          ""
        );
        $input.val(cleanHTML);
      }
    });
    // After editor is ready, linebreak_module deletes two extraneous new lines
    quill.emitter.emit("editor-ready");
  
    if (addImage) {
      const text = $(container).data("dragAndDropHelpText");
      $(container).after(`<p class="help-text" style="margin-top:-1.5rem;">${text}</p>`);
    }
  
    // After editor is ready, linebreak_module deletes two extraneous new lines
    quill.emitter.emit("editor-ready");
  
    return quill;
}

export function createMarkdownEditor(container) {
  const text = DecidimAwesome.texts.drag_and_drop_image;
  const token = $('meta[name="csrf-token"]').attr("content");
  const $input = $(container).siblings('input[type="hidden"]');
  const $faker = $('<textarea name="faker-inscrybmde"/>');
  const $form = $(container).closest("form");
  const europa = new Europa();
  $faker.val(europa.convert($input.val()));
  $faker.insertBefore($(container));
  $(container).hide();
  const inscrybmde = new InscrybMDE({
    element: $faker[0],
    spellChecker: false,
    renderingConfig: {
      codeSyntaxHighlighting: true,
      hljs: hljs
    }
  });
  $faker[0].InscrybMDE = inscrybmde;

  // Allow image upload
  if (DecidimAwesome.allow_images_in_markdown_editor) {
    $(inscrybmde.gui.statusbar).prepend(`<span class="help-text" style="float:left;margin:0;text-align:left;">${text}</span>`);
    window.inlineAttachment.editors.codemirror4.attach(inscrybmde.codemirror, {
      uploadUrl: DecidimAwesome.editor_uploader_path,
      uploadFieldName: "image",
      jsonFieldName: "url",
      extraHeaders: { "X-CSRF-Token": token }
    });
  }

  // Allow linebreaks
  marked.setOptions({
    breaks: true
  });

  // convert to html on submit
  $form.on("submit", () => {
    // e.preventDefault();
    $input.val(marked(inscrybmde.value()));
  });
}