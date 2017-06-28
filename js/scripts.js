var navHeader = document.querySelector(".menu");
var navToggle = document.querySelector(".toggle");
navHeader.classList.remove("menu-nojs");
navToggle.addEventListener("click", function() {
  if (navHeader.classList.contains("menu-closed")) {
    navHeader.classList.remove("menu-closed");
    navHeader.classList.add("menu-opened");
  } else {
    navHeader.classList.add("menu-closed");
    navHeader.classList.remove("menu-opened");
  }
});
