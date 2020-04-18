//Receives the password and password requirements to validate that each requirement appears at least once.
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
    return eachCheck;
}

//Generates a password based on requirements. Runs until requirements are met. Receives password length requirement, password values defined in addRequirements, and passReqs which will be used for validation.
function generatePassword(passLen, passValues, passReqs){
    var pword = "";
    var i = 0;
    var validCheck = [];
    var anyFalse = true;
    var isValid = false;

    //Runs until a valid password is created
    while(isValid === false){
        //creates password for length requested
        while(i < passLen){
            pword += passValues[Math.floor(Math.random() * (passValues.length))];
            i++;
        }

        //calling function to see if password matches all requirements
        validCheck = validation(passReqs, pword);
        //looping through returned value - if all requirements are met, will set anyFalse to true to signfy all values are true
        for(var check of validCheck){
            if(check !== true){
                anyFalse = false;
            }
        }

        //if false is returned, empties validCheck variable to be run again
        if(anyFalse === false){
            validCheck = [];
        }

        //if all requeirments are met, anyfalse will remain true and set isValid to true, which ends loop
        if(anyFalse === true){
            isValid = true;
        }

    }
    var passwordText = document.querySelector('#password');
    passwordText.value = pword;
}

//Receives requirements defined in getRequirements and addes required values to an array
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

//Prompts user to define password requirements, runs until at least one is selected
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

//Validates length submitted by user
function checkLength(pLength){
    if(pLength > 7 && pLength < 129){
        return true;
    } else{
        return false;
    }
}

//Requesting length from usesr, runs until meets requirements
function getLen() {
    var lengthPass = false;
    while (lengthPass !== true){
        var passLength = prompt("How long should your password be? (between 8 and 128 characters)");
        lengthPass = checkLength(passLength);
    }
    return passLength;
}

//Fucntion to run through each function to collect requirements and create password
function createPassword(){
    //Calls length function to obtain length from users, sets length value
    var len = getLen();
    //Calls requirements function to obtain requirements, sets requirements array
    var requirements = getRequirements();
    //Calls add requirements by passing user requirements
    var passValues = addRequirements(requirements);
    //Generates password by sending all requirements 
    generatePassword(len, passValues, requirements);
}

//Event listener for click on generate password button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", createPassword);