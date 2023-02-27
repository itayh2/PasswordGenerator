const lengthSlider = document.querySelector(".pass-length input");
options = document.querySelectorAll(".option input");
passwordInput = document.querySelector(".input-box input");
passIndicator = document.querySelector(".pass-indicator")
generateBtn = document.querySelector(".generate-btn");
copyICon = document.querySelector(".input-box span");

const characters = { // object of letters, numbers & symbols
    lowercase: "abcdefghijklmonpqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMONPQRSTUVWXYZ",
    numbers: "0123456789",
    // symbols: "^!$%&|[](){}:;.,*+-#@<>~"
    symbols: "^!$%&.*+-#@~"
}

const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;
    
    options.forEach(option => { // looping through each option's checkbox
        if(option.checked){ // if checkbox is checked
            // if checkbox id isn't exc-duplicate && spaces
            if(option.id !== "exc-duplicate" && option.id !== "spaces"){
                console.log(option);
                // adding particular key value from character object to staticPassword
                staticPassword += characters[option.id]
            }
            else if(option.id === "spaces"){ // if checkbox id is spaces
                staticPassword += `  ${staticPassword}  `; // adding space at the beginning & end of staticPassword
            } else{ // else pass true value to excludeDuplicate
                excludeDuplicate = true;
            }
        }
    })

    for (let i = 0; i < passLength; i++) {
        // getting random character from the static password
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]; 
        if(excludeDuplicate == true){
            if(!randomPassword.includes(randomChar) || randomChar == " "){
                randomPassword += randomChar;
            } else{
                i--;
            }
        } else{
            randomPassword += randomChar;
        }  
    }
    console.log(randomPassword);
    passwordInput.value = randomPassword; // passing randomPassword to passwordInput value
}

const updatePassIndicator = () => {
    passIndicator.id = lengthSlider.value;
    if(lengthSlider.value <= 8){
        passIndicator.id = "weak";
    } else if(lengthSlider.value <= 16){
        passIndicator.id = "medium";
    } else{
        passIndicator.id = "strong";
    }
}
const updateSlider = () => {
    console.log(lengthSlider.value);
    // passing slider value as counter text
    document.querySelector(".pass-length span").innerHTML = lengthSlider.value;
    updatePassIndicator();
    generatePassword()
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value); // copying randonPassword
    copyICon.innerHTML = "check"; // changing copy icon to tick
    setTimeout(() => { // after 1500ms , changing tick icon back to copy
        copyICon.innerHTML = "copy_all";
    }, 1500); 

}
copyICon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
