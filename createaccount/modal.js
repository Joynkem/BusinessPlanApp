// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector(".btn-open");
// const closeModalBtn = document.querySelector(".btn-close");

// const openModal = function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   };
//   openModalBtn.addEventListener("click", openModal);

//   const closeModal = function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   };
//   closeModalBtn.addEventListener("click", closeModal);
//   overlay.addEventListener("click", closeModal);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}