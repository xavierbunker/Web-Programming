let background = document.getElementById("background");
let button = document.getElementById("colorButton");
let number = document.getElementById("number");
let checkButton = document.getElementById("checkButton");
let result = document.getElementById("result");

//fuction to generate random color
function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//Change Background color on button click

button.addEventListener("click", function () {
    background.style.color = randomColor();
  });

//Find odd or even number that was input by user

checkButton.addEventListener("click", function () {
    let num = parseInt(number.value);
    if (num % 2 === 0) {
      result.innerHTML = "The number is even.";
    } else {
        result.innerHTML = "The number is odd.";
    }
    });

    //Count the vowel that a user eneters

    function countVowels() {
        let text = document.getElementById("text").value;
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if ("aeiou".includes(text[i].toLowerCase())) {
                count++;
            }
        }
        document.getElementById("vowelCount").innerText = "Number of vowels: " + count;
    }
