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
    passwordCharacters();
  }

  //If user chooses enters something other than a number
 else if (passwordLength === NaN) {
  return;
 }

 else {
  specialCharacterPrompt();
 }

 // Define generate password function

 function generatePassword () {

  // alphanumeric array
  var abc123 = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  // special character array
  var special = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];

  // Generate random character from special character array
  function specialRandom() {
    return (math.floor(math.random() * special.length) * passwordLength);
  }

  // Generate random character from alphanumeric array
  function abc123Random() {
    return (math.floow(math.random() * abc123.length));
  }

  // Confirm if special characters are required
 if (speciaCharacter === true) {
  specialRandom();
 }

 else {

  abc123Random();

 }

 }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
