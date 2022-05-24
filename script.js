
//variables holding each character type
var passLength = 8;
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','"','|','?','/','<','>'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var capLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//use arrow function to utilize toLowerCase() and convert capLetters array into lower case
var lowerLetters = capLetters.map(lowercase => lowercase.toLowerCase());
var passCriteria = [];
var passwordArray = []; //blank password array to pass passCriteria and passlength
console.log(numbers);
console.log(capLetters.length);
console.log(lowerLetters);
console.log(passCriteria)


//  prompt if lowercase,uppercase, special characters
// 2. validate input that 8-128 and at least one character type is being selected
// 3. generate random password based on selections

// 4. display the password

// Assignment Code
var generateBtn = document.querySelector("#generate");
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
  var options = userPrompt(); //create options based on prompts 
  console.log(options);
  for(var i = 0; i < options.passLength; i++) { //loops goes for how long password length user selected 
// used mathfloor to round mathrandom decimal and used the options array of total chracters 
    var createRandom = Math.floor(Math.random() * options.passCriteria.length); 
    console.log(createRandom);
    var digit = options.passCriteria[createRandom];  // create digit variable tutor suggested 
    passwordArray.push(digit); //pushed the data into the array 

  }
  return passwordArray.join(""); // returning the paswordarray joining each charater with space between them

  }



// Function for password length prompt ParseInt to convert it to interger from string
function userPrompt() {
  passLength = parseInt(prompt('What length would you like your password? 8-128 characters'));
  console.log(passLength); // should be NaN if string is entered
//Checking if its not a number, or if it is less than 8 characters long, or over 128 characters long
if(isNaN(passLength) || passLength < 8 || passLength > 128) {
  alert("Password length has to be number 8-128 characters");
  return false;
  
}
//popup asking if they want lowercase letters used concat to add user selections to passcriteria array
if(confirm("Want lowercase letters in your password?")) {
  passCriteria = passCriteria.concat(lowerLetters);
}
//popup asking if they want uppercase letters used concat to add user selections to passcriteria array
if(confirm("Want uppercase letters in your password?")) {
  passCriteria = passCriteria.concat(capLetters);
}
//popup asking if they want special characters used concat to add user selections to passcriteria array
if(confirm("Want special characters in your password?")) {
  passCriteria = passCriteria.concat(specialCharacters);
}
//popup asking if they want numbers used concat to add user selections to passcriteria array
if(confirm("Want numbers in your password?")) {
  passCriteria = passCriteria.concat(numbers);
}
 console.log(passCriteria);
return {passCriteria,passLength}; //create passCriteria and passLength object to be used  inside generatePassword() function

}