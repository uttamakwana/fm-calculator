const btns = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "*",
];

function handleCalculations() {
  const calcScreen = document.querySelector(".calc-screen");
  function handleCalc(e) {
    try {
      if (e.target.innerText === "Reset") {
        calcScreen.innerText = "";
      } else if (e.target.innerText === "DEL") {
        calcScreen.innerText = String(calcScreen.innerText).slice(0, -1);
      } else if (e.target.innerText === "=") {
        calcScreen.innerText = eval(calcScreen.innerText);
      } else {
        calcScreen.innerText += e.target.innerText;
      }
    } catch (error) {
      alert("Please provide a valid operations!");
    }
  }
  const bodyBtns = document.querySelectorAll(".btn");
  console.log(bodyBtns);
  bodyBtns.forEach((btn) => btn.addEventListener("click", handleCalc));
}

window.addEventListener("DOMContentLoaded", handleCalculations);

const themeNumbers = document.querySelectorAll(".theme-box-numbers span");
const themeBoxCircleInside = document.querySelector(".theme-box-circle-inside");
const calcBody = document.querySelector(".calc-body-btns");

const displayBtns = btns.map((btn, index) => {
  if (btn === "DEL") {
    return `<button key="${index}" class="btn delete">${btn}</button>`;
  } else {
    return `<button key="${index}" class="btn">${btn}</button>`;
  }
});

calcBody.innerHTML = displayBtns.join("");

// toggle theme
function toggleTheme(index) {
  const body = document.body;
  body.setAttribute("data-theme", `theme-${index}`);
  themeBoxCircleInside.style.transform = `translateX(calc(${
    index - 1
  } * 1.5rem))`;
}

themeNumbers.forEach((number, index) =>
  number.addEventListener("click", () => toggleTheme(index + 1))
);
