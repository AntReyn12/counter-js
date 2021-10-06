// document.getElementById("count").innerText = 5;

let countElement = document.getElementById("count");

console.log(countElement);

let count = 0;

function increment() {
  count = count + 1;
  countElement.innerText = count;
}
