// const styles = document.body.querySelector("body>div");
// const examples = document.body.querySelectorAll(".example");

// const myFunction = () => {
//   for (let i = 0; i < examples.length; i++) {
//     examples[i].classList.toggle("example");
//   }
//   styles.classList.toggle("style");
// };

const styles = document.body.querySelector("body>div");
const examples = document.body.getElementsByClassName("example");

const myFunction = () => {
  for (let i = 0; i < examples.length; i++) {
    examples[i].classList.toggle("exampleChange");
  }
  styles.classList.toggle("styleChange");
};
