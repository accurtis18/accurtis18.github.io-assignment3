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

function validation(passReqs, pass){
    var eachCheck = [];

    if(passReqs[0] === true){
        var lowercase = /[a-z]/;
        eachCheck.push(lowercase.test(pass));
    } 
    if(passReqs[1] === true){
        var uppercase = /[A-Z]/;
        eachCheck.push(uppercase.test(pass));
    } 
    if(passReqs[2] === true){
        var numbers = /[0-9]/;
        eachCheck.push(numbers.test(pass));
    } 
    if(passReqs[3] === true){
        var symbol = /[!$#-]/;
        eachCheck.push(symbol.test(pass));
    } 

    var passwordText = document.querySelector('#password');
    passwordText.value = pass + eachCheck;
    return eachCheck;
}


function generatePassword(passLen, passValues, passReqs){
    var pword = "";
    var i = 0;
    var validCheck = [];
    var anyFalse = true;
    var isValid = false;
    // while(isValid === false){
        while(i < passLen){
            pword += passValues[Math.floor(Math.random() * (passValues.length))];
            i++;
        }

        // validCheck = validation(passReqs, pword);
        // for(var check of validCheck){
        //     if(check !== true){
        //         anyFalse = false;
        //     }
        // }

        // if(anyFalse === true){
        //     isValid = true;
        // }

    // }
    // var passwordText = document.querySelector('#password');
    // passwordText.value = pword + validCheck;  
    return pword;  
}

function addRequirements(reqValues){
    var passValues = [];
    if(reqValues[0] === true){
        passValues.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    }
    if(reqValues[1] === true){
        passValues.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    }
    if(reqValues[2] === true){
        passValues.push('0','1','2','3','4','5','6','7','8','9');
    }
    if(reqValues[3] === true){
        passValues.push('!','$','#','-');
    }
    return passValues;
}

function getRequirements(){
    var reqs = [];
    var selection = false;
    while(selection === false){
    reqs.push(confirm("Should it contain lower case letters?"));
    reqs.push(confirm("Should it contain upper case letters?"));
    reqs.push(confirm("Should it contain numbers?"));
    reqs.push(confirm("Should it contain at least one of these special characters? (!, $, #, -)"));
    
    for (var r of reqs){
        if(r === true){
            selection = true;
        }
    }

    if(selection === false){
        reqs = [];
    }
}
    return reqs;
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
    var passValues = addRequirements(requirements);
    var password = generatePassword(len, passValues, requirements);
    var validated = validation(requirements, password);
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", createPassword);