const counterElement = document.querySelector(".counter");
const incrementElement = document.querySelector(".increment");
const decrementElement = document.querySelector(".decrement");
const resetElement = document.querySelector(".reset");

let count = 1000;
displayCount();

function displayCount() {
  counterElement.innerHTML = `Count: ${count}`;
}

incrementElement.addEventListener("click", () => {
  count++;
  displayCount();
});

decrementElement.addEventListener("click", () => {
  count--;
  displayCount();
});

resetElement.addEventListener("click", () => {
  if (count !== 0) {
    count--;
  }
  displayCount();
});