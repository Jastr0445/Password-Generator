// Assignment Code from Gitlab //
const generateBtn = document.querySelector("#generate");

// Writes password to the #password input //
function writePassword() {
  const password =  generatePassword();
  const passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};
// prints password on clipboard //
function copyToClipboard() {
  
};
function generatePassword(){
  
};
// Add event listener to generate button //
generateBtn.addEventListener("click", writePassword);

var upperCasedChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerCasedChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var specChars = ['!','@','#','$','%','^','&','*','(',')','_','+','=','|',];

var numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Function to prompt user for password options //
function getPasswordOptions() {
  // Var to store password length from user input //
  var length = parseInt(
    prompt('How many chars would you like to have in your password?')
  );
  // comparison operator //
  if (isNaN(length) === true) {
    alert('Password length must be provided a number!');
    return;
  }

  if (length > 128) {
    alert('Password must have less than 129 chars!');
    return;
  }

  if (length < 8) {
    alert('Password must have at least 8 chars!');
    return;
  }

  // Var to store boolean value regarding inclusion of uppercasedchars //
var haveUpperCasedChars = confirm(
  'Click OK to confirm including uppercase chars.'
 );

// Var to store boolean value regarding inclusion of lowercasedchars //
var haveLowerCasedChars = confirm(
  'Click OK to confirm including lowercase chars.'
);
// var storing boolean value regarding  inclusion of numericChars //
var haveNumericChars = confirm(
  'Click OK to confirm including numeric chars.'
);

  // Var storing boolean value regarding the inclusion of specChars //
  var haveSpecChars = confirm(
    'Click OK to confirm including special chars.'
  );


// Conditional statement to see if user doesn't have any character types. Password-generator ends if all four vars evaluate to boolean value/false //
  // comparison operators //
  if (
    haveUpperCasedChars === false &&
    haveLowerCasedChars === false &&
    haveNumericChars === false &&
    haveSpecChars === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  // stores data for password options //
  var passwordOptions ={
   haveUpperCasedChars: haveUpperCasedChars,
   haveLowerCasedChars: haveLowerCasedChars,
   haveNumChars: haveNumericChars,
   haveSpecChars: haveSpecChars
   
  };

  return passwordOptions;
}

// Function for getting random element from array // 
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input //
function generatePassword() {
  var options = getPasswordOptions();
  // Var to store password options as it's being concatenated // 
  var result = [];

  // Array to store char types to include in password //
  var guaranteedChars = [];
  
 // stores data for possible characters
  var possibleChars = []

  if (options.haveUpperCasedChars) {
    possibleChars = possibleChars.concat(upperCasedChars);
    guaranteedChars.push(getRandom(upperCasedChars));
  }

  if (options.lowerCasedChars) {
    possibleChars = possibleChars.concat(lowerCasedChars);
    guaranteedChars.push(getRandom(lowerCasedChars));
  }

  if (options.haveNumericChars) {
    possibleChars = possibleChars.concat(haveNumericChars);
    guaranteedChars.push(getRandom(haveNumericChars));
  }

  if (options.haveSpecChars) {
    possibleChars = possibleChars.concat(specChars);
    guaranteedChars.push(getRandom(specChars));
  }

  // For loop to iterate password length from options object, selecting random content from array of possible chars and concatenating/combining arrays those chars into result var
  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandom(possibleChars);

    result.push(possibleChar);
  }

  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
  }  

  // Transform the result into a string and pass into the writePassword function
  return result.join('');  
}
