// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables holding each character type
var passLength = 8;
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','"','|','?','/','<','>'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var capLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//use arrow function to utilize toLowerCase() and convert capLetters array into lower case
var lowerLetters = capLetters.map(lowercase => lowercase.toLowerCase());
var passCriteria = [];
console.log(numbers);
console.log(capLetters.length);
console.log(lowerLetters);


//  prompt if lowercase,uppercase, special characters
// 2. validate input that 8-128 and at least one character type is being selected
// 3. generate random password based on selections

// 4. display the password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}





//generate password function based on prompt criteria

function generatePassword() {
  console.log('Clicked Button')


  return "Generated Password goes here"
  }



// Function for password lenght prompt ParseInt to convert it to interger from string


function userPrompt() {
  passLength = parseInt(prompt('What length would you like your password? 8-128 characters'));

//Checking if its not a number
if(isNaN(passLength) || passLength < 8 || passLength > 128) {
  alert("Password length has to be number 8-128 characters");
  return false;
}
//popup asking if they want lowercase letters
if(confirm("Want lowercase letters in your passwork?")) {
  passCriteria = passCriteria.concat(lowerLetters);
}
//popup asking if they want uppercase letters
if(confirm("Want uppercase letters in your passwork?")) {
  passCriteria = passCriteria.concat(capLetters);
}
//popup asking if they want special characters
if(confirm("Want special characters in your passwork?")) {
  passCriteria = passCriteria.concat(specialCharacters);
}
//popup asking if they want numbers
if(confirm("Want numbers in your passwork?")) {
  passCriteria = passCriteria.concat(lowerLetters);
}

return true;

}