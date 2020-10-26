// Assignment Code
//find the button for generating the query
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var myArray = [2];

//create a function that will select a random number based on an input
function randomizeNumber(maxNumber){
  var foundNumber = Math.floor(Math.random() * maxNumber);
  return foundNumber;
}




//option is to add true or false and push to this array.
//This route allows us to randomly select based on position
//It also puts more weight on special characters and numbers
//which is not ideal
var includeArray = includeArray.push(prompt(
  "Do you want to use lowercase letters?"));
var includeLowerCase = includeArray.push(prompt(
  "Do you want to use lowercase letters?"));
var includeUpperCase = includeArray.push(prompt(
  "Do you want to use uppercase letters?"));
var includeNumbers = includeArray.push(prompt(
  "Do you want to use numbers?"));
var includeSpecial = includeArray.push(prompt(
  "Do you want to use special characters?"));


//create a variable to track which positions haven't been used yet
myArray.indexOf()



function generatePassword(){
//first, select a random value from the array
randomCharacterOption = randomizeNumber(includeArray.length)

//loop through the length of the array.
//If true, search that position's array's array and add one to i
//If false, go through the loop again
for(var i=0, i<randomCharacterOption.length, i++){
  //check to see if the array has a value of true
  if(randomCharacterOption.value = true){
    //find the length of the character's array
    //to do this, I need to have a map of the array's values
    randomSelectedCharacter = 
    
  }
  else
}
randomCharacter = 


//and add one

//check to see if it's a true value

//next, select a random value from the characterOption




  //randomly select a value from the array of options
  //Option 1:
    //use math.random floor here and if we pick an option the user didn't select
    //return and try again without increasing i
  //Option 2:
    //set values to strings and put into the array
    //use the length of the array to randomize the selection

  



  //if 0 is chosen, take a random number from the number array


  //else if 1 is chosen, take a random number from the lower array
  
  //else if 2 is chosen, take a random number from the upper array
    //if upper = true, proceed to find the random number and add 1 to the loop

    //if upper = false, try again

  //else if 3 is chosen, take a random number from the special character array
    //if upper = true, proceed to find the random number and add 1 to the loop
    
    //if upper = false, try again
  
}

//add 0 or 1 into the first index in the array



//Create arrays for each set
var numberArray = [0,1,2,3,4,5,6,7,8,9];
var lowerArray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var upperArray = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,,U,V,W,X,Y,Z];
//this might take a little more research, so let's worry about it later
//var specialArray = [ ]





//in an ideal scenario, I would add a form to request the user enter
//which types of characters apply, then add them to an array
//and search based on each value in the array

//Option 1 - easier
  //Make the first characters go in order in the array
  //e.g. first character will be lowercase, 2nd uppercase
  //until you're at the end of the array size, then make totally random
  
//Option 2 - harder but better
  //Allow the password generator to run completely random
  //Create a 2nd array called characterTypesLeft
  //Assign it the same as the inital selection of character types to look for
  //As a random character is taken, go back and remove that value if it still exists
  //until the loop of characterTypesLeft = 0
  //IF the number of characterTypesLeft == the number of characters left to select
    //then iterate through that loop only

  //If we get to a point where the number of selectedOptions is = the number of 
  //available characters left, then use just the list of 
  //When it gets to the end of the 





  //multi-dimensional array or create an object with multiple layers 
//Not going this route for now but might want to play with this later.
randomChar = {
  //lowercase
}




//attempt at creating an object
var myOptionsObject = [{name: "numberArray", characters: [0,1,2,3,4,5,6,7,8,9],
                        name: "lowerArray", characters: [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
                        name: "upperArray", characters: [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,,U,V,W,X,Y,Z]
}]

var()

