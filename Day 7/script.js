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

//mouseover event
button.addEventListener("mouseover", function () {
  paragraph.style.backgroundColor = randomColor();
});

//Double click event
button.addEventListener("dblclick", function () {
  paragraph.style.backgroundColor = randomColor(); 
});

//Add a new paragraph

addTextbutton.addEventListener("click", function () {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph";
  newParagraph.style.color = randomColor();
  extraTextContainer.appendChild(newParagraph);
});

// remove a paragraph

removeTextButton.addEventListener("click", function () {
  let paragraphs = extraTextContainer.getElementsByTagName("p");
  if (paragraphs.length > 0) {
    extraTextContainer.removeChild(paragraphs[paragraphs.length - 1]);
  }
});