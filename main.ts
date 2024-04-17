#! /usr/bin/env node

//1 // intialize user Balance and pin Code :
import inquirer from "inquirer";
let balance:number = 50000;
let pin:number = 12881 ;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin1",
        message: "Enter your pin code",
        type: "number"

    }]);

    //2:
    if(pinAnswer.pin1 === pin){
        console.log("Correct pin Code");}
        let operationAns = await inquirer.prompt([{
            name: "operations",
            type: "list",
            message: "select one operation",
            choices: ["withdraw", "Check Balance inquiry", "Fast Cash Withdrawl"],
        }]);
        
    
    //3: 
    if(operationAns.operations === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount you want to withdraw",

            }]);
            if(amountAns.amount < balance ){
                balance -= amountAns.amount;
                console.log(" Now your balance is " + balance)
            }
            else{
                console.log("insufficient balance")
            }

    }
    //4
    else if (operationAns.operations === "Check Balance inquiry"){
        console.log("Your Current Balance is " + balance);
    }
    else if (operationAns.operations ==="Fast Cash Withdrawl"){
        let fast = await inquirer.prompt(
            [
            {
                name: "fast_opt",
                type: "list",
                message: "how much money you want to withdraw",
                choices: ["1000", "5000", "10000", "20000"],
            }]);
     if (fast.fast_opt === "1000"){
        balance -= fast.fast_opt;
        console.log(`Your remaining balance is ${balance} `);
    
     } 
     if(fast.fast_opt === "5000"){
        balance -= fast.fast_opt;
        console.log(`Your remaining balance is ${balance}`);
     }
     
     //5:
     if(fast.fas_opt ==="10000"){
        balance -= fast.fast_opt;
        console.log(`your remaining balance is ${balance}`);
     }
    }

    else{
        console.log("Invalid pin code");

    }