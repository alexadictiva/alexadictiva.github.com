var main = document.querySelector("main");
var buttonModal = document.getElementById("buttonModal");

buttonModal.addEventListener("clcik", buttonModal);

function showModal() {
  var itemDescription = document.getElementById("itemDescription");
  itemDescription.classList.add("modalStyles");
}

function showModal1() {
  var itemDescription1 = document.getElementById("itemDescription1");
  itemDescription1.classList.add("modalStyles");
}
function showModal2() {
  var itemDescription2 = document.getElementById("itemDescription2");
  itemDescription2.classList.add("modalStyles");
}
function showModal3() {
  var itemDescription3 = document.getElementById("itemDescription3");
  itemDescription3.classList.add("modalStyles");
}

function closeButton() {
  itemDescription.classList.remove("modalStyles");
}
function closeButton1() {
  itemDescription1.classList.remove("modalStyles");
}
function closeButton2() {
  itemDescription2.classList.remove("modalStyles");
}
function closeButton3() {
  itemDescription3.classList.remove("modalStyles");
}
