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

var upperCasedChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerCasedChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var specChars = ['!','@','#','$','%','^','&','*','(',')','_','+','=','|',];

var numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many chars would you like your password to contain?')
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number!');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters!');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters!');
    return;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var haveSpecChars = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var haveNumericChars = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var haveLowerCasedChars = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean regarding the inclusion of uppercase characters
  var haveUpperCasedChars = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
 
   if (
    haveSpecChars === false &&
    haveNumericChars === false &&
    haveLowerCasedChars === false &&
    haveUpperCasedChars === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  var passwordOptions ={
   haveUpperCasedChars: haveUpperCasedChars,
   haveLowerCasedChars: haveLowerCasedChars,
   haveNumChars: haveNumericChars,
   haveSpecChars: haveSpecChars
   
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var guaranteedChars = [];
  

  // Array to contain one of each type of chosen character to ensure each will be used
 
  var possibleChars = []

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.haveUpperCasedChars) {
    possibleChars = possibleChars.concat(upperCasedChars);
    guaranteedChars.push(getRandom(upperCasedChars));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.lowerCasedChars) {
    possibleChars = possibleChars.concat(lowerCasedChars);
    guaranteedChars.push(getRandom(lowerCasedChars));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.haveNumericChars) {
    possibleChars = possibleChars.concat(haveNumericChars);
    guaranteedChars.push(getRandom(haveNumericChars));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.haveSpecChars) {
    possibleChars = possibleChars.concat(specChars);
    guaranteedChars.push(getRandom(specChars));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandom(possibleChars);

    result.push(possibleChar);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
  }  

  // Transform the result into a string and pass into writePassword
  return result.join('');
}
