const output = document.body.querySelector("output");

const firstElementChildBtn = document.body.querySelector(
  "div button:nth-of-type(1)"
);

const lastElementChildBtn = document.body.querySelector(
  "div button:nth-of-type(2)"
);

const firstElementChildNextBtn = document.body.querySelector(
  "div button:nth-of-type(3)"
);

const lastElementChildNextBtn = document.body.querySelector(
  "div button:nth-of-type(4)"
);

const text1 = document.body.querySelector("ul li:nth-of-type(1)");
const text2 = document.body.querySelector("ul li:nth-of-type(2)");
const text3 = document.body.querySelector("ul li:nth-of-type(6)");
const text4 = document.body.querySelector("ul li:nth-of-type(7)");

firstElementChildBtn.addEventListener("click", () => {
  output.textContent = text1.innerText;
});
lastElementChildBtn.addEventListener("click", () => {
  output.textContent = text4.innerText;
});
firstElementChildNextBtn.addEventListener("click", () => {
  output.textContent = text2.innerText;
});
lastElementChildNextBtn.addEventListener("click", () => {
  output.textContent = text3.innerText;
});
