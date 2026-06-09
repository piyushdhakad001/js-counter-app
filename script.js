const counterElement = document.querySelector(".counter");
const incrementElement = document.querySelector(".increment");

let count = 1000;
displayCount();
function displayCount() {
  counterElement.innerHTML = `Count: ${count}`;
}

incrementElement.addEventListener("click", () => {
  count++;
  displayCount();
});