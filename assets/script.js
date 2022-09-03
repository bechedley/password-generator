// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 // Combined character array 
  var characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    // alphabet array
   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // special character array
    var special = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];
    // numeric array
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    // uppercase array
    var upperAbc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  

  passwordText.value = password;

  // Define generatePassword function

  function generatePassword() {

     // Define function to generate password

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
 else if (passwordLength === NaN) {
  return;
 }

 // Choose character types
 function characterTypePrompt() {
 // Ask user if the password should include numbers
var includeNumbers = window.confirm('Include numbers?');

// If user pressed ok, includeNumbers = true and we ask the user if the password should include lower case characters
var includeLower = window.confirm('Include lower case characters?');

// If user pressed ok, includeLower = true and we ask the user if the password should include upper case characters
var includeUpper = window.confirm('Include upper case characters?');

// If user pressed ok, includeUpper = true and we ask the user if the password should include special characters
var includeSpecial = window.confirm('include special characters?');

// If user pressed ok, includeSpecial = true and we generate the password based on the user selections
  
// Confirm choices to determine appropriate function
  if ((includeLower = true) &&
      (includeUpper = true) &&
      (includeSpecial = true) &&
      (includeNumbers = true)) {

        generateLUSN();}


  // Use lower case as default if no other character types are chosen
  else if ((includeLower = false) &&
  (includeUpper = false) &&
  (includeSpecial = false) &&
  (includeNumbers = false)) {

    characterTypeError();
}

else if ((includeLower = true) &&
(includeUpper = false) &&
(includeSpecial = false) &&
(includeNumbers = false)) {

  generateL();}

else if ((includeLower = false) &&
(includeUpper = true) &&
(includeSpecial = false) &&
(includeNumbers = false)) {

  generateU();}

else if ((includeLower = false) &&
(includeUpper = false) &&
(includeSpecial = true) &&
(includeNumbers = false)) {

  generateS();}

else if ((includeLower = false) &&
(includeUpper = false) &&
(includeSpecial = false) &&
(includeNumbers = true)) {

  generateN();}

else if ((includeLower = true) &&
(includeUpper = true) &&
(includeSpecial = false) &&
(includeNumbers = false)) {

  generateLU();}

else if ((includeLower = true) &&
(includeUpper = false) &&
(includeSpecial = true) &&
(includeNumbers = false)) {
  
  generateLS();}

else if ((includeLower = true) &&
(includeUpper = false) &&
(includeSpecial = false) &&
(includeNumbers = true)) {

generateLN();}

else if ((includeLower = false) &&
(includeUpper = true) &&
(includeSpecial = true) &&
(includeNumbers = false)) {

  generateUS();}

else if ((includeLower = false) &&
(includeUpper = true) &&
(includeSpecial = false) &&
(includeNumbers = true)) {

  generateUN();}

else if ((includeLower = false) &&
(includeUpper = false) &&
(includeSpecial = true) &&
(includeNumbers = true)) {

  generateSN();}

else if ((includeLower = true) &&
(includeUpper = true) &&
(includeSpecial = true) &&
(includeNumbers = false)) {

  generateLUS();}

else if ((includeLower = true) &&
(includeUpper = true) &&
(includeSpecial = false) &&
(includeNumbers = true)) {

  generateLUN();}

else if ((includeLower = true) &&
(includeUpper = false) &&
(includeSpecial = true) &&
(includeNumbers = true)) {

  generateLSN();}

else if ((includeLower = false) &&
(includeUpper = true) &&
(includeSpecial = true) &&
(includeNumbers = true)) {

  generateUSN();}
}

// Define functions and array variables for each choice

function generateLUSN() {

  var allCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  var indexLUSN = Math.floor(Math.random() * allCharacters.length);
  var passwordLUSN = allCharacters[indexLUSN];

  window.alert("Your password is " + passwordLUSN);
}

function generateL() {

  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  var indexL = Math.floor(Math.random() * lower.length);
  var passwordL = lower[indexL];

  window.alert("Your password is " + passwordL);
}

function generateU() {

  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  var indexU = Math.floor(Math.random() * upper.length);
  var passwordU = upper[indexU];

  window.alert("Your password is " + passwordU);
}

function generateS() {

  var specials = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~']

  var indexS = Math.floor(Math.random() * specials.length);
  var passwordS = specials[indexS];

  window.alert("Your password is " + passwordS);
}

function generateN() {

  var number = [0,1,2,3,4,5,6,7,8,9]

  var indexN = Math.floor(Math.random() * special.number);
  var passwordN = number[indexN];

  window.alert("Your password is " + passwordN);
}

function generateLU() {

  var lowerUpper  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  var indexLU = Math.floor(Math.random() * lowerUpper.length);
  var passwordLU = lowerUpper[indexLU];

  window.alert("Your password is " + passwordLU);
}

function generateLS() {

  var lowerSpecial  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~']

  var indexLS = Math.floor(Math.random() * lowerSpecial.length);
  var passwordLS = lowerSpecial[indexLS];

  window.alert("Your password is " + passwordLS);
}

function generateLN() {

  var lowerNumber  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9]

  var indexLN = Math.floor(Math.random() * lowerNumber.length);
  var passwordLN = lowerNumber[indexLN];

  window.alert("Your password is " + passwordLN);
}

function generateUS() {

  var upperSpecial  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~']

  var indexUS = Math.floor(Math.random() * upperSpecial.length);
  var passwordUS = upperSpecial[indexUS];

  window.alert("Your password is " + passwordUS);
}

function generateUN() {

  var upperNumber  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9]

  var indexUN = Math.floor(Math.random() * upperNumber.length);
  var passwordUN = upperNumber[indexUN];

  window.alert("Your password is " + passwordUN);
}

function generateSN() {

  var specialNumber  = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9]

  var indexSN = Math.floor(Math.random() * specialNumber.length);
  var passwordSN = specialNumber[indexSN];

  window.alert("Your password is " + passwordSN);
}

function generateLUS() {

  var lowerUS  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~']

  var indexLUS = Math.floor(Math.random() * lowerUS.length);
  var passwordLUS = lowerUS[indexLUS];

  window.alert("Your password is " + passwordLUS);
}

function generateLUN() {

  var lowerUN  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9]

  var indexLUN = Math.floor(Math.random() * lowerUN.length);
  var passwordLUN = lowerUN[indexLUN];

  window.alert("Your password is " + passwordLUN);
}

function generateLSN() {

  var lowerSN  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9]

  var indexLSN = Math.floor(Math.random() * lowerSN.length);
  var passwordLSN = lowerSN[indexLSN];

  window.alert("Your password is " + passwordLSN);
}

function generateUSN() {

  var upperSN  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~',0,1,2,3,4,5,6,7,8,9]

  var indexUSN = Math.floor(Math.random() * upperSN.length);
  var passwordUSN = upperSN[indexUSN];

  window.alert("Your password is " + passwordUSN);
}

}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);