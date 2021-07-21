// grab the generate button by its id
var generateBtn = document.querySelector("#generate");

// put our characters into seperate arrays
const uppercaseLetters = ['A', 'B', 'C', 'D', "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", 'Z']
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numeric = ["0", "1", "3", "4", "5", "6", "7", "8", "9"]
const specialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":",]


function writePassword() {
    let passwordLength = prompt("Please enter a password length between 8 & 128")
    

    let passwordArray = []
    let generatedPassword = ""

    //if user enters no password or if the entered value is not a number then it will re prompt them to enter a password
    while (!passwordLength || isNaN(passwordLength)) {
      
       alert("Field cannot be empty")
       passwordLength = prompt("Please enter a password length between 8 & 128")
    }

    //if the password length entered doesnt meet our criteria then we send an alert then a prompt
    while (passwordLength < 8 || passwordLength > 128) {
       alert("Password length must be between 8 and 128 characters")
       passwordLength = prompt("Please enter a password length between 8 & 128")
    }

    let includeNumeric ;
    let includeSpecialCharacter ;
    let includeLowercase ;
    let includeUppercase ;

    //alerts the user to input on every prompt
    while(!includeNumeric && !includeSpecialCharacter && !includeLowercase && !includeUppercase) {
        alert("check all")
        includeNumeric = prompt("Should include numeric character, enter yes or no").toLowerCase()
        includeSpecialCharacter = prompt("Should include special character,enter yes or no").toLowerCase()
        includeLowercase = prompt("Should include lowercase character,enter yes or no").toLowerCase()
        includeUppercase = prompt("Should include uppercase character,enter yes or no").toLowerCase()
    }

    //if user selects to include any of these characters by enering yes then we will put those characters into an array, if the users enter anything else then the program will do nothing and go to the next prompt

    if(includeNumeric == "yes") {
        // numeric.forEach(x => {
        //     passwordArray.push(x)
        // })
        passwordArray = passwordArray.concat(numeric)
    }
    if(includeSpecialCharacter == "yes") {
        // specialCharacters.forEach(item => {
        //     passwordArray.push(item)
        // })
        passwordArray = passwordArray.concat(specialCharacters)
    }
    if(includeLowercase == "yes") {
        // lowerCaseLetters.forEach(item => {
        //     passwordArray.push(item)
        // })
        passwordArray = passwordArray.concat(lowerCaseLetters)

    }
    if(includeUppercase == "yes") {
        // uppercaseLetters.forEach(item => {
        //     passwordArray.push(item)
        // })
        passwordArray = passwordArray.concat(uppercaseLetters)

    }

    // generates a random password from the length of the new array

    for (let i = 0 ;i < passwordLength; i++) {
        const randomLength = Math.floor(Math.random() * passwordArray.length)
        generatedPassword = generatedPassword + passwordArray[randomLength]

        var passwordText = document.querySelector("#password");
  
        passwordText.value = generatedPassword;
    }
}




//once we click the generate button then the function will write us a random password
generateBtn.addEventListener("click", writePassword)