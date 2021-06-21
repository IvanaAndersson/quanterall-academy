const header = document.querySelector(".site-header");
const myNav = document.querySelector(".nav-header");

window.addEventListener("scroll", (event) => {
  // console.log(window.scrollY);
  currentY = window.scrollY;
  scrollDirection = window.scrollY > currentY ? "down" : "up";

  if (currentY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
