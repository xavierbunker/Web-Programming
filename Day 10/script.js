let background = document.getElementById("background");
let button = document.getElementById("colorButton");
let number = document.getElementById("number");
let checkButton = document.getElementById("checkButton");
let resultEvenOdd = document.getElementById("resultEvenOdd");
let reverseButton = document.getElementById("reverseButton");
let stringInput = document.getElementById("stringInput");
let resultReverse = document.getElementById("resultReverse");
let countVowelsButton = document.getElementById("countVowelsButton");
let vowelString = document.getElementById("vowelString");
let resultVowels = document.getElementById("resultVowels");
let largestButton = document.getElementById("largestButton");
let numbersInput = document.getElementById("numbers");
let largestResult = document.getElementById("largestResult");

// Function to generate random color
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change background color of the entire page on button click
button.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
});

// Find odd or even number that was input by user
checkButton.addEventListener("click", function () {
    let num = parseInt(number.value);
    if (num % 2 === 0) {
        resultEvenOdd.innerHTML = "The number is even.";
    } else {
        resultEvenOdd.innerHTML = "The number is odd.";
    }
});

// Reverse the string input by user
reverseButton.addEventListener("click", function () {
    let str = stringInput.value;
    let reversedStr = str.split("").reverse().join("");
    resultReverse.innerHTML = "Reversed string: " + reversedStr;
});

// Count the vowels in the string input by user
countVowelsButton.addEventListener("click", function () {
    let text = vowelString.value;
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if ("aeiou".includes(text[i].toLowerCase())) {
            count++;
        }
    }
    resultVowels.innerText = "Number of vowels: " + count;
});

// Find the largest number in an array of numbers input by user
largestButton.addEventListener("click", function () {
  let numbers = numbersInput.value.split(",").map(Number);
  let largestNumber = Math.max(...numbers);
  largestResult.innerText = "The largest number is: " + largestNumber;
});


