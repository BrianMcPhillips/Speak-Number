//Import DOM elements
const msgEl = document.getElementById('msg');

// Set state
const randomNum = getRandomNumber();

console.log('Number:', randomNum);

// Functions

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; 
}