/*var main = document.querySelector("main");
var buttonModal = document.getElementById("buttonModal");

buttonModal.addEventListener("clcik", buttonModal);

function showModal() {
  var itemDescription = document.getElementById("itemDescription");
  itemDescription.classList.toggle("modalStyles");
}

function showModal1() {
  var itemDescription1 = document.getElementById("itemDescription1");
  itemDescription1.classList.toggle("modalStyles");
}
function showModal2() {
  var itemDescription2 = document.getElementById("itemDescription2");
  itemDescription2.classList.toggle("modalStyles");
}
function showModal3() {
  var itemDescription3 = document.getElementById("itemDescription3");
  itemDescription3.classList.toggle("modalStyles");
}*/

/* function closeButton() {
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
} */

let overlay = document.createElement("div");
let overlay2 = document.createElement("div");
function showModal1() {
  overlay.className = "overlay";
  overlay.id = "overlay";
  let itemDescription = document.querySelector(".itemDescription");
  itemDescription.style.display = "block";
  document.body.appendChild(overlay);
}
function showModal2() {
  overlay2.className = "overlay";
  overlay2.id = "overlay";
  let itemDescription2 = document.querySelector(".itemDescription2");
  itemDescription2.style.display = "block";
  document.body.appendChild(overlay2);
}

function removeModal() {
  itemDescription.style.display = "none";
  document.body.removeChild(overlay);
}
function removeModal2() {
  itemDescription2.style.display = "none";
  document.body.removeChild(overlay2);
}
