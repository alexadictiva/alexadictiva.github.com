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
