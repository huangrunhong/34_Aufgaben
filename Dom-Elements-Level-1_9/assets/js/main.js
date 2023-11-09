const farbeAuswahlen = document.getElementById("farbeAuswahlen");

const button = document.getElementById("button");
const form = document.body.querySelector("form");

button.addEventListener("click", () => {
  const index = farbeAuswahlen.selectedIndex;
  const farbe = farbeAuswahlen.value.toLowerCase().split(" ").join("");
  form.style.backgroundColor = farbe;
  farbeAuswahlen.remove(index);
});
