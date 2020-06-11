// Assignment Code from Gitlab //
const generateBtn = document.querySelector("#generate");

// Writes password to the #password input //
function writePassword() {
  const password =  generatePassword();
  const passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

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
    prompt('How many chars would you like your password to contain?')
  );

  if (isNaN(length) === true) {
    alert('Password length must be provided as a number!');
    return;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters!');
    return;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters!');
    return;
  }

  var haveSpecChars = confirm(
    'Click OK to confirm including special characters.'
  );

  var haveNumericChars = confirm(
    'Click OK to confirm including numeric characters.'
  );

  var haveLowerCasedChars = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  var haveUpperCasedChars = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four vars evaluate to boolean value/false //
 
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

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible chars and concatenating those chars into the result var
  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandom(possibleChars);

    result.push(possibleChar);
  }

  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
  }  

  // Transform the result into a string and pass into writePassword function
  return result.join('');
}
