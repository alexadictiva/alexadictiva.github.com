var main = document.querySelector("main");
var buttonModal = document.getElementById("buttonModal");
var itemDescription = document.getElementById("itemDescription");
buttonModal.addEventListener("clcik", buttonModal);

function showModal() {
  itemDescription.classList.toggle("modalPrueba");
  /*  main.classList.toggle("overlayModal");*/
}
