




// // Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function(event){ 
  
var length= window.prompt('Please enter a password length between 8 & 128')

if((length>=8 && length<=128)){
  var specialChar= window.prompt('do you want to include special characters')

  if (specialChar='yes') {
    function getRandomSymbol (){
      let symbols= '!@#$%^&*()_+=-[]{}/,.'
      return symbols[Math.floor(Math.random() * symbols.length)]
      console.log(getRandomSymbol())
    }

  } else {
    var upper= window.prompt('do you want to include uppercase letters')
  }
  if (upper='yes'){
    function getRandomUpper (){
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      console.log(getRandomUpper())
    }
  }

  
var lower= window.prompt('do you want to include lowercase letters')
var numbers= window.prompt('do you want to include numbers')
}else{location.reload}









});




function writePassword() {
 
    // var prompt= prompt('Please enter a password')
    var password = generatePassword(lower,upper,number,symbol,);
   
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
   
    }
    

    var generatePassword= {
      lower: getRandomLower,
      upper: getRandomUpper,
      number: getRandomNumber,
      symbol: getRandomSymbol,}

function getRandomLower (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber (){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol (){
  let symbols= '!@#$%^&*()_+=-[]{}/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}


  // var characters= "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+=-[]{}/.,><
