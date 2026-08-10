let studentName = prompt("Enter your name:-");
let studentMarks = Number(prompt("Enter your marks:-"));

if(studentMarks <= 0 || studentMarks > 100){
	alert("Invalid Marks");
}else{
	let grade;
let passingMarks = "33";
let result;

if (studentMarks >= passingMarks){
	result = "Pass";
}else{
	result = "Fail";
}

if(studentMarks  >= 33 && studentMarks <= 50 ){
	grade = "D"

} else if(studentMarks > 50 && studentMarks <=75  ){
	grade = "C";
} else if(studentMarks > 75 && studentMarks <= 90 ){
	grade = "B";
}else if(studentMarks > 90 && studentMarks <= 100){
	grade = "A";
}

let menu = prompt("Menu\n 1. View Grade\n 2. View Pass/Fail Status\n 3. View Remarks\n 4. Exit");

switch(menu){
	case "1":
		alert("Your Grade is:-" + grade);
		break;

	case "2":
		alert("You are " + result );
		break;

	case "3":
		if(grade === "A"){
			alert("Excellent!");
		}else if(grade === "B" || grade === "C" ){
			alert("Good");
			
		}else{
			alert("Need improvement");
		}
		break;

	case "4":
		alert("Goodbye");
		break;

	default:
		alert("Invalid choice");
}
}