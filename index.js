const mobileIcon = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobile-menu");
const image = document.getElementById("hamburger-icon");

mobileIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("fade");
  if (image.getAttribute("src") === "./images/icon-hamburger.svg") {
    image.src = "./images/icon-close.svg";
  } else {
    image.src = "./images/icon-hamburger.svg";
  }
});
