const navHome = document.body.querySelector("#navHome");
const navNews = document.body.querySelector("#navNews");
const navContact = document.body.querySelector("#navContact");
const navChange = document.body.querySelector("#navChange");

navChange.addEventListener("click", () => {
  const navHomeText = navHome.innerText.split("").reverse().join("");
  navHome.classList.add("styleChange");
  navHome.textContent = navHomeText;
});
