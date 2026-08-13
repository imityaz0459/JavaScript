let correctPIN = "7860";
let attempts = 0;
let access = false;
let Balance = 5000;

while(attempts < 3){
    let userPIN = prompt("Enter Your PIN:-\n Hint: 7860");

    if(correctPIN === userPIN){
        alert("Acces Granted");
        access = true;
        break; 
    } else{
        attempts++;
        alert("Wrong PIN . Attempts left:-" +(3-attempts));
    }
}
if (!access){
    alert("Card Blocked");
}else{

    let isRunning = true;
    let transactionCount = 0;

    while (isRunning){
        
         let choice = prompt("ATM Menu:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");

  

    switch (choice){
        case "1":
            alert("Your Balance is:- $" + Balance);
            transactionCount ++;
            break;

        case "2":
            let depositAmount = Number(prompt("Enter amount to deposit:"));

            if(isNaN(depositAmount) || depositAmount <= 0){
                alert("Invalid amount. Deposit cancelled.");
            }else{Balance = Balance + depositAmount;
            alert("Deposit succesful. New balance: $" + Balance)
            transactionCount ++;
            }
            break;

        case "3":
            let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
            if(isNaN(withdrawAmount || withdrawAmount <= 0)){
                alert("Invalid amount. Withdrawal cancelled.");
            }else if (withdrawAmount > Balance){
                alert("insufficient balance");
            }else{
                Balance = Balance - withdrawAmount;
                alert("Withdrawal successful. New balance: $" + Balance);
                transactionCount ++;
            }
            
            break;

        case "4":
            alert("You made " + transactionCount+ " transaction(s). Goodbye");
            isRunning = false;
            break;

        default:
            alert("Invalid choice"); 

              }
        }
    }

   

