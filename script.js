// Assignment Code from Gitlab
const generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  const password =  generatePassword();
  const passwordText = document.querySelector("#password");
  
  passwordText.value = password;

};

function copyToClipboard() {

};
function generatePassword(){
  
};
// Add event listener to generate buttosn
generateBtn.addEventListener("click", writePassword);


// stores data value for uppercase chars
const upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','P','W','X','Y','Z'];

// stores data value for lowercase chars
const lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','p','w','x','y','z'];

// stores data vaulue for numeric chars
const numericCharacters = ['1','2','3','4','5','6','7','8','9',];

const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','=','|',];

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  const length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

// const to store boolean value regarding inclusion of uppercaseChars
const hasUpperCasedCharacters = confirm(
  'Click OK to confirm including uppercase characters.'
);

 // const to store boolean value regarding inclusion of lowercaseChars
 const hasLowerCasedCharacters = confirm(
  'Click OK to confirm including lowercase characters.'
);

// Variable to store boolean regarding inclusion of numericChars
const hasNumericCharacters = confirm(
  'Click OK to confirm including numeric characters.'
);

  // const to store boolean value regarding inclusion of specialchars
  const hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false
) {
  alert('Must select at least one character type');
  return;
}

// const to store user input 
const passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
};

return passwordOptions;
};

// Function for getting a random element from an array
function getRandom(arr) {
var randIndex = Math.floor(Math.random() * arr.length);
var randElement = arr[randIndex];

return randElement;
};

function generatePassword() {
var options = getPasswordOptions();
// Variable stores password as it's being concatenated
var result = [];

// var/array to store types of characters to include in password
var possibleCharacters = [];

// var/array to contain one of each type of chosen character to ensure each will be used
var guaranteedCharacters = [];

// Conditional statement that adds array of special characters into array of possible characters based on user input
// Push new random special character to guaranteedCharacters
if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters));
}

if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters));
};

if (options.hasLowerCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters));
}

if (options.hasUpperCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters));
}
// for loop to get random chars
for (var i = 0; i < options.length; i++) {
  var possibleCharacter = getRandom(possibleCharacters);

  result.push(possibleCharacter);
}
// for loop to get guranteed chars
for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}

//  this return statement Transform the result into a string and pass into writePassword
return result.join('');
}

