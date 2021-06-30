const accordionButton = document.querySelectorAll(".accordion__button");

accordionButton.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionBody = button.nextElementSibling;
    button.classList.toggle("accordion__button--active");

    if (button.classList.contains("accordion__button--active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});
