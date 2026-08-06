var correctPIN = "0459";

var userName = prompt("Enter your name");
var enteredPIN = prompt("Enter PIN");


if (enteredPIN === null){
    alert("Login Cancelled");
}else if(enteredPIN === correctPIN){
    alert("Welcome " + userName + "!\nLogin Successful");
} else if (enteredPIN === ""){
    alert("Please Enter PIN");
} else{
    alert("sorry " + userName + "\n Incorrect PIN. ")
}
