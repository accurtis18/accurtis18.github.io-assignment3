// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// fucntion checkLength(pLength) {
//     if(pLength > 7 && pLength < 129){
//         return true;
//     } else{
//         return false;
//     }
// }

function checkLength(pLength){
        if(pLength > 7 && pLength < 129){
            return true;
        } else{
            return false;
    }
}

function getLen() {
    var lengthPass = false
    while (lengthPass !== true){
        var passLength = prompt("How long should your password be? (between 8 and 128 characters)");
        lengthPass = checkLength(passLength);
    }
    var passwordText = document.querySelector('#password');
    passwordText.value = passLength;

}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", getLen);