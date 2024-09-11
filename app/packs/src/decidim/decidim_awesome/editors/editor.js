/* eslint-disable require-jsdoc, func-style */

import lineBreakButtonHandler from "src/decidim/editor/linebreak_module";
import InscrybMDE from "inscrybmde";
import Europa from "europa";
import "inline-attachment/src/inline-attachment";
import "inline-attachment/src/codemirror-4.inline-attachment";
import "inline-attachment/src/jquery.inline-attachment";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "src/decidim/editor/clipboard_override";
import "src/decidim/vendor/image-resize.min";
import "src/decidim/vendor/image-upload.min";
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
  } else {
    console.error(`editor [${container}] not exists`);
  }
}

export function createQuillEditor(container) {
  const toolbar = $(container).data("toolbar");
  const disabled = $(container).data("disabled");

  const allowedEmptyContentSelector = "iframe";
  let quillToolbar = [
    ["bold", "italic", "underline", "linebreak"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "clean"],
    ["code", "blockquote"],
    [{ "indent": "-1" }, { "indent": "+1" }],
    [{ 'savedDataset': "openModal" }]
  ];

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
  let hasFetched = false; // Flag to check if data has been fetched

  // Function to fetch data
  function fetchData() {
    return new Promise((resolve, reject) => {
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

            modalData = Array.from(datasetElements).map((dataset, index) => {
              return {
                title: dataset.textContent,
                url: urlElements[index].textContent
              };
            });

            hasFetched = true; // Set the flag to indicate that fetch has been performed
            resolve();
          })
          .catch(error => {
            console.error('Error updating partial view:', error);
            reject(error);
          });
      } else {
        resolve();
      }
    });
  }
  async function openModal() {
    try {
      await fetchData(); // Ensure data is fetched
  
      // Create and style the modal container
      const modalContainer = document.createElement('div');
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
      const modal = document.createElement('div');
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
      const modalContent = document.createElement('div');
      modalContent.id = 'modalContent';
      modalContent.style.overflow = 'initial'
      modalContent.style.maxHeight = '50vh'

      // Create and style the search bar
      const searchBar = document.createElement('input');
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
      const linksDiv = document.createElement('div');
      linksDiv.id = 'linksContainer';
      linksDiv.style.display = 'flex';
      linksDiv.style.flexDirection = 'column';
      linksDiv.style.gap = '10px'; // Adjust spacing between items
  
      // Create and style the modal title
      const titleElement = document.createElement('h1');
      titleElement.textContent = "Saved Datasets";
      titleElement.style.textAlign = 'center';
      modal.appendChild(titleElement);
  
      // Store the original list items
      const listItems = modalData.map(element => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.style.display = 'flex';
        listItem.style.justifyContent = 'space-between';
        listItem.style.alignItems = 'center';
  
        const link = document.createElement('a');
        link.href = element.url;
        link.textContent = element.title;
        link.target = "_blank"; // Open in a new tab/window

        var disabled = false;
  
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Add';
        copyButton.style.marginLeft = '10px';
        copyButton.style.borderRadius = '5px';
        copyButton.style.padding = '5px 10px';
        copyButton.style.color = 'white';
        copyButton.style.cursor = 'pointer'; // Set cursor to pointer
        copyButton.style.backgroundColor = '#2F4EA1'; // Set cursor to pointer
  
       
  
        // Handle button click to copy and paste text
          copyButton.addEventListener('click', () => {
          copyButton.textContent = 'Done';
          copyButton.disabled = true
          copyButton.style.color = 'grey';  // Cambia il colore di sfondo
          copyButton.style.cursor = "not-allowed";    // Cambia il cursore
          copyButton.style.opacity = "0.6";
          copyButton.style.border = '1px solid grey';
          copyButton.style.backgroundColor = 'transparent'
          disabled = true;
          
          // Call the copyAndPasteText function
          copyAndPasteText(element.title, element.url);
        });
  
        listItem.appendChild(link);
        listItem.appendChild(copyButton);
        linksDiv.appendChild(listItem);
  
        return listItem;
      });
  
      // Function to filter results based on the search input
      function filterResults() {
        const query = searchBar.value.toLowerCase();
        listItems.forEach(item => {
          const title = item.querySelector('a').textContent.toLowerCase();
          if (title.includes(query)) {
            item.style.display = 'flex'; // Show item
          } else {
            item.style.display = 'none'; // Hide item
          }
        });
      }
  
      // Append elements to modal
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
    } catch (error) {
      console.error('Failed to open modal:', error);
    }
  }
  
  
  // Updated copyAndPasteText function
  function copyAndPasteText(title, url) {
  const range = quill.getSelection();

  // Assicurati che range non sia null (ossia c'è una selezione)
  if (range) {
    const linkFormat = {
      link: url,
      target: '_blank',
    };
    
    // Inserisci il titolo con il link
    quill.insertText(range.index, title, linkFormat);

    // Imposta la selezione alla fine del titolo
    quill.setSelection(range.index + title.length);

    // Inserisci un ritorno a capo (\n)
    quill.insertText(range.index + title.length, '\n');
  }
}

  
  const modules = {
    linebreak: {},
    toolbar: {
      container: quillToolbar,
      handlers: {
        "linebreak": lineBreakButtonHandler,
        "savedDataset": openModal
      }
    }
  };

  const $input = $(container).siblings('input[type="hidden"]');
  container.innerHTML = $input.val() || "";
  const token = $('meta[name="csrf-token"]').attr("content");

  if ($(container).data("editorImages")) {
    modules.imageResize = {
      modules: ["Resize", "DisplaySize"]
    };
    modules.imageUpload = {
      url: $(container).data("uploadImagesPath"),
      method: "POST",
      name: "image",
      headers: { "X-CSRF-Token": token },
      callbackOK: (serverResponse, next) => {
        $("div.ql-toolbar").last().removeClass("editor-loading");
        next(serverResponse.url);
      },
      callbackKO: (serverError) => {
        $("div.ql-toolbar").last().removeClass("editor-loading");
        console.log(`Image upload error: ${serverError.message}`);
      },
      checkBeforeSend: (file, next) => {
        $("div.ql-toolbar").last().addClass("editor-loading");
        next(file);
      }
    };
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

  quill.emitter.emit("editor-ready");

  if ($(container).data("editorImages")) {
    const text = $(container).data("dragAndDropHelpText");
    $(container).after(`<p class="help-text" style="margin-top:-1.5rem;">${text}</p>`);
  }

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

  // Convert to HTML on submit
  $form.on("submit", () => {
    $input.val(marked(inscrybmde.value()));
  });
}
