const counterElement = document.querySelector(".counter");

let count = 1000;
displayCount();
function displayCount() {
  counterElement.innerHTML = `Count: ${count}`;
}
