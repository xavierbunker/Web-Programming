function greet(name) {
    console.log(`Hello, ${name}!`);
}

console.log(greet("World"));

function isPostive(num) {
    return num > 0;
}

//Arrow function
let greetName = (name) => "Hello, " + name + "!";
console.log(greetName("World"));

let isPositive = (num) => num > 0;
console.log(isPositive(10));