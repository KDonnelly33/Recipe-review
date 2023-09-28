// hamburger menu
var burgerMenu = document.querySelector(".hamburger-menu");
var overlay = document.querySelector(".navigation-bar");

burgerMenu.addEventListener("click", function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});
