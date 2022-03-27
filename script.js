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

const moonIcon = "<i class='uil uil-moon'></i>";
const sunIcon = "<i class='uil uil-sun'></i>";
const themeButton = document.querySelector(".change-theme");
const elementsWithBackcgroundToChange =
  document.querySelectorAll(".back-theme");
const elementsWithTextToChange = document.querySelectorAll(".text-theme");

const storedTheme = localStorage.getItem("theme");

if (!storedTheme || storedTheme === "dark") {
  localStorage.setItem("theme", "dark");
  themeButton.innerHTML = sunIcon;

  elementsWithBackcgroundToChange.forEach((element) => {
    element.classList.remove("back-theme");
  });

  elementsWithTextToChange.forEach((element) => {
    element.classList.remove("text-theme");
  });
} else {
  localStorage.setItem("theme", "light");
  themeButton.innerHTML = moonIcon;
}

const setButtonIcon = () => {
  const currentIconClass = themeButton.children[0].classList[1];

  if (currentIconClass === "uil-sun") {
    localStorage.setItem("theme", "light");
    themeButton.innerHTML = moonIcon;
    return;
  }

  localStorage.setItem("theme", "dark");
  themeButton.innerHTML = sunIcon;
};

themeButton.addEventListener("click", () => {
  setButtonIcon();

  elementsWithBackcgroundToChange.forEach((element) => {
    element.classList.toggle("back-theme");
  });

  elementsWithTextToChange.forEach((element) => {
    element.classList.toggle("text-theme");
  });
});
