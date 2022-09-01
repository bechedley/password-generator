// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add function message for password length error

  function lengthErrorMessage() {
    window.alert('Sorry, your password must be between 8 and 128 characters. Please try again.')
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

generatePassword();

}


 // Define generate password function

 function generatePassword () {

  // alphabet array
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  // special character array
  var special = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];
  // numeric array
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  // uppercase array
  var upperAbc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  // Combined character array
  var characters = [alphabet,special,numbers,upperAbc];

  // Confirm choices
  if (
    (includeNumbers = true) &&
    (includeLower = true) &&
    (includeUpper = true) &&
    (includeSpecial = true)) {

  // Generate random index number of characters array    
    var index = Math.floor(Math.random() * characters.length);
    password = characters[index];
  }

 }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
