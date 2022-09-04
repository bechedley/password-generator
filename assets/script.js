// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}

  // Define function to generate password

  function generatePassword () {

  // Add function message for password length error

  function lengthErrorMessage() {
    window.alert('Sorry, your password must be between 8 and 128 characters. Please try again.')
    generatePassword();
  }

    // Add function message for character type error
  function characterTypeError() {
    window.alert('Sorry, your password must contain at least one character type. Please try again.')
      characterTypePrompt();
  }

  // Add prompt window for password length

  var passwordLength = window.prompt('How many characters does your password need to be?');

  // If user pressed Cancel, immediately end function
  if (!passwordLength) {
    return;
  }

  // If user chose a value less than 8, display re-try message
  else if (
    (passwordLength < 8) ||
    (passwordLength > 128)
  ) {
    lengthErrorMessage();
  }

  // If user chooses a valid number, run next function
  else if (passwordLength >= 8 && passwordLength <= 128) {
    passwordLength = Number(passwordLength);
    characterTypePrompt();
  }

  // If user chooses enters something other than a number
 else if (passwordLength === NaN) 
  return;
 

 // Choose character types
 function characterTypePrompt() {

 // Ask user if the password should include numbers
var includeNumbers = confirm('Include numbers?');

// If user pressed ok, includeNumbers = true and we ask the user if the password should include lower case characters
var includeLower = confirm('Include lower case characters?');

// If user pressed ok, includeLower = true and we ask the user if the password should include upper case characters
var includeUpper = confirm('Include upper case characters?');

// If user pressed ok, includeUpper = true and we ask the user if the password should include special characters
var includeSpecial = confirm('include special characters?');

// If user pressed ok, includeSpecial = true and we generate the password based on the user selections
  
// Confirm choices to determine appropriate function
  if (includeLower == true &&
      includeUpper == true &&
      includeSpecial == true &&
      includeNumbers == true) {

        generateLUSN();
      return;
    }

else if (includeLower == true &&
includeUpper != true &&
includeSpecial != true &&
includeNumbers != true) {

  generateL();
return;
}

else if (includeLower != true &&
includeUpper == true &&
includeSpecial != true &&
includeNumbers != true) {

  generateU();
return;}

else if (includeLower != true &&
includeUpper != true &&
includeSpecial == true &&
includeNumbers != true) {

  generateS();
return;}

else if (includeLower != true &&
includeUpper != true &&
includeSpecial != true &&
includeNumbers == true) {

  generateN();
return;}

else if (includeLower == true &&
includeUpper == true &&
includeSpecial != true &&
includeNumbers != true) {

  generateLU();
return;}

else if (includeLower == true &&
includeUpper != true &&
includeSpecial == true &&
includeNumbers != true) {
  
  generateLS();
return;}

else if (includeLower == true &&
includeUpper != true &&
includeSpecial != true &&
includeNumbers == true) {

generateLN();
return;}

else if (includeLower != true &&
includeUpper == true &&
includeSpecial == true &&
includeNumbers != true) {

  generateUS();
return;}

else if (includeLower != true &&
includeUpper == true &&
includeSpecial != true &&
includeNumbers == true) {

  generateUN();
return;}

else if (includeLower != true &&
includeUpper != true &&
includeSpecial == true &&
includeNumbers == true) {

  generateSN();
return;}

else if (includeLower == true &&
includeUpper == true &&
includeSpecial == true &&
includeNumbers != true) {

  generateLUS();
return;}

else if (includeLower == true &&
includeUpper == true &&
includeSpecial != true &&
includeNumbers == true) {

  generateLUN();
return;}

else if (includeLower == true &&
includeUpper != true &&
includeSpecial == true &&
includeNumbers == true) {

  generateLSN();
return;}

else if (includeLower != true &&
includeUpper == true &&
includeSpecial == true &&
includeNumbers == true) {

  generateUSN();
return;}


else if (includeLower != true &&
  includeUpper != true &&
  includeSpecial != true &&
  includeNumbers != true)

  characterTypeError();

  }

// Define functions and array variables for each choice

function generateLUSN() {

  var allCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  // Access user password length from function

  // Create a for loop to set the password length
  let passwordLUSN = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexLUSN = (Math.floor(Math.random() * allCharacters.length))
    passwordLUSN += allCharacters[indexLUSN] + '';}

  window.alert('Your password is ' + passwordLUSN);


  return;

}

function generateL() {

  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  let passwordL = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexL = (Math.floor(Math.random() * lower.length))
    passwordL += lower[indexL] + '';}

  window.alert('Your password is ' + passwordL);

  return;
}

function generateU() {

  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  let passwordU = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexU = (Math.floor(Math.random() * upper.length))
    passwordU += upper[indexU] + '';}

  window.alert('Your password is ' + passwordU);

  return;
}

function generateS() {

  var specials = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];

  let passwordS = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexS = (Math.floor(Math.random() * specials.length))
    passwordS += specials[indexS] + '';}

  window.alert('Your password is ' + passwordS);

  return;
}

function generateN() {

  var number = [0,1,2,3,4,5,6,7,8,9];

  let passwordN = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexN = (Math.floor(Math.random() * number.length))
    passwordN += number[indexN] + '';}

  window.alert('Your password is ' + passwordN);

  return;
}

function generateLU() {

  var lowerUpper  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  let passwordLU = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexLU = (Math.floor(Math.random() * lowerUpper.length))
    passwordLU += lowerUpper[indexLU] + '';}

  window.alert('Your password is ' + passwordLU);

  return;
}

function generateLS() {

  var lowerSpecial  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];

  let passwordLS = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexLS = (Math.floor(Math.random() * lowerSpecial.length))
    passwordLS += lowerSpecial[indexLS] + '';}

  window.alert('Your password is ' + passwordLS);

  return;
}

function generateLN() {

  var lowerNumber  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];

  let passwordLN = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexLN = (Math.floor(Math.random() * lowerNumber.length))
    passwordLN += lowerNumber[indexLN] + '';}

  window.alert('Your password is ' + passwordLN);

  return;
}

function generateUS() {

  var upperSpecial  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];

  let passwordUS = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexUS = (Math.floor(Math.random() * upperSpecial.length))
    passwordUS += upperSpecial[indexUS] + '';}

  window.alert('Your password is ' + passwordUS);

  return;
}

function generateUN() {

  var upperNumber  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];

  let passwordUN = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexUN = (Math.floor(Math.random() * upperNumber.length))
    passwordUN += upperNumber[indexUN] + '';}

  window.alert('Your password is ' + passwordUN);

  return;
}

function generateSN() {

  var specialNumber  = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9];

  let passwordSN = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexSN = (Math.floor(Math.random() * specialNumber.length))
    passwordSN += specialNumber[indexSN] + '';}

  window.alert('Your password is ' + passwordSN);

  return;
}

function generateLUS() {

  var lowerUS  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];

  let passwordLUS = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexLUS = (Math.floor(Math.random() * lowerUS.length))
    passwordLUS += lowerUS[indexLUS] + '';}

    window.alert('Your password is ' + passwordLUS);

  return;
}

function generateLUN() {

  var lowerUN  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];

  let passwordLUN = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexLUN = (Math.floor(Math.random() * lowerUN.length))
    passwordLUN += lowerUN[indexLUN] + '';}

  window.alert('Your password is ' + passwordLUN);

  return;
}

function generateLSN() {

  var lowerSN  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9];

  let passwordLSN = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexLSN = (Math.floor(Math.random() * lowerSN.length))
    passwordLSN += lowerSN[indexLSN] + '';}

  window.alert('Your password is ' + passwordLSN);

  return;
}

function generateUSN() {

  var upperSN  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9];

  let passwordUSN = '';

  for (i = 0; i < passwordLength; i++) {
    
    var indexUSN = (Math.floor(Math.random() * upperSN.length))
    passwordUSN += upperSN[indexUSN] + '';}

  window.alert('Your password is ' + passwordUSN);

  return;
}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);