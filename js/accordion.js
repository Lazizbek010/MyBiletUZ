//  ACCORDION MENU
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    if (e.target.classList[1] === "accordion-item") {
      accordionItems.forEach((el, i) => {
        index === i
          ? li.classList.toggle("active")
          : el.classList.remove("active");
      });
    }
  });
});
