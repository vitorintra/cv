const role = document.querySelector("header .text-wrapper > span");
const phrase = "Front end developer";

let index = 0;
const typeWriter = () => {
  if (index < phrase.length) {
    role.textContent += phrase.charAt(index);
    index++;
    setTimeout(typeWriter, 110);
  }
};

typeWriter();

const moonIcon = '<i class="uil uil-moon"></i>';
const sunIcon = '<i class="uil uil-sun"></i>';
const themeButton = document.querySelector(".change-theme");
const elementsWithBackcgroundToChange =
  document.querySelectorAll(".back-theme");
const elementsWithTextToChange = document.querySelectorAll(".text-theme");
themeButton.innerHTML = sunIcon;

const setButtonIcon = () => {
  const currentIconClass = themeButton.children[0].classList[1];
  if (currentIconClass === "uil-sun") {
    themeButton.innerHTML = moonIcon;
    return;
  }

  themeButton.innerHTML = sunIcon;
};

elementsWithBackcgroundToChange.forEach((element) => {
  element.classList.remove("back-theme");
});

elementsWithTextToChange.forEach((element) => {
  element.classList.remove("text-theme");
});

themeButton.addEventListener("click", () => {
  setButtonIcon();

  elementsWithBackcgroundToChange.forEach((element) => {
    element.classList.toggle("back-theme");
  });

  elementsWithTextToChange.forEach((element) => {
    element.classList.toggle("text-theme");
  });
});
