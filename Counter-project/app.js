// step 1)
// create counter variable

// step 2)
// assign dom buttons to variables

// step 2)
// select increase button from DOM
// add click event
// add +1 to counter for increase button (function)

// step 3)
// select decrease button from DOM
// add click event
// add +1 to counter for increase button (function)

// step 4)
// select reset button from DOM
// add click event
// remove total score and reset counter

// step 5)
// change color of positive number to green

// step 6)
// change color of negative to red

//step 7
// 0 remains black

let counter = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
const bIncrease = document.querySelector(".btn-increase");
const reset = document.querySelector(".btn-reset");
const bDecrease = document.querySelector(".btn-decrease");

// bIncrease.addEventListener;
bIncrease.addEventListener("click", function () {
  counter += 1;
  value.textContent = counter;
  if (counter === 0) {
    value.style.color = "black";
  }
  if (counter > 0) {
    value.style.color = "green";
  }
});

// bDecrease.addEventListener
bDecrease.addEventListener("click", function () {
  counter -= 1;
  value.textContent = counter;
  if (counter === 0) {
    value.style.color = "black";
  }
  if (counter < 0) {
    value.style.color = "red";
  }
});

reset.addEventListener("click", function () {
  counter = 0;
  value.textContent = 0;
  value.style.color = "black";
});
