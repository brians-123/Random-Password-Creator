// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  //calls the generate password function, where user will decide how long
  //and complex the password should be
  var password = generatePassword();
  //references the password index in the html and replaces it with the password
  var passwordText = document.querySelector("#password");
  
  //must use the value to push into the html to prevent value undefined
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //first we define the arrays that store our character options. 
  var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m"
    + "n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
  var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
    + "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialCharArray = ["!","\"","#","$","%","\&","\'","(",")"
    + "*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\"
    + "]","^","_","`","{","|","}","~"];

  //by declaring this within the generatePassword function, it will start clean
  //each time the button is clicked
  var myPassword = [];

  //this will store all of the values from the character options selected by the user
  var includeArray = [];

  //ask them how long their password should be and store in numOfCharacters
  //validating that it's a number between 8 and 128 and if not, prompt try again
  var numOfCharacters = prompt("Please enter a number from 8 to 128");
  if(numOfCharacters<8 || numOfCharacters >128 || isNaN(numOfCharacters)  ){
    return "Invalid input. Please try again.";
  }

  //Ask which character types to use and push the full set of characters
  //into the includeArray to choose from. We also use the true/false
  //values later to validate that all selected values were chosen
  var  includeLowerCase = confirm("Do you want to use lowercase letters?");
  if(includeLowerCase){
    for(i=0; i<lowerArray.length; i++){
      includeArray.push(lowerArray[i]);
    }
  }

  var  includeUpperCase = confirm("Do you want to use uppercase letters?");
  if(includeUpperCase){

    for(i=0; i<upperArray.length; i++){
      includeArray.push(upperArray[i]);
    }
  }

  var  includeNumbers = confirm("Do you want to use numbers?");
  if(includeNumbers){

    for(i=0; i<numberArray.length; i++){
      includeArray.push(numberArray[i]);
    }
  }

  var  includeSpecialChar = confirm("Do you want to use special characters?");
  if(includeSpecialChar){

    for(i=0; i<specialCharArray.length; i++){
      includeArray.push(specialCharArray[i]);
    }
  }

  //They have to select at least one option
  if(includeArray.length===0){
    return "You did not select any options. Please try again.";
  }

  //function to come back with a random number between
  //0 and the maximum number of characters, then take the value from
  //the array's index. and pass it back
  function randomizeCharacter(maxNumber){
    var foundNumber = Math.floor(Math.random() * includeArray.length);
    return foundNumber;
  }

  //loop through the number of characters they input, generate a random character
  //and append to the myPassword variable
  for(i=0; i<numOfCharacters; i++){
    myPassword.push(includeArray[(randomizeCharacter(numOfCharacters))]);
  }

  //Look in myPassword to see if it contains a value from each required character type 
  //If one isn't found, let the user know it was unsuccessful and to try again.
  const haslowerCase = myPassword.some(r=> lowerArray.indexOf(r) >= 0)
  const hasUpperCase = myPassword.some(r=> upperArray.indexOf(r) >= 0)
  const hasNumber = myPassword.some(r=> numberArray.indexOf(r) >= 0)
  const hasSpecialChar = myPassword.some(r=> specialCharArray.indexOf(r) >= 0)

  if(!haslowerCase && includeLowerCase || !hasUpperCase && includeUpperCase || 
    !hasNumber && includeNumbers || !hasSpecialChar && includeSpecialChar){
      return 'Your requirements weren\'t met. Please try again.'
  }

  return myPassword.join("");
}