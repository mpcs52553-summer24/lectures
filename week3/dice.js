// This is a helpful function to generate a random number from 1 to 6
const pickRandomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// Your code goes here...
document.addEventListener("DOMContentLoaded", prepareListeners)

function prepareListeners() {
  const link = document.querySelector("#rollLink")
  link.addEventListener("click", rollTheDice)
}

function rollTheDice(event) {
  event.preventDefault();
  console.log("Rolling the dice...")
  const images = document.querySelectorAll("#dice img")
  images[0].src = "images/" + pickRandomNumber() + ".png"
  images[1].src = "images/" + pickRandomNumber() + ".png"
}



