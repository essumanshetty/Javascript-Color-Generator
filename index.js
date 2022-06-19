var bdy = document.querySelector("body");
var bgClr = document.querySelector(".bgClr");

var button = document.querySelector("button");
var hexCode = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

button.addEventListener("click", function () {
  var newHexCode = "#";
  for (let i = 0; i < 6; i++) {
    newHexCode += hexCode[randomNumber()];
  }
  bdy.style.backgroundColor = newHexCode;
  bgClr.innerHTML = newHexCode;
});

function randomNumber() {
  return Math.floor(Math.random() * hexCode.length);
}
