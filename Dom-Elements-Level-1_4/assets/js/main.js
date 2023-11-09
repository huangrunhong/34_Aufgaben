const textInput = document.body.querySelector("form input:nth-of-type(1)");

const addBtn = document.body.querySelector("form input:nth-of-type(2)");
const section = document.getElementById("section");
const ul = document.createElement("ul");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  if (textInput.value !== "") {
    li.textContent = textInput.value;
    ul.appendChild(li);
  }
  section.appendChild(ul);
});
