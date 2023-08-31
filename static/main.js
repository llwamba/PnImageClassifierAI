// Drag and drop image handling

var fileDrag = document.getElementById("drag-file");
var fileSelect = document.getElementById("file-upload");

// Add event listeners
fileDrag.addEventListener("dragover", fileDragHover, false);
fileDrag.addEventListener("dragleave", fileDragHover, false);
fileDrag.addEventListener("drop", fileSelectHandler, false);
fileSelect.addEventListener("change", fileSelectHandler, false);

function fileDragHover(e) {
  // prevent default behaviour
  e.preventDefault();
  e.stopPropagation();

  fileDrag.className =
    e.type === "dragover" ? "upload-section dragover" : "upload-section";
}

function fileSelectHandler(e) {
  // handle file selecting
  var files = e.target.files || e.dataTransfer.files;
  fileDragHover(e);
  for (var i = 0, f; (f = files[i]); i++) {
    previewFile(f);
  }
}

// Web page elements for functions to use

var imagePreview = document.getElementById("image-preview");
var uploadCaption = document.getElementById("upload-caption");
var predResult = document.getElementById("result");

function clearImage() {
  fileSelect.value = "";

  // remove image sources and hide them
  imagePreview.src = "";
  predResult.innerHTML = "";

  hide(imagePreview);
  //   hide(imageDisplay);
  //   hide(loader);

  show(uploadCaption);

  imageDisplay.classList.remove("loading");
}

function previewFile(file) {
  // show the preview of the image
  console.log(file.name);
  var fileName = encodeURI(file.name);

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    imagePreview.src = URL.createObjectURL(file);

    show(imagePreview);
    hide(uploadCaption);

    // reset
    predResult.innerHTML = "";
  };
}

// Helper functions
function hide(el) {
  // hide an element
  el.classList.add("hidden");
}
function show(el) {
  // show an element
  el.classList.remove("hidden");
}
