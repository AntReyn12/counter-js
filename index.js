let countElement = document.getElementById("count");

const initialCount = 0;
let count = 0;

function increment() {
  count = count + 1;
  countElement.innerText = count;
}

function decrement() {
  count = count - 1;
  countElement.innerText = count;
}

function reset() {
  count = initialCount;
  countElement.innerText = count;
}
