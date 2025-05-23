window.onload = function() {
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = ["spade", "club", "heart", "diamond"];

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.querySelector(".number").innerHTML = randomNumber;
  document.querySelector(".top-suit").classList.add(randomSuit);
  document.querySelector(".bottom-suit").classList.add(randomSuit);
};
