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



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
