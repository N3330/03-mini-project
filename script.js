// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables holding each character type
var passLength = 8;
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','"','|','?','/','<','>'];
var numbers = "0123456789";
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = capLetters.toLowerCase();
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





//generate password function

function generatePassword() {
  console.log('Clicked Button')


  return "Generated Password goes here"
  }



// Function for password lenght prompt ParseInt to convert it to interger from string


function userPrompt() {
  passLength = parseInt(prompt('Length of password? 8-128 characters'));

//Checking if its not a number
if(isNaN(passLength) || passLength < 8 || passLength >128) {
  alert("Password length has to be number between 8-128");
  return false;
}

}