const counterElement = document.querySelector(".counter");
const incrementElement = document.querySelector(".increment");
const decrementElement = document.querySelector(".decrement");
const resetElement = document.querySelector(".reset");

let count = 1000;

const savedCount = localStorage.getItem("count");
if (savedCount) {
  count = parseInt(savedCount);
  counterElement.innerHTML = `Count: ${count}`;

}
displayCount();
function displayCount() {
  counterElement.innerHTML = `Count: ${count}`;
  localStorage.setItem("count", count);
}

incrementElement.addEventListener("click", () => {
  count++;
  displayCount();
});

decrementElement.addEventListener("click", () => {
  if (count !== 0) {
    count--;
  }
  displayCount();
});

resetElement.addEventListener("click", () => {
  count = 1000;
  displayCount();
});


