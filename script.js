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
  const specialchar = window.confirm('Would you like to include special characters? If no, press cancel.');

  if (lowercase == false && uppercase == false && number == false && specialchar == false) {
    window.alert('Password must contain at least one of the criteria. Please select again.')
  }

  let password = '';
    for (let i=0; i < length; i++) {
    password += generateCharacter(lowercase, uppercase, number, specialchar);
  }
  return password;
}

function promptLength() {
  let length = window.prompt('How long would you like your password to be?');
  length = parseInt(length);
  if (length < 8 || 128 < length) {
    alert('Please choose a password between 8 and 128 characters.');
  }
  return length;
}

function generateCharacter(lowerAllowed, upperAllowed, numberAllowed, specialAllowed) {
  const validCharacters = getValidCharacters(lowerAllowed, upperAllowed, numberAllowed, specialAllowed);
  let randomIndex = Math.floor(Math.random() * validCharacters.length);
  let babyCharacter = validCharacters.charAt(randomIndex)
  return babyCharacter;
}

function getValidCharacters(lowerAllowed, upperAllowed, numberAllowed, specialAllowed) {
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numb = '1234567890';
  let special = '!@$%&#'
  let validCharacters = '';

  if (lowerAllowed == true) {
    validCharacters += lower;
  }
  if (upperAllowed == true) {
    validCharacters += upper;
  }
  if (numberAllowed == true) {
    validCharacters += numb;
  }
  if (specialAllowed == true) {
    validCharacters += special;
  }

  return validCharacters;
}
    


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
