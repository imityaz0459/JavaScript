var passingMarks = 40;


var studentName = prompt("Enter Your Name");
var studentMarks = Number(prompt("Enter Your Marks"));

if (studentMarks < 0 || studentMarks > 100 ){
    alert("Invalid Marks");
} else if (studentMarks === 100){
    alert("Outstanding Performance!");
} else if (studentMarks >= passingMarks){
    alert(`Congratulations ${studentName}! \nYou have passed.`);
} else {
    alert(`Sorry ${studentName} \nYou have failed. `);
}

