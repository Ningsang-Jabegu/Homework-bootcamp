/*----- RANDOM CODES -----*/
//Function to generate conbination of characters
function generateCode() {
    //Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; //Initalize to null value
    var getCode = ''; //to store entered code
    var btnvalue; //for button boolean value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times using a loop
    for (i=1; i<=8; i++) {
        var char = Math.random()* str.length; //random select a character from the variable and the store in a new variable
        code += str.charAt(char) //accumulate the generated character int a string of 8 characters
    }
    return code; //return the final accmulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();
//Disable Button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; //able/disable button
    if (btnvalue == true) { //test if button is disable or enabled
        //set button and label color translucent
        document.getElementById('Submit').style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById('submit').style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //set button and label color with no transparency
        document.getElementById("subnit").style.backgroundColor ="rgba(73, 119, 209, 1)";
        document.getElementById('submit').style.color = "rgba(255, 255, 255, 1)";
    }
}
//Listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox

//run function if detected user has entered a character in textbox
function evaluateCode() {
    getCode = document.getElementById("codeentered").Value; //get character entered
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = code.trim(); //remove any hidden characters generated
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false); //if matched, run the function to enable button
    }
}
//Active function
disableButtons();
