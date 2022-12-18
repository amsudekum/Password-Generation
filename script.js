// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const length = promptLength();
  const lowercase = window.confirm('Would you like to include lowercase letters? If no, press cancel.');
  const uppercase = window.confirm('Would you like to include uppercase letters? If no, press cancel.');
  const number = window.confirm('Would you like to include numbers? If no, press cancel.');
  const special = window.confirm('Would you like to include special characters? If no, press cancel.');

}

function promptLength() {
  const length = window.prompt('How long would you like your password to be?')
  if (length < 8 || 128 < length) {
    alert('Please choose a password between 8 and 128 characters.');
  }
  return length;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
