// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables holding each character type

var numbers = "0123456789";
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var capLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerLetters = capLetters.toLowerCase();
console.log(numbers);
console.log(capLetters.length);
console.log(lowerLetters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
