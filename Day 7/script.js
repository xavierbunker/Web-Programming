//Select Elements....

let paragraph = document.getElementById("text");
let button = document.getElementById("colorButton");
let addTextbutton = document.getElementById("addTextButton");
let removeTextButton = document.getElementById("removeTextButton");
let extraTextContainer = document.getElementById("extra-text");

//fuction to generate random color
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Change text color on button click

button.addEventListener("click", function () {
  paragraph.style.color = randomColor();
});