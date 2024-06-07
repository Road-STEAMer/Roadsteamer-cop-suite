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


  // let modalData = [];
  // let hasFetched = false; // Add this flag

  // // Function to fetch data
  // function fetchData() {
  //   if (!hasFetched) { // Check if fetch hasn't been performed yet
  //     fetch('/idra_modal_editor', {
  //       method: 'GET'
  //     })
  //       .then(response => {
  //         if (response.ok) {
  //           return response.text(); // Assuming the response is HTML
  //         } else {
  //           throw new Error('Failed to fetch the updated content');
  //         }
  //       })
  //       .then(data => {
  //         const parser = new DOMParser();
  //         const doc = parser.parseFromString(data, 'text/html');
  //         const datasetElements = doc.querySelectorAll('#datasets-list a');
  //         const urlElements = doc.querySelectorAll('#datasets-list #url');
  
  //         datasetElements.forEach((dataset, index) => {
  //           const title = dataset.textContent;
  //           const url = urlElements[index].textContent;
  //           modalData.push({ title, url });
  //         });
  //       })
  //       .catch(error => {
  //         console.error('Error updating partial view:', error);
  //       });
  
  //     hasFetched = true; // Set the flag to indicate that fetch has been performed
  //   }
  // }




  // Function to create and display the modal
  function openModal() {

      // Fetch the partial view content using AJAX
      fetch('/idra_modal_editor') 
        .then(response => response.text())
        .then(html => {
          // Create the modal container
          const modalContainer = document.createElement('div');
          modalContainer.classList.add('modal-container');
          modalContainer.innerHTML = html; // Insert the partial view's HTML
    
          // ... (rest of your modal logic, including appending to body, 
          //     adding event listeners, etc. remains the same)
        })
        .catch(error => {
          console.error('Error fetching partial view:', error);
          // Handle the error appropriately
        });



     // Call the fetchData function
  //   // Create a modal container
  //   var modalContainer = document.createElement('div');
  //   modalContainer.classList.add('modal-container');

  //   // Create a modal element
  //   var modal = document.createElement('div');
  //   modal.classList.add('modal');

  //   // Modal content
  //   var modalContent = document.createElement('div');
  //   modalContent.classList.add('modal-content');
  //   modalContent.id = 'modalContent';

  //   // Create an unordered list to display the elements as a list
  //   // Create a div for the links
  //   var linksDiv = document.createElement('div');
  //   linksDiv.classList.add('links-column');

  //   var titleElement = document.createElement('h1');
  //   titleElement.textContent = "Saved Dataset";
  //   linksDiv.appendChild(titleElement);
  //   titleElement.className = "text-center"


  //   var descriptionElement = document.createElement("h5")
  //   descriptionElement.textContent = "Select a dataset to insert in text editor:"
  //   descriptionElement.style.color = "gray"
  //   linksDiv.appendChild(descriptionElement)


  //   // Loop through modalData array and create links with click event listeners
  //   modalData.forEach(function (element) {
  //     var link = document.createElement('a');
  //     link.href = element.url; // URL as the href attribute of the link
  //     link.textContent = element.title; // Title as the visible text of the link
  //     linksDiv.appendChild(link);
      
  
  //     link.addEventListener('click', function (event) {
  //       event.preventDefault(); // Prevent default navigation behavior
  
  //       copyAndPasteText(element.title, element.url);
  //       modalContainer.style.display = 'none'; // Close the modal
  //     });
    
  
  //     if (element !== modalData[modalData.length - 1]) {
  //       linksDiv.appendChild(document.createElement('br'));
  //     }
  //   });


  //   // Function to copy and paste the text into the Quill editor
  //    function copyAndPasteText(title, url) {
  //   const range = quill.getSelection();

  //   const linkFormat = {
  //     link: url,
  //     target: '_blank',
  //   };

  //   quill.insertText(range.index, title, linkFormat);
  //   quill.setSelection(range.index, title.length, 'user');
  // }
  //   modalContent.appendChild(linksDiv);
  //   modal.appendChild(modalContent);
  //   modalContainer.appendChild(modal);
  //   document.body.appendChild(modalContainer);

  //   // Open the modal
  //   modalContainer.style.display = 'block';

  //   // Close modal when clicking outside the modal
  //   window.addEventListener('click', function (event) {
  //     if (event.target == modalContainer) {
  //       modalContainer.style.display = 'none';
  //     }
  //   });
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