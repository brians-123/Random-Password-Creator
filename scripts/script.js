// Assignment Code
var generateBtn = document.querySelector("#generate");


console.log('here');
// Write password to the #password input
function writePassword() {


  //calls the generate password function, where user will decide how long
  //and complex the password should be
  var password = generatePassword();
  console.log('password: ' + password);
  var passwordText = document.querySelector("#password");
  // var includeLowerCase = confirm(
  //   "Do you want to use lowercase letters?");
  // var includeUpperCase = confirm(
  //   "Do you want to use uppercase letters?");
  // var includeNumbers = confirm(
  //   "Do you want to use numbers?");
  // var includeSpecial = confirm(
  //   "Do you want to use special characters?");

  // var includeArray = includeArray.push(prompt(
  //   "Do you want to use lowercase letters?"));
  // var includeLowerCase = includeArray.push(prompt(
  //   "Do you want to use lowercase letters?"));
  // var includeUpperCase = includeArray.push(prompt(
  //   "Do you want to use uppercase letters?"));
  // var includeNumbers = includeArray.push(prompt(
  //   "Do you want to use numbers?"));
  // var includeSpecial = includeArray.push(prompt(
  //   "Do you want to use special characters?"));

  passwordText.value = password;
  // console.log('password text: ' + passwordText);
  console.log('password text value' + passwordText.value);
  console.log('password: ' + password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //first we define the arrays that store our character options. 
  var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
    + "n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
  var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    + "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialCharArray = ["!","\"","#","$","%","\&","\'","(",")",
    + "*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\",
    + "]","^","_","`","{","|","}","~"];


  //this will store all of the values from the character options selected by the user
  var includeArray = [];

  //ask them how long their password should be and store in numOfCharacters
  //validating that it's a number between 8 and 128 and if not, prompt try again
  var numOfCharacters = prompt("Please enter a number from 8 to 128");
  if(numOfCharacters<8 || numOfCharacters >128 || isNaN(numOfCharacters)  ){
    alert("Invalid input. Please try again.");
    return;
  }

  //
  var  includeLowerCase = confirm("Do you want to use lowercase letters?");
  console.log("number of characters" + numOfCharacters);
  if(includeLowerCase){

    for(i=0; i<lowerArray.length; i++){
      includeArray.push(lowerArray[i]);
    }
  }

  var  includeUpperCase = confirm("Do you want to use uppercase letters?");
  console.log("number of characters" + numOfCharacters);
  if(includeUpperCase){

    for(i=0; i<upperArray.length; i++){
      includeArray.push(upperArray[i]);
    }
  }

  var  includeNumbers = confirm("Do you want to use numbers?");
  console.log("number of characters" + numOfCharacters);
  if(includeNumbers){

    for(i=0; i<numberArray.length; i++){
      includeArray.push(numberArray[i]);
    }
  }

  var  includeSpecialChar = confirm("Do you want to use special characters?");
  console.log("number of characters" + numOfCharacters);
  if(includeSpecialChar){

    for(i=0; i<specialCharArray.length; i++){
      includeArray.push(specialCharArray[i]);
    }
  }

  if(includeArray.length===0){
    alert("You did not select any options. Please try again.");
    return;
  }

  console.log("includeArray values: " + includeArray);
  console.log("includeArray position 0" + includeArray[0]);
  console.log("lowerArray position 0" + lowerArray[0]);
  console.log(includeArray.length);

  function randomizeNumber(maxNumber){
    console.log("includeArray.length: " + includeArray.length)
    var foundNumber = Math.floor(Math.random() * includeArray.length);
    console.log("found number: " + foundNumber);
    return foundNumber;
  }

  var myPassword = [];

for(i=0; i<numOfCharacters; i++){
  myPassword.push(includeArray[(randomizeNumber(numOfCharacters))]);
}

  return myPassword;
  
}