let hasFetched = false; // Variabile a livello di modulo
let modalData = []; // Variabile a livello di modulo

// Funzione per fetch dei dati
function fetchData() {
  if (!hasFetched) { // Controlla se la fetch non è stata ancora eseguita
    fetch('/idra_modal_editor', {
      method: 'GET'
    })
    .then(response => {
      if (response.ok) {
        return response.text(); // Supponiamo che la risposta sia HTML
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
      hasFetched = true; // Imposta il flag per indicare che la fetch è stata eseguita
    })
    .catch(error => {
      console.error('Error updating partial view:', error);
    });
  }
}

// Funzione per creare e mostrare il modal
function openModal() {
  // Verifica se i dati sono stati fetchati, se no fetcha i dati
  fetchData();

  // Crea un contenitore per il modal
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  // Crea un elemento modal
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Contenuto del modal
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.id = 'modalContent';

  // Crea un div per i link
  const linksDiv = document.createElement('div');
  linksDiv.classList.add('links-column');

  const titleElement = document.createElement('h1');
  titleElement.textContent = "Saved Dataset";
  linksDiv.appendChild(titleElement);
  titleElement.className = "text-center";

  const descriptionElement = document.createElement("h5");
  descriptionElement.style.color = "gray";
  linksDiv.appendChild(descriptionElement);

  // Loop attraverso modalData e crea i link con i pulsanti di copia
  modalData.forEach(function (element) {
    const linkContainer = document.createElement('div'); // Contenitore per link e pulsante
    linkContainer.classList.add('link-container');

    const link = document.createElement('a');
    link.href = element.url;
    link.textContent = element.title + ' ';
    link.target = "_blank"; // Apri in una nuova scheda/finestra
    linkContainer.appendChild(link);

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Paste';
    copyButton.style.border = '1px solid red';
    copyButton.style.borderRadius = '5px';
    copyButton.style.marginLeft = '2em';
    copyButton.style.padding = '2px';
    copyButton.style.color = 'red';

    copyButton.addEventListener('click', function () {
      copyAndPasteText(element.title, element.url); // Riutilizza la funzione esistente
    });
    linkContainer.appendChild(copyButton);

    linksDiv.appendChild(linkContainer); // Aggiungi il contenitore a linksDiv
    if (element !== modalData[modalData.length - 1]) {
      linksDiv.appendChild(document.createElement('br'));
    }
  });

  // Funzione per copiare e incollare il testo nel Quill editor
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

  // Apri il modal
  modalContainer.style.display = 'block';

  // Chiudi il modal cliccando fuori dal modal
  window.addEventListener('click', function (event) {
    if (event.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  });
}

// Funzione per creare l'editor Quill
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
    };
    modules.imageUpload = {
      url: $(container).data("uploadImagesPath"),
      method: "POST",
      name: "image",
      withCredentials: false,
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
