let name = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let formresult = document.getElementById("formResult");

// Function to validate email format using regular expression
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Function to validate age as a positive integer
function validateAge(age) {
    return Number.isInteger(age) && age > 17;
}
// Function to validate name as a non-empty string
function validateName(name) {
    if (name === ""){ 
        return false;
    }
    else{
      return name.trim();  
    }
    
}

// Function to validate form inputs
function validateForm() {
    const nameValue = name.value;
    const ageValue = parseInt(age.value);
    const emailValue = email.value;

    if (!validateName(nameValue)) {
        alert("Please enter a valid name.");
        return false;
    }
    if (!validateAge(ageValue)) {
        alert("Please enter a valid age.");
        return false;
    }
    if (!validateEmail(emailValue)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}
// Event listener for form submission
submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
    if (validateForm()) {
        alert("Form submitted successfully!");
    }
});