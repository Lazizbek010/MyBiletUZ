const langOptionItems = document.querySelectorAll(".lang-option-item");
const langOptions = document.querySelector(".nav__lang-options");
const langTextInfo = document.querySelector(".lang-text-info");
const langImg = document.querySelector(".lang-img");

function openLangMenu() {
  langOptions.classList.toggle("hidden");
}

if (langOptionItems) {
  langOptionItems.forEach((Item) => {
    Item.addEventListener("click", (e) => {
      langOptions.classList.add("hidden");
      const id = e.target.getAttribute("id");
      switch (id) {
        case "uz":
          langTextInfo.textContent = "UZ";
          langImg.src = '../images/uzb_flag.svg'
          break;
        case "ru":
          langTextInfo.textContent = "RU";
          langImg.src = '../images/ru_flag.svg'
          break;
        default:
          break;
      }
    });
  });
}
            