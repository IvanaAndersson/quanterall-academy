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

//hero section
const heroContent = document.querySelector(".hero-content");
const heroTitle = document.querySelector(".hero-content .container");
const companyTechnologies = document.querySelector(".company-specializations");

const cardsHeight = companyTechnologies.getBoundingClientRect().height;
const heroContentHeight = heroContent.getBoundingClientRect().height;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
if (windowHeight < 802 && windowWidth > 1024) {
  if (heroContentHeight + cardsHeight > windowHeight) {
    heroTitle.style.marginTop = `${0.15 * windowHeight - cardsHeight / 2}px`;
  } else {
    heroTitle.style.marginTop = "10vh";
  }
}
