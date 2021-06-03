let overlay = document.createElement("div");
let overlay2 = document.createElement("div");
let overlay3 = document.createElement("div");
let overlay4 = document.createElement("div");

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
function showModal3() {
  overlay3.className = "overlay";
  overlay3.id = "overlay";
  let itemDescription3 = document.querySelector(".itemDescription3");
  itemDescription3.style.display = "block";
  document.body.appendChild(overlay3);
}
function showModal4() {
  overlay4.className = "overlay";
  overlay4.id = "overlay";
  let itemDescription4 = document.querySelector(".itemDescription4");
  itemDescription4.style.display = "block";
  document.body.appendChild(overlay4);
}

function removeModal() {
  itemDescription.style.display = "none";
  document.body.removeChild(overlay);
}
function removeModal2() {
  itemDescription2.style.display = "none";
  document.body.removeChild(overlay2);
}
function removeModal3() {
  itemDescription3.style.display = "none";
  document.body.removeChild(overlay3);
}
function removeModal4() {
  itemDescription4.style.display = "none";
  document.body.removeChild(overlay4);
}
