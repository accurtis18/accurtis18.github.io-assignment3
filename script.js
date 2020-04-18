// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// fucntion checkLength(pLength) {
//     if(pLength > 7 && pLength < 129){
//         return true;
//     } else{
//         return false;
//     }
// }

// function validation(pass){

// }


function generatePassword(passLen, passReqs){
    var pword = "";
    var i = 0;
    while(i < passLen){
        pword += passReqs[Math.floor(Math.random() * (passReqs.length + 1))];
        i++;
    }
    var passwordText = document.querySelector('#password');
    passwordText.value = pword;
    
}

function getRequirements(){
    var reqs = [];
    var passValues = [];
    reqs.push(confirm("Should it contain lower case letters?"));
    if(reqs[0] === true){
        passValues.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    }
    reqs.push(confirm("Should it contain upper case letters?"));
    if(reqs[1] === true){
        passValues.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    }
    reqs.push(confirm("Should it contain numbers?"));
    if(reqs[2] === true){
        passValues.push(0,1,2,3,4,5,6,7,8,9);
    }
    reqs.push(confirm("Should it contain at least one of these special characters? (!, $, #, -)"));
    if(reqs[3] === true){
        passValues.push('!','$','#','-');
    }
    return passValues;
}


function checkLength(pLength){
        if(pLength > 7 && pLength < 129){
            return true;
        } else{
            return false;
    }
}

function getLen() {
    var lengthPass = false;
    while (lengthPass !== true){
        var passLength = prompt("How long should your password be? (between 8 and 128 characters)");
        lengthPass = checkLength(passLength);
    }
    return passLength;
}

function createPassword(){
    var len = getLen();
    var requirements = getRequirements();
    var password = generatePassword(len, requirements);
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", createPassword);