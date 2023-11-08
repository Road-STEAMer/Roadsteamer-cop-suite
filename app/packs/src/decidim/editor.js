/* eslint-disable require-jsdoc */


import lineBreakButtonHandler from "src/decidim/editor/linebreak_module"
import "src/decidim/editor/clipboard_override"
import "src/decidim/vendor/image-resize.min"
import "src/decidim/vendor/image-upload.min"

const quillFormats = ["bold", "italic", "link", "underline", "header", "list", "video", "image", "alt", "break", "width", "style", "code", "blockquote", "indent"];

export default function createQuillEditor(container) {
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
      fetch('/idra_update', {
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
          // Parse the HTML response to extract the anchor text
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          const anchorElements = doc.querySelectorAll('#datasets-list a');

          anchorElements.forEach(anchor => {
            modalData.push(anchor.textContent);
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
    descriptionElement.textContent = "Select a dataset to insert in text editor:"
    descriptionElement.style.color = "gray"
    linksDiv.appendChild(descriptionElement)

    // Loop through modalData array and create links with click event listeners
    modalData.forEach(function (element) {
      var link = document.createElement('a');
      link.href = 'javascript:void(0)'; // JavaScript void(0) to prevent navigation
      link.textContent = element;
      linksDiv.appendChild(link);

      // Add click event listener to the link
      link.addEventListener('click', function () {
        copyAndPasteText(element);
        modalContainer.style.display = 'none'; // Close the modal
      });

      // Add a line break after each link, except the last one
      if (element !== modalData[modalData.length - 1]) {
        linksDiv.appendChild(document.createElement('br'));
      }
    });



    // Function to copy and paste the text into the Quill editor
    function copyAndPasteText(textToCopy) {
      const range = quill.getSelection();

      // Create a link format with the href attribute set to the textToCopy
      const linkFormat = {
        link: textToCopy,
        target: '_blank'
      };

      // Insert the text and apply the link format
      quill.insertText(range.index, textToCopy, linkFormat);

      // Set the selection to the inserted link
      quill.setSelection(range.index, textToCopy.length, 'user');
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
