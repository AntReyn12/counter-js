let countElement = document.getElementById("count");
let saveElement = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countElement.innerText = count;
}

function decrement() {
  count -= 1;
  countElement.innerText = count;
}

function save() {
  let saveNumber = " " + count + " - ";
  saveElement.textContent += saveNumber;
  countElement.textContent = 0;
  count = 0;
}

function resetEntry() {
  saveElement.innerText = "Previous entries: ";
}
